import { useMotionValue, motion } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const AboutMe = () => {
  return (
    <div>
      <Link
        heading="Inventory Management Dashboard"
        subheading="A responsive inventory dashboard built with React and Redux Toolkit featuring dynamic state management, reusable UI components, real-time data rendering, and REST API integration."
        href="#"
      />

      <Link
        heading="Attendance Management UI"
        subheading="A modern attendance management interface built with React and TypeScript featuring protected routes, API integration, advanced form validation, and optimized component architecture."
        href="#"
      />

      <Link
        heading="Personal Portfolio"
        subheading="A personal portfolio built with React, TypeScript, and Framer Motion showcasing smooth animations, responsive layouts, and modular component design."
        href="#"
      />
    </div>
  );
};

interface LinkProps {
  heading: string;
  subheading: string;
  href: string;
}

const Link = ({ heading, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-6 transition-colors duration-500 hover:border-violet-500 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl md:text-5xl font-bold text-neutral-400 transition-colors duration-500 group-hover:text-violet-500"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className={`inline-block ${
                l === " " ? "whitespace-pre" : ""
              }`}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>

        <span className="relative z-10 mt-3 block text-base text-neutral-400 transition-colors duration-500 group-hover:text-white">
          {subheading}
        </span>
      </div>

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-violet-500 text-xl" />
      </motion.div>
    </motion.a>
  );
};