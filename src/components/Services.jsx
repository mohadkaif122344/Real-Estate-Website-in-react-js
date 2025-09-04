
import React from "react";
import { ServicesCardItem } from "../assets/assets";
import { motion } from "framer-motion";

const Services = () => {

  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        
      },
    },
  };

 
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-[90px] bg-gray-200/30 dark:bg-gray-900 md:py-[150px] transition-colors bg-neutral-100 duration-300 border-t-0">
      <div className="container text-center">
        <p className="subtitle text-gray-700 dark:text-gray-300 font-bold duration-300 hover:scale-110 ">Services</p>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white underline duration-300 hover:scale-110 ">
          Services we offer
        </h2>

      
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }} 
          className="grid gap-6 mt-10 md:mt-16 sm:grid-cols-2 lg:grid-cols-4 place-items-center"
        >
          {ServicesCardItem.map((item) => (
            <motion.li
              key={item.id}
              variants={cardVariants}
              whileHover="hover"
              className="border border-gray-300 dark:border-gray-700 
                         p-[36px] rounded-lg bg-white dark:bg-gray-800 
                         hover:border-sky-400 transition-colors duration-300
                         flex flex-col items-center text-center shadow-md" id="Services"
            >
              
              <div className="bg-sky-200/30 dark:bg-sky-400/20 p-5 rounded-full flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  width={70}
                  height={70}
                />
              </div>

              
              <h4 className="text-[22px] font-bold my-3 text-gray-900 dark:text-white">
                {item.title}
              </h4>

              
              <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Services;
