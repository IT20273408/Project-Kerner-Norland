import React from "react";
import '../index.css';  
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="bg-[#E6D0BE] min-h-screen text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="p-10 flex flex-col md:flex-row items-center">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold">BOOK YOUR CONCERT TICKETS</h1>
          <p className="mt-2 text-gray-700">100% Refunds for Cancellations*</p>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
        <motion.img
          src="/images/guitarist.png"
          alt="Guitarist"
          className="w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          
        />
      </section>

      {/* Events Section */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold">WATCH YOUR FAVORITE ARTISTS ONSTAGE</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
        <div className="flex gap-4 mt-6 overflow-x-auto">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="min-w-[200px] p-4 border rounded-lg shadow">
              <h3 className="font-bold">Event {index + 1}</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
          ))}
        </div>
        <button className="mt-4 px-4 py-2 border">View Events and Register</button>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;

