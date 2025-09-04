
  import { testimonialItems } from "../assets/assets";
import {
  RiArrowLeftSLine,
  RiStarFill,
  RiArrowRightSLine,
} from "@remixicon/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { motion } from "framer-motion";  

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-[90px] md:py-[150px] bg-neutral-200/60 dark:bg-gray-900 transition-colors duration-300">
      <div className="container text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="Subtitle text-gray-700 dark:text-gray-300 duration-300 hover:scale-110 "
        >
         <h1 className="font-semibold duration-300 hover:scale-110 ">Testimonials</h1> 
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          >
         <h2 className="text-2xl font-bold text-gray-900 dark:text-white underline duration-300 hover:scale-110 ">
          What our clients say</h2>
        </motion.h2>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          className="mt-10 md:mt-12 duration-300 hover:scale-105 "
        >
          {testimonialItems.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl mb-16 shadow-lg transition-colors "
            >
             
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="items-center "
              >
                
                <div className="flex text-yellow-500 gap-1 items-center text-xl duration-300 hover:scale-105 ">
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                </div>
                <p className="mt-2 mb-4 text-gray-600 dark:text-gray-300 duration-300 hover:scale-105 ">
                  {item.text ||
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ea reprehenderit, beatae iusto doloremque minus omnis et atque modi ut."}
                </p>

               
                <div className="flex items-center gap-4 justify-center duration-300 hover:scale-110 ">
                  <img
                    src={item.img}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-full aspect-square"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center items-center mt-12 gap-6 "
        >
          <button className="bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-700 transition-colors h-12 w-12 prev-btn">
            <RiArrowLeftSLine size={24} />
          </button>
          <button className="bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-700 transition-colors h-12 w-12 next-btn">
            <RiArrowRightSLine size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
