import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  return (
    <div className="sticky top-0 scroll:mb-8">
      <nav className="py-4 text-white bg-[#1A2238]  select-none ">
        <div className="flex items-center justify-around ">
          <div className="ml-2">
            <a href="/" className="text-4xl font-bold select-none">
              Musavi
            </a>
          </div>
          <div className="hidden text-xl gap-7 lg:flex">
            <a href="/" className="hover:opacity-50">
              Home
            </a>
            <a href="#about" className="hover:opacity-50">
              About
            </a>
            <a href="#contact" className="hover:opacity-50">
              Contact
            </a>
          </div>
          <div class="flex lg:hidden">
            <AiOutlineMenu className="text-3xl" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
