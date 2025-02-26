import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPlay } from "react-icons/fa";

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
    <div className="bg-[#E6D0BE] min-h-screen text-black">
      <Navbar />

      <section className="flex flex-row justify-between items-center px-16 py-10">
        {/* Left Side: Video + Text (Same Width) */}
        <div className="w-1/3">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0.5 }}
              transition={{ duration: 0.5 }}
              className={`relative bg-white rounded-lg shadow-md mb-6 ${index === currentIndex ? "block" : "hidden"}`}
            >
              {/* Video Thumbnail */}
              <div className="relative group cursor-pointer">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition"
                >
                  <FaPlay className="text-white text-3xl" />
                </a>
              </div>
              {/* Text below Video (Same Width) */}
              <div className="p-4">
                <h3 className="font-bold text-lg">{video.title}</h3>
                <p className="text-sm text-gray-700">{video.location}</p>
                <p className="text-sm text-gray-600">{video.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center: Illustration */}
        <div className="w-1/3 flex justify-center">
          <motion.img
            src="/images/guitarist.png"
            alt="Guitarist"
            className="w-full max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Right Side: Counter and Scroll Indicator */}
        <div className="w-1/3 flex flex-col items-end">
          <div className="text-xl font-bold">0{currentIndex + 1} / 0{videos.length}</div>
          <div className="w-1 h-24 bg-gray-400 mt-2 relative rounded-lg overflow-hidden">
            <motion.div
              className="w-full bg-black absolute bottom-0 rounded-lg"
              style={{ height: `${((currentIndex + 1) / videos.length) * 100}%` }}
            ></motion.div>
          </div>
          {currentIndex < videos.length - 1 && (
            <button onClick={handleScrollDown} className="mt-4 text-lg text-gray-700">
              ↓
            </button>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
