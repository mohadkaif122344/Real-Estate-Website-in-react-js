
    
import React from 'react'
import { assets } from '../assets/assets'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='border-t pt-10 px-4 md:px-20 lg:px-32 bg-gray-700 w-full  overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo} alt="Logo" className="w-32 h-auto object-contain duration-300 hover:scale-110 "/>
          <p className='text-gray-400 mt-4 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique earum et voluptate aut quis? Aliquam totam molestias repellat laboriosam rerum quo consequatur excepturi sint ab.
          </p>

          <div className="flex gap-4 mt-4  ">
            <a href="#" className="text-gray-400 hover:text-white text-xl transition duration-300 hover:scale-110 "><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl transition duration-300 hover:scale-110 "><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl transition duration-300 hover:scale-110 "><FaTwitter /></a>
            <a href='#' className="text-gray-400 hover:text-white text-xl transition duration-300 hover:scale-110 "><FaLinkedinIn /></a>
          </div>
        </div>

        
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4 duration-300 hover:scale-105 '>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400 text-sm'>
            <a href="#Home" className='hover:text-white transition'>Home</a>
            <a href="#About" className='hover:text-white transition'>About Us</a>
            <a href="#Contact" className='hover:text-white transition'>Contact Us</a>
            <a href="#" className='hover:text-white transition'>Privacy Policy</a>
          </ul>
        </div>

        
        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-4 duration-300 hover:scale-105 '>Subscribe to our newsletter</h3>
          <p className='text-gray-400 mb-4 max-w-80 text-sm'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className='flex gap-2 flex-wrap duration-300 hover:scale-105 '>
            <input 
              type="email" 
              placeholder='Enter your email' 
              className='p-2 rounded bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:flex-1'
            />
            <button className='py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 transition'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      
      <div className=' border-t border-gray-300 mt-10 py-4 text-center text-gray-300 text-sm duration-300 hover:scale-105'>
        © 2025 RealEstate. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer

