import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-[90px] md:py-[150px] bg-neutral-300 dark:bg-gray-900 transition-colors duration-300 border-t">
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full  overflow-hidden "
        id="About"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-black dark:text-white    
                           duration-300 hover:scale-110 
                         ">
          About{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Our Properties
          </span>
        </h1>

        <p className="text-gray-600 dark:text-gray-300 max-w-80 text-center mb-8">
          Passionate About Properties, Dedicated to Your Vision
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-center md:gap-20 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl active:shadow-xl

">
        
  

          <img
            src={assets.brand3_img}
            alt="logo"
            className="w-full sm:w-1/2 max-w-lg"
          />

          <div className="flex flex-col items-center md:items-start mt-10 md:mt-0 text-gray-700 dark:text-gray-200">
            <p className="my-10 max-w-lg text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              quibusdam facilis, quasi ipsa odio excepturi? Consequuntur
              reprehenderit, blanditiis cumque aspernatur corrupti perspiciatis,
              aut amet suscipit totam minus molestiae architecto ullam.
            </p>

            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
              <div>
                <p className="text-4xl font-medium">320+</p>
                <p>Properties Sold</p>
              </div>
              <div>
                <p className="text-4xl font-medium">585+</p>
                <p>Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl font-medium">30+</p>
                <p>Expert Agents</p>
              </div>
              <div>
                <p className="text-4xl font-medium">25+</p>
                <p>Cities Served</p>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
              Learn more
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
