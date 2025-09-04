
import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "framer-motion";

const Contact  = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f7d475b6-874a-41e7-8118-60b282f0082b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-[90px] md:py-[150px] bg-neutral-200 dark:bg-gray-900 transition-colors duration-300">
    <motion.div 
      initial={{opacity: 0, x:-200}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once: true}}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-neutral-200 dark:bg-gray-900 transition-colors duration-300"
      id="Contact"
    >
      
      <h1 className="text-2xl sm:text-4xl font-bold text-black dark:text-white duration-300 hover:scale-110 ">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
           Us
        </span>
      </h1>

     
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-80 mx-auto">
        Ready to Make a Move? Let's Build Your Future Together
      </p>

     
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-700 dark:text-gray-200 pt-8 duration-300 hover:scale-105 ">
        <div className="flex flex-wrap">
          
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-400 dark:border-gray-600 rounded py-3 px-4 mt-2 bg-white dark:bg-gray-800 text-black dark:text-white transition-colors duration-300"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>

         
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-400 dark:border-gray-600 rounded py-3 px-4 mt-2 bg-white dark:bg-gray-800 text-black dark:text-white transition-colors duration-300"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-400 dark:border-gray-600 rounded py-3 px-4 mt-2 h-48 resize-none bg-white dark:bg-gray-800 text-black dark:text-white transition-colors duration-300"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>

      
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-12 mb-10 rounded transition-colors duration-300">
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
    </section>
  )
}

export default Contact 
