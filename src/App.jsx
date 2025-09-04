// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./components/About";
// import Properties from "./components/Properties";
// import Home from "./components/Home";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
// import { ToastContainer, toast } from "react-toastify";
// import Footer from "./components/Footer";
// import Services from "./components/Services";
// import AuthForm from "./components/AuthForm";

// const App = () => {

//   return (
//     <div className="w-full overflow-hidden">
//       <ToastContainer />

//       <Home />
//       <Properties />
//       <About />
//       <Services />
//       <Testimonials />
//       <Contact />
//       <Footer />
// {/*
//        <Router>
//      <Routes>
//  <Route path="/auth" element={<AuthForm />} />
//     </Routes>
//     </Router> */}

//     </div>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Properties from "./components/Properties";
import Services from "./components/Services";
import Contact from "./components/Contact";

import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Properties />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
