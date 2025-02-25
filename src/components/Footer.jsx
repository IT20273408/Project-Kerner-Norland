import React, { useState } from "react";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow"></div>

      <footer className="bg-black text-white py-8 md:py-20">
        <div className="w-4/5 mx-auto text-xs md:text-sm font-semibold">
          <div className="flex justify-end">
            <button className="border border-white text-white font-semibold px-3 py-1 md:px-4 md:py-2 rounded-md text-xs md:text-sm transition duration-300 ease-in-out hover:bg-white hover:text-black">
              Ask Us Anything
            </button>
          </div>

          <hr className="border-white-600 my-4 md:my-6" />

          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 ">
            <p className="text-xs md:text-sm hover:text-white transition duration-300 ease-in-out">
              Copyright &copy; 2022 Kerner Norland. All Rights Reserved.
            </p>
            <div className="flex space-x-6 md:space-x-8 text-xs md:text-sm mt-2 md:mt-0">
              <a
                href="#"
                className={`hover:text-white ${
                  hoveredLink === "terms" ? "border-b-2 border-gray-400" : ""
                }`}
                onMouseEnter={() => setHoveredLink("terms")}
                onMouseLeave={() => setHoveredLink("")}
              >
                Terms of Service
              </a>
              <a
                href="#"
                className={`hover:text-white ${
                  hoveredLink === "privacy" ? "border-b-2 border-gray-400" : ""
                }`}
                onMouseEnter={() => setHoveredLink("privacy")}
                onMouseLeave={() => setHoveredLink("")}
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
