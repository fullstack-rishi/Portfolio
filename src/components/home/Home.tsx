import picImage from "../../assets/Profile.jpg.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const [text] = useTypewriter({
    words: ["UI Fullstack Developer", "React Developer"],
    loop: true,
  });

  return (
    <div className="flex flex-col mt-10 md:flex-row justify-between items-center px-4 sm:px-8 md:px-0">

      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 py-8 md:py-10 md:px-2 text-center md:text-left">

        {/* Name */}
        <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold">
          I am{" "}
          <span className="text-accent">
            Rushikesh Barve
          </span>
        </div>

        {/* Description */}
        <div className="text-gray-500 mt-4 sm:mt-6 leading-relaxed max-w-xl mx-auto md:mx-0">
          I specialize in{" "}
          <span className="text-accent">
            frontend development
          </span>{" "}
          using{" "}
          <span className="text-accent">
            React
          </span>{" "}
          and{" "}
          <span className="text-accent">
            TypeScript
          </span>
          . My focus is on building{" "}
          <span className="text-accent">
            clean, responsive interfaces
          </span>{" "}
          with scalable component architecture and high performance.
        </div>

        {/* Typewriter */}
        <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-accent mt-8 sm:mt-10">
          {text}
          <Cursor />
        </div>

      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="py-6 sm:py-10 md:px-2 flex justify-center">
        <img
          src={picImage}
          alt="Rushikesh Barve"
          className="w-60 sm:w-72 md:w-96 object-cover rounded-lg"
        />
      </div>

    </div>
  );
}