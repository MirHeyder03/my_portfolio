import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="sticky top-0 select-none bg-[#1A2238] text-white">
      <nav className={isNavOpen ? "h-screen w-screen  bg-black" : ""}>
        <div
          className={
            isNavOpen
              ? "flex items-center justify-center text-center"
              : "flex items-center text-center justify-evenly p-4"
          }
        >
          <div className="ml-2">
            <a
              href="#"
              className={
                isNavOpen ? "hidden" : "text-2xl font-bold select-none"
              }
            >
              Musavi
            </a>
          </div>
          <div className="flex flex-col items-center w-full gap-20 lg:w-auto">
            <div
              className={isNavOpen ? "ml-auto md:mr-16 mr-8 mt-10" : "hidden"}
            >
              <button onClick={() => setIsNavOpen(false)}>
                <ImCross className={"text-white text-3xl"} />
              </button>
            </div>
            <div
              className={
                isNavOpen
                  ? "flex flex-col gap-20 text-3xl"
                  : "hidden text-xl gap-7 lg:flex "
              }
            >
              <a
                onClick={() => setIsNavOpen(false)}
                to="/"
                className="leading-10 hover:opacity-50"
              >
                Home
              </a>
              <a
                onClick={() => setIsNavOpen(false)}
                href="#about"
                className="leading-10 hover:opacity-50"
              >
                About
              </a>
              <a
                onClick={() => setIsNavOpen(false)}
                href="#skills"
                className="leading-10 hover:opacity-50"
              >
                Skills
              </a>
              <a
                onClick={() => setIsNavOpen(false)}
                href="#contact"
                className="leading-10 hover:opacity-50"
              >
                Contact
              </a>
              <a
                onClick={() => setIsNavOpen(false)}
                href="#portofolio"
                className="leading-10 hover:opacity-50"
              >
                Portofolio
              </a>
              <a
                className="max-w-[10rem] mx-auto px-4 py-1 text-white border-none rounded-xl bg-gradient-to-r from-cyan-500 text- to-teal-500 hover:opacity-50 text-center leading-8"
                href="#"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button onClick={() => setIsNavOpen(true)}>
              <AiOutlineMenu
                className={isNavOpen ? "hidden" : "text-3xl block"}
              />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
