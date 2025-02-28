import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import guitaristImage from "../images/guitarist.png";
import guitarImage from "../images/guitar.png";

const videos = [
  {
    id: 1,
    title: "Linkin Park One More Light Album Tour",
    location: "New York, USA",
    date: "30th March 2022",
    thumbnail: "https://cloud.radiofreccia.it/radiofreccia/News/Article/600x600/-number-radiofrecciatop20-crawling-for-chester-8lkpy.jpg",
    videoUrl: "https://www.youtube.com/watch?v=yRpFQQLMcYs",
  },
  {
    id: 2,
    title: "Coldplay World Tour",
    location: "London, UK",
    date: "15th April 2022",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSyGTsEIRc-r3IJ1n9Pr_d5ItLE_RLq2CJg&s",
    videoUrl: "https://www.youtube.com/watch?v=OM_Ew_gfvqM",
  },
];

const sections = [
  { id: 1, label: "BOOK YOUR CONCERT TICKETS" },
  { id: 2, label: "WATCH YOUR FAVORITE ARTISTS ONSTAGE" },
  { id: 3, label: "JOIN THE MAILING LIST" },
  { id: 4, label: "FROM THE NEWSROOM" },
];

const HomePage = () => {

  const [activeSection, setActiveSection] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0); // Added state for currentIndex

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // When 50% of the section is in view
    };
  
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(Number(entry.target.getAttribute("data-section")));
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sectionElements = document.querySelectorAll("[data-section]");
  
    sectionElements.forEach((section) => observer.observe(section));
  
    return () => sectionElements.forEach((section) => observer.unobserve(section));
  }, []);
  
  const handleScrollDown = () => {
    setCurrentIndex((prev) => (prev < videos.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="bg-[#DDC3B4] text-black">
      <Navbar />
      
      {/* Scroll Indicator */}
      <div className="fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-end text-right">
  <div className="text-xl font-bold">{`${activeSection.toString().padStart(2, '0')} / 04`}</div>
  <div className="w-1 h-24 bg-gray-400 mt-2 relative rounded-lg overflow-hidden">
    <motion.div
      className="w-full bg-black absolute bottom-0 rounded-lg"
      animate={{ height: `${(activeSection / sections.length) * 100}%` }}
      transition={{ duration: 0.5 }}
    ></motion.div>
  </div>
</div>

     
{/* -----------------------------------------------------------------------------------1----------------------------------------------------------------------------------- */}
<section className="w-[80%] mx-auto mt-10 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10"  data-section="1">


        {/* Left Side: Text & Video List */}
        <div className="lg:w-1/3 w-full flex flex-col items-start relative space-y-4">
          <h2 className="text-4xl font-bold">BOOK YOUR CONCERT TICKETS</h2>
          <p className="text-lg font-semibold">100% Refunds for Cancellations*</p>
          <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          
  <div className="relative w-full flex flex-col items-start">
    {videos.map((video, index) => (
      <motion.div
        key={video.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: index === currentIndex ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
        className={`relative bg-white rounded-lg shadow-md mt-4 w-full max-w-[300px] ${index === currentIndex ? "block" : "hidden"}`}
      >
            <div className="relative group cursor-pointer">
          <img src={video.thumbnail} alt={video.title} className="w-full h-[120px] lg:h-[150px] object-cover rounded-lg" />
              <a
            href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition"
              >
            <FaPlay className="text-white text-xl lg:text-2xl" />
              </a>
            </div>
        <div className="p-2 lg:p-4 text-left">
          <h3 className="font-bold text-sm lg:text-lg">{video.title}</h3>
          <p className="text-xs lg:text-sm text-gray-700">{video.location}</p>
          <p className="text-xs lg:text-sm text-gray-600">{video.date}</p>
            </div>
      </motion.div>
    ))}
          </div>

{/* ✅ Scroll Down Button - Now Always Visible */}
{currentIndex < videos.length - 1 && (
  <div className="w-full flex justify-center items-center mt-4">
    <button
      onClick={handleScrollDown}
      className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-black text-white rounded-full shadow-lg"
    >
      <IoIosArrowDown size={20} />
    </button>
  </div>
)}

        </div>




        <div className="lg:w-2/3 w-full flex justify-center">
  <motion.img
    src={guitaristImage}
    alt="Guitarist"
    className="w-full max-w-[200px] sm:max-w-[100px] md:max-w-[300px] lg:max-w-[500px] xl:max-w-[1000px]" 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  />
</div>

       
      </section>








{/* -----------------------------------------------------------------------------------2----------------------------------------------------------------------------------- */}

<section className=" mx-auto py-20 bg-white" data-section="2">
<div className="w-[80%] mx-auto ">
        <h2 className="text-4xl font-bold text-left">
          WATCH YOUR FAVORITE ARTISTS ONSTAGE
        </h2>
        <p className="text-gray-800 mt-4 max-w-3xl text-left  ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md w-52 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <p className="font-bold">Lorem ipsum dolor</p>
              <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet.</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10 ">
        <button className="px-[32px] py-[4px] text-[14px] font-bold bg-black text-white  shadow-lg border border-black transition duration-300 hover:bg-white hover:text-black flex ml-auto">
  View Events and Register
</button>

        </div>
        
      </div>
      </section>

      


      {/* -----------------------------------------------------------------------------------3----------------------------------------------------------------------------------- */}

      <section className="bg-[#A7D1D2] py-20 " data-section="3">
  <div className="w-[80%] mx-auto flex flex-col lg:flex-row items-center gap-4">
    
    {/* Image Section */}
    <div className="flex justify-center w-full lg:w-1/2">
      <img 
        src={guitarImage} 
        alt="Guitarist" 
        className="max-w-[450px] w-full object-contain"
      />
    </div>

    {/* Content Section */}
    <div className="lg:w-1/2 text-center lg:text-left">
    <h2 
        className="text-[38px] leading-[46px] tracking-[0] text-black font-bold"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        JOIN THE <br className="hidden lg:block"/> MAILING LIST
      </h2>
      
      <p className="mt-4  text-[18px] leading-[1.6] tracking-wide font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>

      {/* 1px Black Border */}
      <div className="border-t border-black w-full my-4"></div>

      
      <p className="mt-4  text-[14px] leading-[1.6] tracking-wide ">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>

      <div className="mt-6">
        <button className="px-[32px] py-[4px] text-[14px] font-bold bg-black text-white  shadow-lg border border-black transition duration-300 hover:bg-white hover:text-black">
          Subscribe
        </button>
      </div>
    </div>
  </div>
</section>

{/* -----------------------------------------------------------------------------------4----------------------------------------------------------------------------------- */}
      {/* From the Newsroom Section */}
      <section className="bg-white mx-auto py-20" data-section="4">
      <div className="w-[80%] mx-auto ">
        <h2 className="text-4xl font-bold text-left">FROM THE NEWSROOM</h2>
        <p className="text-left text-gray-800 mt-4 max-w-3xl ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="relative w-60 rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              {/* <img src={newsImage} alt="News" className="w-full h-40 object-cover" /> */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <button className="px-4 py-2 bg-white text-black rounded-lg">Read</button>
              </div>
              <div className="p-4 bg-white text-center">
                <h3 className="font-bold">Headline {index + 1}</h3>
                <p className="text-sm text-gray-600">30th March 2022</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
        <button className="px-[32px] py-[4px] text-[14px] font-bold bg-black text-white  shadow-lg border border-black transition duration-300 hover:bg-white hover:text-black flex ml-auto">
            Show Me More
          </button>
        </div>
          
        </div>

      </section>





      <Footer />
    </div>
  );
};

export default HomePage;
