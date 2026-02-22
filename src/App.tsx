import Navbar from "./nav/Navbar";
import LineHorizontal from "./assets/LineHorizontal.svg";
import { useEffect } from "react";
import Home from "./components/home/Home";
import "./index.css";
import { Example } from "./components/work/ClipPathLinks";
import {AboutMe} from "./components/aboutMe/AboutMe";
import Contacts from "./components/contacts/Contacts";
import Footer from "./footer/Footer.tsx";

const App = () => {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-omkar]") as HTMLDivElement;
    const cursorDotOutline = document.querySelector(
      "[data-mante]"
    ) as HTMLDivElement;

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot) {
        cursorDot.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          {
            duration: 0,
            fill: "forwards",
          }
        );
      }

      if (cursorDotOutline) {
        cursorDotOutline.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          {
            duration: 1000,
            fill: "forwards",
          }
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen flex font-code text-white bg-lightGray px-4">
        <div className="cursor-dot" data-omkar></div>
        <div className="cursor-outline" data-mante></div>
        <div className="w-full flex flex-col bg-customGray mx-4 md:mx-20 px-4 py-2">
          <Navbar />
          <section id="home" className="py-4">
            <Home />
          </section>
          <section id="works" className=" mt-36 py-4">
            <div className="flex text-2xl mt-10 md:text-3xl lg:text-4xl font-semibold">
              <span className="text-voilet"># </span>skills
              <img src={LineHorizontal} className="h-20 w-1/2" alt="Line" />
            </div>
            <Example />
          </section>
          <section id="about-me" className="min-h-screen  mt-36 py-4">
          <div className="flex text-2xl mt-10 md:text-3xl lg:text-4xl font-semibold">
              <span className="text-voilet"># </span>Projects
              <img src={LineHorizontal} className="h-20 w-1/2" alt="Line" />
            </div>
            <div className="mx-2 md:mx-36">
            <AboutMe/>
            </div>
          </section>
          <section id="contacts" className="min-h-screen  mt-36 py-4">
          <div className="flex text-2xl md:text-3xl mt-20 lg:text-4xl font-semibold">
              <span className="text-voilet "># </span>Contacts
              <img src={LineHorizontal} className="h-20 w-1/2" alt="Line" />
            </div>
            <Contacts />
          </section>
        </div>
      </div>
          <Footer/>
    </>
  );
};

export default App;
