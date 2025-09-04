







import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import Login from "./Login"; 

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showLogin, setShowLogin] = useState(false); 

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu || showLogin ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showMobileMenu, showLogin]);

  const navLinks = ["Home", "About", "Properties", "Services", "Contact"];

  return (
    <>
   
      <nav className="absolute top-0 left-0 w-full z-20">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">

  <img 
    src={assets.logo}
    alt="logo"
    className="w-24 h-fullobject-contain rounded-lg 
               transition duration-300 
               hover:scale-110 hover:shadow-lg hover:shadow-sky-400/50 "
  />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-7 text-white dark:text-gray-200">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="cursor-pointer object-contain rounded-lg 
                           duration-300 hover:scale-110 hover:shadow-lg 
                           hover:text-sky-400 transition"
              >
                {link}
              </a>
            ))}
          </ul>

         
          <div className="flex items-center gap-4">
            {/* ✅ Login Button */}
            <button
              onClick={() => setShowLogin(true)}
              className="hidden md:block bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-6 py-2 rounded-full shadow hover:bg-sky-500 hover:text-white transition"
            >
              Login
            </button>

        
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-white dark:text-gray-200 hover:text-gray-400 transition"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

            {/* Mobile Menu Icon */}
            <img
              onClick={() => setShowMobileMenu(true)}
              src={assets.menu_icon}
              className="md:hidden w-7 cursor-pointer"
              alt="Menu"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 bottom-0 w-full h-full transform ${
            showMobileMenu ? "translate-x-0" : "translate-x-full"
          } bg-white dark:bg-gray-900 text-black dark:text-white transition-transform duration-300`}
        >
          <div className="flex justify-between items-center p-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-black dark:text-white hover:text-gray-500 transition"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

            <img
              onClick={() => setShowMobileMenu(false)}
              src={assets.cross_icon}
              className="w-6 h-6 cursor-pointer text-gray-800 dark:text-gray-400 hover:text-gray-500 transition"
              alt="Close Menu"
            />
          </div>

          <ul className="flex flex-col items-center gap-6 mt-10 text-lg font-medium">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setShowMobileMenu(false)}
                className="px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {link}
              </a>
            ))}

         
            <button
              onClick={() => {
                setShowLogin(true);
                setShowMobileMenu(false);
              }}
              className="mt-6 bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full shadow duration-300 hover:bg-sky-500 hover:scale-110"
            >
              Login
            </button>
          </ul>
        </div>
      </nav>

      {/* ✅ Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg w-96 relative">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black dark:hover:text-white"
            >
              ✖
            </button>
            <Login /> 
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
