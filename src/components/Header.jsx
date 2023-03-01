import { NavLink } from "react-router-dom";
import Logo from "./assets/logoo.png";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="container mx-auto">
      <div className="flex md:pt-4 py-8 pb-12 justify-between items-center mx-4 lg:mx-0">
        <img src={Logo} alt="logo" className="w-16 cursor-pointer" />
        <div className="lg:hidden flex items-center">
          <div className="flex-shrink-0">
            <button
              className="rounded-md p-2 text-black hover:text-gray-800 focus:outline-none transition duration-150 ease-in-out"
              onClick={toggleMenu}
            >
              {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </button>
          </div>
        </div>
        <div className="hidden lg:flex justify-between space-x-6 items-center">
          <a
            href="/"
            className="px-1.5 py-1 text-lg hover:border-b-2 hover:border-b-pink-600 transition duration-150 ease-in-out"
          >
            Home
          </a>
          <a
            href="#gallery"
            className="px-1.5 py-1 text-lg hover:border-b-2 hover:border-b-pink-600 transition duration-150 ease-in-out"
          >
            Gallery
          </a>
          <a
            href="#about"
            className="px-1.5 py-1 text-lg hover:border-b-2 hover:border-b-pink-600 transition duration-150 ease-in-out"
          >
            About
          </a>
          <NavLink
            to="menu"
            className="px-1.5 py-1 text-lg hover:border-b-2 hover:border-b-pink-600 transition duration-150 ease-in-out"
          >
            Menu
          </NavLink>
          <NavLink
            to="order"
            className="border text-lg px-4 py-2 rounded-lg hover:bg-pink-500 bg-gradient-to-tl from-pink-400 to-pink-600 border-white hover:border-2 text-white hover:scale-95 hover:border-pink-600"
          >
            Order Now
          </NavLink>
        </div>
      </div>
      {/* Mobile Navigation Bar */}

      <div className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pb-4 flex flex-col justify-center items-center space-y-2">
          <NavLink
            to="/"
            className="px-1.5 py-1 text-lg hover:border-b-2 hover:border-b-pink-600 transition duration-150 ease-in-out"
          >
            Home
          </NavLink>
          <a
            href="#gallery"
            className="px-1.5 py-1 text-lg hover:border-b-2 hover:border-b-pink-600  transition duration-150 ease-in-out"
          >
            Gallery
          </a>
          <a
            href="#about"
            className="px-1.5 py-1 text-lg hover:border-b-2 hover:border-b-pink-600 transition duration-150 ease-in-out"
          >
            About
          </a>
          <NavLink
            to="menu"
            className="px-1.5 py-1 text-lg hover:border-b-2 hover:border-b-pink-600 transition duration-150 ease-in-out"
          >
            Menu
          </NavLink>
          <NavLink
            to="order"
            className="border text-lg px-4 py-2 rounded-lg hover:bg-pink-500 bg-gradient-to-tl from-pink-400 to-pink-600 border-white hover:border-2 text-white hover:scale-95 hover:border-pink-600"
          >
            Order Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
