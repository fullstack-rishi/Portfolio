import picImage from "../../assets/Profile.jpg.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const [text] = useTypewriter({
    words: ["UI Fullstack Developer", "React Developer"],
    loop: true,
  });

  return (
    <div className="flex flex-col mt-10 md:flex-row justify-between items-center px-6 md:px-16">

      {/* LEFT SECTION */}
      <div className="md:w-1/2 flex flex-col gap-6 py-10">

        <div className="text-2xl md:text-4xl font-semibold">
          I am{" "}
          <span className="text-violet-500">
            Rushikesh Barve
          </span>
        </div>

        <div className="text-gray-400 leading-relaxed">
          I specialize in building modern, responsive user interfaces using{" "}
          <span className="text-violet-400">React</span> and{" "}
          <span className="text-violet-400">TypeScript</span>. 
          My focus is on clean component architecture, efficient state management, 
          and delivering smooth, high-performance frontend experiences.
        </div>

        <div className="text-3xl md:text-4xl font-semibold text-violet-500 mt-6">
          {text}
          <Cursor />
        </div>

      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="py-10">
        <img
          src={picImage}
          alt="Rushikesh Barve"
          className="w-72 md:w-96 rounded-xl shadow-2xl object-cover"
        />
      </div>

    </div>
  );
}