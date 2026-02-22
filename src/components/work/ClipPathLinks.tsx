import { MouseEvent } from "react";
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
import { useAnimate } from "framer-motion";
import { IconType } from "react-icons";

export const Example = () => {
  return (
    <div className="px-10">
      <div className="mx-auto max-w-7xl">
        <ClipPathLinks />
      </div>
      <span className="text-white">and Continue to learning .....</span>
    </div>
  );
};

const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-white border border-white">
      {/* Row 1 */}
      <div className="grid grid-cols-2 divide-x divide-white">
        <LinkBox Icon={SiReact} />
        <LinkBox Icon={SiTypescript} />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-3 divide-x divide-white">
        <LinkBox Icon={SiHtml5} />
        <LinkBox Icon={SiJavascript} />
        <LinkBox Icon={SiTailwindcss} />
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-5 divide-x divide-white">
        <LinkBox Icon={SiNodedotjs} />
        <LinkBox Icon={SiExpress} />
        <LinkBox Icon={SiMongodb} />
        <LinkBox Icon={SiMysql} />
        <LinkBox Icon={SiGithub} />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
  [key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

export const LinkBox = ({ Icon }: { Icon: IconType }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
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
    <a
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-24 w-full place-content-center cursor-pointer"
    >
      <Icon className="text-3xl md:text-4xl" />

      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-white text-black"
      >
        <Icon className="text-3xl md:text-4xl" />
      </div>
    </a>
  );
};