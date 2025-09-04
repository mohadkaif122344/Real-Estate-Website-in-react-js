

import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

const Properties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null); 

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1280) setCardsToShow(4);
      else if (window.innerWidth >= 1024) setCardsToShow(3);
      else if (window.innerWidth >= 640) setCardsToShow(2);
      else setCardsToShow(1);
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    if (currentIndex < projectsData.length - cardsToShow) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };


  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-[90px] md:py-[150px] bg-neutral-200 dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
        id="Properties"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center duration-300 hover:scale-110 ">
          Popular{" "}
          <span className="underline underline-offset-4 decoration-1 under">
            properties
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
          Crafting Spaces, Building Legacies – Explore Our Portfolio
        </p>

        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
            }}
 



          >
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 cursor-pointer"
                onClick={() => toggleDescription(index)}
              >
                 
  <div className="w-full  flex flex-col rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white">

              
             
                  <div className="w-full h-64 sm:h-72 lg:h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col flex-grow items-center bg-white ">
                  
               
                     <div className=" bg-white w-3/4 px-4 py-2 shadow-md rounded-md transition-all duration-300 hover:bg-gray-100 flex-grow flex flex-col" >
              
                    <h2 className="text-lg font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {project.price} <span className="px-1">|</span>{" "}
                      {project.location}
                    </p>
  
                    
                  <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === index ? "max-h-40 mt-2" : "max-h-0"
                      }`}
                    >
                      <p className="text-gray-600 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div> 




            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mt-24 gap-6">
          <button
            onClick={prevProject}
            className="bg-sky-800 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors h-12 w-12 shadow-lg"
            aria-label="Previous Projects"
            disabled={currentIndex === 0}
          >
            <img src={assets.left_arrow} alt="Previous" className="invert" />
          </button>

          <button
            onClick={nextProject}
            className="bg-sky-800 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors h-12 w-12 shadow-lg"
            aria-label="Next Project"
            disabled={currentIndex >= projectsData.length - cardsToShow}
          >
            <img src={assets.right_arrow} alt="Next" className="invert" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Properties;
