"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-fuchsia-300 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-10">
        {/* Logo */}
        <div className="text-black  text-xl   hover:text-fuchsia-500 font-bold">
          <Link href="/"  >My App</Link>
        </div>

        {/* Menu Items for Desktop and Larger Screens */}
        <div className="hidden md:flex space-x-6">
  <Link href="/" className="text-black whitespace-nowrap hover:text-purple-500 font-bold ">Home</Link>
  <Link href="/about" className="text-black whitespace-nowrap hover:text-purple-500 font-bold ">About</Link>
  <Link href="/services" className="text-black whitespace-nowrap hover:text-purple-500 font-bold ">Services</Link>
  <Link href="/contact" className="text-black whitespace-nowrap hover:text-purple-500 font-bold ">Contact</Link>
</div>


        {/* Hamburger Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-white p-4 fixed top-0 w-full z-50">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-blue-500" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="text-blue-500" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/services" className="text-blue-500" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/contact" className="text-blue-500" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
