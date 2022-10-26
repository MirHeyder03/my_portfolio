import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";

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
              href="/"
              className={
                isNavOpen ? "hidden" : "text-2xl font-bold select-none"
              }
            >
              Musavi
            </a>
          </div>
          <div className="flex flex-col w-full gap-20 lg:w-auto">
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
                href="/"
                className="hover:opacity-50"
              >
                Home
              </a>
              <a
                onClick={() => setIsNavOpen(false)}
                href="#about"
                className="hover:opacity-50"
              >
                About
              </a>
              <a
                onClick={() => setIsNavOpen(false)}
                href="#contact"
                className="hover:opacity-50"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button onClick={() => setIsNavOpen(true)}>
              <AiOutlineMenu
                className={isNavOpen ? "text-3xl hidden" : "block"}
              />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
