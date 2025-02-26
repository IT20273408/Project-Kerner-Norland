import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import guitaristImage from "../images/guitarist.png"; // Use the uploaded image

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

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollDown = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="bg-[#E6D0BE] text-black  ">
      <Navbar />

      <section className="w-[80%] mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10 h-[80vh]">

    {/* Left Side: Text & Video List */}
<div className="lg:w-1/3 w-full flex flex-col items-start relative">
  <h2 className="text-3xl font-bold text-left">BOOK YOUR CONCERT TICKETS</h2>
  <p className="text-sm text-black mt-2 text-left">
    <strong>100% Refunds for Cancellations*</strong>
  </p>
  <p className="text-sm text-gray-800 mt-1 text-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra elit id justo lacinia pellentesque. In id velit est.
  </p>

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




       {/* Middle: Illustration */}
<div className="lg:w-1/3 w-full flex justify-center">
  <motion.img
    src={guitaristImage}
    alt="Guitarist"
    className="w-full max-w-[800px]" // Adjust the max width as needed
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  />
</div>

        {/* Right Side: Scroll Indicator */}
        <div className="lg:w-1/3 w-full flex flex-col items-end">
          <div className="text-xl font-bold">0{currentIndex + 1} / 0{videos.length}</div>
          <div className="w-1 h-24 bg-gray-400 mt-2 relative rounded-lg overflow-hidden">
            <motion.div className="w-full bg-black absolute bottom-0 rounded-lg" style={{ height: `${((currentIndex + 1) / videos.length) * 100}%` }}></motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
