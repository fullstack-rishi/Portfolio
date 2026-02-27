import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const whatsappLink =
    "https://wa.me/918180091357?text=Hi%20Rishi%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.";

  return (
    <nav className="bg-gray-800 px-4 py-3 relative z-50">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">

        {/* Logo */}
        <span className="text-white text-2xl font-bold cursor-pointer select-none">
          <span className="text-accent">リシ</span> (Rushi)
        </span>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {["home", "works", "about-me", "contacts"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth
              duration={500}
              className="text-white text-lg cursor-pointer relative py-2 px-2
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:h-0.5 after:w-full after:bg-current after:scale-x-0
                hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              <span className="text-hash">#</span>
              {item === "about-me"
                ? "projects"
                : item === "works"
                ? "skills"
                : item}
            </Link>
          ))}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg cursor-pointer relative py-2 px-2
              after:content-[''] after:absolute after:left-0 after:bottom-0
              after:h-0.5 after:w-full after:bg-current after:scale-x-0
              hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            <span className="text-hash">#</span>whats-app
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-800 border border-gray-700 rounded-xl shadow-lg overflow-hidden">
          {["home", "works", "about-me", "contacts"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth
              duration={500}
              onClick={toggleMenu}
              className="block text-white text-lg px-5 py-3 hover:bg-gray-700"
            >
              <span className="text-hash">#</span>
              {item === "about-me"
                ? "projects"
                : item === "works"
                ? "skills"
                : item}
            </Link>
          ))}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white text-lg px-5 py-3 hover:bg-gray-700"
          >
            <span className="text-hash">#</span>whats-app
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;