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
  const [currentIndex, setCurrentIndex] = useState(0); 
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, 
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


  const newsData = [
    {
      id: 1,
      image: "https://www.wtnh.com/wp-content/uploads/sites/100/2022/12/AP19230031361205.jpg?w=2100&h=1440&crop=1",
      title: "Goo Goo Dolls announce 2023 UK and Ireland tour",
      date: "30th March 2022",
      url: "https://www.wtnh.com/music-in-connecticut/the-goo-goo-dolls-to-rock-hartford-healthcare-amphitheatre-in-2023/",
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dNgMFKFB86YPKfu4jOZJedzxLjzVPdZMNg&s",
      title: "Avril Lavigne’s New Hit Single “Head Above Water”",
      date: "30th March 2022",
      url: "https://www.ccmmagazine.com/news/avril-lavigne-performs-head-above-water-on-the-tonight-show/",
    },
    {
      id: 3,
      image: "https://live.staticflickr.com/3920/15145696577_0a0199c1ff_b.jpg",
      title: "Simple Plan Marks 20-Year Anniversary Of Iconic Album",
      date: "30th March 2022",
      url: "https://thehardtimes.net/culture/simple-plan-learns-that-life-is-a-nightmare-in-their-40s-too/",
    },
  ];
  

  const cards = [
    { id: "01", color: "bg-yellow-200", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." },
    { id: "02", color: "bg-orange-300", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." },
    { id: "03", color: "bg-purple-300", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." },
    { id: "04", color: "bg-lime-200", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." },
    { id: "05", color: "bg-blue-300", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." }
  ];
  
  const [hoveredIndex, setHoveredIndex] = useState(null);

  
  return (
    <div className="bg-[#DDC3B4] text-black">
      <Navbar />
     
<div className="fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-end text-right">
  <div className="text-xl font-bold">{`${activeSection.toString().padStart(2, '0')} / 04`}</div>
  <div className="w-1 h-24 bg-gray-400 mt-2 relative rounded-lg overflow-hidden">
    <motion.div
      className="w-full absolute bottom-0 rounded-lg"
      animate={{
        height: `${100 / sections.length}%`,
        top: `${(activeSection - 1) * (100 / sections.length)}%`, 
      }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: 'black' }} 
    ></motion.div>
  </div>
</div>





     
{/* -----------------------------------------------------------------------------------1----------------------------------------------------------------------------------- */}
<section className="w-[80%] mx-auto mt-10 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10" data-section="1">

  <div className="md:w-1/2 lg:w-1/3 w-full flex flex-col items-start relative space-y-4">
    <h2 className="text-4xl font-bold">BOOK YOUR CONCERT TICKETS</h2>
    <p className="text-lg font-semibold">100% Refunds for Cancellations*</p>
    <p className="text-sm text-gray-800">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>

    
    <div className="relative w-full flex flex-col items-start overflow-hidden max-h-[340px] md:max-h-[360px] lg:max-h-[380px]">
      {videos.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0.5 }}
          transition={{ duration: 0.5 }}
          className={`relative bg-white rounded-lg shadow-md mt-4 w-full max-w-[300px] ${
            index === currentIndex ? "block" : "hidden"
          }`}
        >
          <div className="relative group cursor-pointer">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-[120px] lg:h-[150px] object-cover rounded-lg"
            />
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
  <h3 className="font-bold text-sm lg:text-lg mb-6">{video.title}</h3>
  
  <div className="flex justify-between mb-4">
    <p className="text-xs lg:text-sm text-gray-700 text-left">{video.location}</p>
    <p className="text-xs lg:text-sm text-gray-600 text-right">{video.date}</p>
  </div>
</div>


        </motion.div>
      ))}
    </div>


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


  <div className="md:w-1/2 lg:w-2/3 w-full flex justify-center">
    <motion.img
      src={guitaristImage}
      alt="Guitarist"
      className="w-full max-w-[200px] sm:max-w-[180px] md:max-w-[300px] lg:max-w-[500px] xl:max-w-[600px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  </div>
</section>














{/* -----------------------------------------------------------------------------------2----------------------------------------------------------------------------------- */}

<section className="mx-auto py-20 bg-white" data-section="2">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <h2 className="text-4xl font-bold text-left">
          WATCH YOUR FAVORITE ARTISTS ONSTAGE
        </h2>
        <p className="text-left mt-8 w-full max-w-[1200px] font-[400] whitespace-normal overflow-visible">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>






<div className="relative flex justify-center mt-10 space-x-[-40px] md:space-x-[-50px] overflow-hidden">
  {cards.map((card, index) => (
    <motion.div
      key={card.id}
      className={`p-6 ${card.color} rounded-lg shadow-md w-[70%] sm:w-[75%] md:w-[360px] text-left relative transition-all duration-300 
      ${hoveredIndex === index ? "z-50 scale-105" : "z-10 scale-100"}`}
      whileHover={{ scale: 1.05 }} 
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="flex justify-between items-start">
        <p className="font-bold text-black leading-tight text-[10px] sm:text-[11px] md:text-base">{card.title}</p>
        <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center border-2 border-black rounded-full text-[8px] sm:text-[9px] md:text-sm font-bold text-black">
          {card.id}
        </div>
      </div>
      

      <p className="text-[10px] sm:text-[11px] md:text-sm text-gray-800 mt-4 hidden md:block">{card.description}</p>
      <p className="text-[10px] sm:text-[11px] md:text-sm text-black mt-4 font-[600] hidden md:block">{card.para}</p>

      {hoveredIndex === index && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-[10px] sm:text-[11px] md:text-sm font-bold">
          Play
        </div>
      )}
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

    <div className="flex justify-center w-full lg:w-1/2">
      <img 
        src={guitarImage} 
        alt="Guitarist" 
        className="max-w-[450px] w-full object-contain"
      />
    </div>

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

  <section className="bg-white mx-auto py-20" data-section="4">
  <div className="w-[80%] mx-auto">
    <h2 className="text-[38px] leading-[46px] tracking-[0] text-black font-bold font-['Bebas Neue']">
      FROM THE NEWSROOM
    </h2>
    <p className="text-left mt-8 w-full max-w-[1200px] font-[400] whitespace-nowrap overflow-hidden text-ellipsis">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
        


    <div className="flex flex-wrap gap-6 mt-20 relative">
  {newsData.map((news, index) => (
    <motion.div
      key={news.id}
      className="relative w-72 h-72 rounded-lg shadow-lg overflow-hidden cursor-pointer bg-white"
      whileHover={{ scale: 1.3, zIndex: 20 }}
    >

      <div className="w-full h-1/2 relative">
        <img src={news.image} alt="News" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition">
          <button
            className="w-14 h-14 text-[10px] flex items-center justify-center bg-black text-white rounded-full"
            onClick={() => window.open(news.url, "_blank")}
          >
            Read
          </button>
        </div>
      </div>


      <div className="w-full h-1/2 p-4 flex flex-col justify-between">
        <h3 className="font-bold text-left text-lg">{news.title}</h3> 
        <div className="flex justify-between items-center text-xs text-gray-600 mt-4"> 
          <p className="text-left">News</p>
          <p className="text-right">{news.date}</p>
        </div>
      </div>
    </motion.div>
  ))}
</div>




        <div className="text-center mt-10">
      <button className="px-[32px] py-[4px] text-[14px] font-bold bg-black text-white shadow-lg border border-black transition duration-300 hover:bg-white hover:text-black flex ml-auto">
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
