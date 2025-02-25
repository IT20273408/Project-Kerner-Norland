import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
    
      <div className="flex-grow"></div>

   
      <footer className="bg-black text-white py-8 md:py-20">
        <div className="w-4/5 mx-auto text-xs md:text-sm font-semibold">
         
          <div className="flex justify-end">
            <button className="border border-white text-white font-semibold px-3 py-1 md:px-4 md:py-2 rounded-md text-xs md:text-sm 
              transition duration-300 ease-in-out hover:bg-white hover:text-black">
              Ask Us Anything
            </button>
          </div>

         
          <hr className="border-white-600 my-4 md:my-6" />

         
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <p className="text-xs md:text-sm ">Copyright &copy; 2022 Kerner Norland. All Rights Reserved.</p>
            <div className="flex space-x-6 md:space-x-8 text-xs md:text-sm mt-2 md:mt-0">
              <a href="#" className="hover:text-white border-b-2 border-white ">Terms of Service</a>
              <a href="#" className="hover:text-white ">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
