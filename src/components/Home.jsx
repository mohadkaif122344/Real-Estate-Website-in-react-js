import React, { useState, useEffect } from "react";

// import headerImg from "../assets/header_img.png";
import header from "../assets/house.jpg";

import { motion, AnimatePresence } from "framer-motion";


const Home = () => {
  const images = [header];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative min-h-screen flex items-center w-full overflow-hidden"
      id="Header"
    >
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 duration-300 hover:scale-105 hover:text-sky-300">
          Find the home that matches your vision
        </h2>
        <div className="space-x-6 mt-16 ">
          <a href="#Properties" className=" rounded-lg border border-white px-8 py-3 p-4  ">
            Properties
          </a>
          <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded rounded-lg ">
            Contact Us
          </a>
        </div>
      </motion.div>
      
    </div>
  );
};

export default Home;




