import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center px-6 py-3 border-b border-black bg-[#E6D0BE]">
      <div className="flex flex-wrap justify-center md:justify-center lg:justify-start items-center w-full 
        gap-5 sm:flex-col md:flex-row lg:flex-row 
        sm:space-y-8 md:space-y-0 lg:space-y-0 
        space-x-0 md:space-x-6 lg:space-x-8 
        text-black font-medium lg:pl-[45%]">
        <a href="#" className="font-bold relative after:absolute after:w-[130%] after:h-[2px] after:bg-black after:bottom-[-2px] after:left-[-10%]">
          Home
        </a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Live</a>
        <a href="#" className="hover:underline">Resources</a>
        <button className="border border-black px-4 py-2 text-black font-medium hover:bg-black hover:text-white transition min-w-max">
          Register for Upcoming Events
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
