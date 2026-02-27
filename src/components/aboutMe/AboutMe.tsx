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
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-6 transition-colors duration-500 hover:border-violet-500 md:py-8"
    >
      <div>
        <motion.span
          className="relative z-10 block text-2xl md:text-4xl font-bold text-neutral-400 transition-colors duration-500 group-hover:text-violet-500"
        >
          {heading}
        </motion.span>

        <span className="relative z-10 mt-3 block text-sm md:text-base text-neutral-400 transition-colors duration-500 group-hover:text-white">
          {subheading}
        </span>
      </div>

      {/* ✅ Arrow Animation Works on Laptop + Mobile */}
      <motion.div
        initial={{ x: 0, opacity: 1 }}
        whileHover={{ x: 10 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-violet-500 text-xl md:text-2xl" />
      </motion.div>
    </motion.a>
  );
};