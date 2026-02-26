import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const whatsappLink =
    "https://wa.me/918180091357?text=Hi%20Rishi%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.";

  const emailLink =
    "mailto:rishi81800@gmail.com?subject=Project%20Inquiry&body=Hi%20Rishi%2C%20I%20would%20like%20to%20connect%20with%20you.";

  const navClass =
    "text-white text-lg cursor-pointer py-2 px-4 relative " +
    "after:content-[''] after:absolute after:bottom-0 after:left-0 " +
    "after:w-full after:h-0.5 after:bg-current after:scale-x-0 " +
    "hover:after:scale-x-100 after:transform " +
    "after:origin-bottom-right hover:after:origin-bottom-left " +
    "after:transition-transform after:duration-300";

  return (
    <nav className="bg-gray-800 p-4 relative z-50">
      <div className="flex justify-between gap-10 items-center h-16 w-full">
        
        {/* Logo */}
        <span className="text-white text-2xl font-bold cursor-pointer">
          <span className="text-violet-500">リシ</span> (Rushi)
        </span>

        {/* Mobile Toggle */}
        <div className="relative">
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {isOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-full right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-40 w-56">

              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="text-violet-500"
                className={navClass}
                onClick={toggleMenu}
              >
                <span className="text-violet-500">#</span>home
              </Link>

              <Link
                to="works"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="text-violet-500"
                className={navClass}
                onClick={toggleMenu}
              >
                <span className="text-violet-500">#</span>skills
              </Link>

              <Link
                to="about-me"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="text-violet-500"
                className={navClass}
                onClick={toggleMenu}
              >
                <span className="text-violet-500">#</span>projects
              </Link>

              <Link
                to="contacts"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="text-violet-500"
                className={navClass}
                onClick={toggleMenu}
              >
                <span className="text-violet-500">#</span>contacts
              </Link>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={navClass}
              >
                <span className="text-violet-500">#</span>whats-app
              </a>

              <a
                href={emailLink}
                className={navClass}
              >
                <span className="text-violet-500">#</span>email
              </a>
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">

          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-violet-500"
            className={navClass}
          >
            <span className="text-violet-500">#</span>home
          </Link>

          <Link
            to="works"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-violet-500"
            className={navClass}
          >
            <span className="text-violet-500">#</span>skills
          </Link>

          <Link
            to="about-me"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-violet-500"
            className={navClass}
          >
            <span className="text-violet-500">#</span>projects
          </Link>

          <Link
            to="contacts"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-violet-500"
            className={navClass}
          >
            <span className="text-violet-500">#</span>contacts
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={navClass}
          >
            <span className="text-violet-500">#</span>whats-app
          </a>

          <a
            href={emailLink}
            className={navClass}
          >
            <span className="text-violet-500">#</span>email
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;