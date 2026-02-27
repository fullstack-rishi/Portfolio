import { useEffect } from "react";
import Navbar from "./nav/Navbar";
import LineHorizontal from "./assets/LineHorizontal.svg";
import Home from "./components/home/Home";
import SkillsSection from "./components/work/ClipPathLinks";
import { AboutMe } from "./components/aboutMe/AboutMe";
import Contacts from "./components/contacts/Contacts";
import Footer from "./footer/Footer";
import "./index.css";

const App = () => {
  useEffect(() => {
    // Disable custom cursor on mobile
    if (window.innerWidth < 768) return;

    const dot = document.querySelector(".cursor-dot") as HTMLDivElement;
    const outline = document.querySelector(
      ".cursor-outline"
    ) as HTMLDivElement;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    const delay = 0.08;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dot) {
        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";
      }
    };

    const animate = () => {
      outlineX += (mouseX - outlineX) * delay;
      outlineY += (mouseY - outlineY) * delay;

      if (outline) {
        outline.style.left = outlineX + "px";
        outline.style.top = outlineY + "px";
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen flex font-code text-white bg-lightGray px-4">

        {/* Custom Cursor */}
        <div className="cursor-dot"></div>
        <div className="cursor-outline"></div>

        <div className="w-full flex flex-col bg-customGray mx-4 md:mx-20 px-4 py-2">

          <Navbar />

          {/* Home */}
          <section id="home" className="py-4">
            <Home />
          </section>

          {/* Skills */}
          <section id="works" className="mt-36 py-4">
            <div className="flex text-2xl mt-10 md:text-3xl lg:text-4xl font-semibold">
              <span className="text-voilet"># </span>skills
              <img
                src={LineHorizontal}
                className="h-20 w-1/2"
                alt="Line"
              />
            </div>

            <SkillsSection />
          </section>

          {/* Projects */}
          <section id="about-me" className="min-h-screen mt-36 py-4">
            <div className="flex text-2xl mt-10 md:text-3xl lg:text-4xl font-semibold">
              <span className="text-voilet"># </span>Projects
              <img
                src={LineHorizontal}
                className="h-20 w-1/2"
                alt="Line"
              />
            </div>

            <div className="mx-2 md:mx-36">
              <AboutMe />
            </div>
          </section>

          {/* Contacts */}
          <section id="contacts" className="min-h-screen mt-36 py-4">
            <div className="flex text-2xl md:text-3xl mt-20 lg:text-4xl font-semibold">
              <span className="text-voilet"># </span>Contacts
              <img
                src={LineHorizontal}
                className="h-20 w-1/2"
                alt="Line"
              />
            </div>

            <Contacts />
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default App;