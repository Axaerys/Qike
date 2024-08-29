import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    //
    <header className="padding-x py-8 absolute z-10 w-full lg:w-[80rem] sm:w-full md:w-full 4xl:w-full ">
      <nav className="flex justify-between items-center max-container">
        <a href="">
          <img src={headerLogo} alt="Logo" width={120} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-monteserrat leading-normal text-lg text-slate-gray hover:text-coral-red td"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button>
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="hidden max-lg:block"
          />
        </button>
      </nav>
    </header>
  );
};

export default Nav;
