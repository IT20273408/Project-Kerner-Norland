import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content (Expands to take available space) */}
      <div className="flex-grow"></div>

      {/* Footer */}
      <footer className="bg-black text-white py-6 px-6 md:px-16 text-xs md:text-sm">
        {/* Ask Us Anything Button - Right Aligned */}
        <div className="flex justify-end">
          <button className="border border-white text-white px-3 py-1 md:px-4 md:py-2 rounded-md text-xs md:text-sm 
            transition duration-300 ease-in-out hover:bg-white hover:text-black">
            Ask Us Anything
          </button>
        </div>

        {/* Horizontal Line */}
        <hr className="border-gray-600 my-4 md:my-6" />

        {/* Footer Bottom - Left & Right Aligned Content */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p className="text-xs md:text-sm">&copy; 2022 Kerner Norland. All Rights Reserved.</p>
          <div className="flex space-x-2 md:space-x-4 text-xs md:text-sm mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
