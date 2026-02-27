import { MouseEvent } from "react";
import { useAnimate } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiGithub,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiMysql,
} from "react-icons/si";

/* ================= CLIP PATH CONSTANTS ================= */

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "top" | "left" | "bottom" | "right";

const ENTRANCE_KEYFRAMES: Record<Side, string[]> = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: Record<Side, string[]> = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

/* ================= LINK BOX ================= */

const LinkBox = ({
  Icon,
  color,
}: {
  Icon: IconType;
  color: string;
}) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const sides = [
      { side: "left", v: Math.abs(box.left - e.clientX) },
      { side: "right", v: Math.abs(box.right - e.clientX) },
      { side: "top", v: Math.abs(box.top - e.clientY) },
      { side: "bottom", v: Math.abs(box.bottom - e.clientY) },
    ];

    return sides.sort((a, b) => a.v - b.v)[0].side as Side;
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[side] });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: EXIT_KEYFRAMES[side] });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-24 sm:h-28 w-full place-content-center cursor-pointer"
    >
      {/* Base icon (brand color) */}
      <Icon className={`text-3xl sm:text-4xl ${color}`} />

      {/* Animated overlay */}
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-white text-black"
      >
        <Icon className="text-3xl sm:text-4xl" />
      </div>
    </div>
  );
};

/* ================= MAIN SKILLS SECTION ================= */

const SkillsSection = () => {
  return (
    <div className="px-4 sm:px-8 md:px-10">
      <div className="mx-auto max-w-7xl border border-white divide-y divide-white">

        {/* Row 1 */}
        <div className="grid grid-cols-2 divide-x divide-white">
          <LinkBox Icon={SiReact} color="text-cyan-400" />
          <LinkBox Icon={SiTypescript} color="text-blue-500" />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 divide-x divide-white">
          <LinkBox Icon={SiHtml5} color="text-orange-500" />
          <LinkBox Icon={SiJavascript} color="text-yellow-400" />
          <LinkBox Icon={SiTailwindcss} color="text-sky-400" />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-5 divide-x divide-white">
          <LinkBox Icon={SiNodedotjs} color="text-green-500" />
          <LinkBox Icon={SiExpress} color="text-gray-300" />
          <LinkBox Icon={SiMongodb} color="text-green-400" />
          <LinkBox Icon={SiMysql} color="text-blue-400" />
          <LinkBox Icon={SiGithub} color="text-gray-200" />
        </div>

      </div>

      <p className="text-gray-400 mt-6 text-sm sm:text-base">
        and Continue to learning .....
      </p>
    </div>
  );
};

export default SkillsSection;