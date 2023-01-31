import React from "react";

import Logo from "./../assets/logo-mb.svg";
import SearchIcon from "./../assets/search-icon.svg";

const Header = () => {
  return (
    <React.Fragment>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#101625] mb-3">
        <div className="container px-2 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <img src={Logo} />
            </a>

            <img src={SearchIcon} />

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div
            className="lg:flex flex-grow items-center"
            id="example-navbar-warning"
          ></div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
