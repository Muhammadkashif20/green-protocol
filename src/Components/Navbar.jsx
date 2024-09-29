import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="text-white body-font  bg-green-700 w-full ps-[8rem] fixed z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl font-bold text-white ">
              Green Protocol
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-[2rem] font-semibold text-[1.1rem] hover:cursor-pointer">Problem</a>
            <a className="mr-[2rem] font-semibold text-[1.1rem] hover:cursor-pointer">Solution</a>
            <a className="mr-[2rem] font-semibold text-[1.1rem] hover:cursor-pointer">
              BusinessModel
            </a>
            <a className="mr-[2rem] font-semibold text-[1.1rem] hover:cursor-pointer">
              Profit Distribution
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
