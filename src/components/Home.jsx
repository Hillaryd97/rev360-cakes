import Gallery from "./Gallery";
import Hero from "./Hero";

import React from "react";
import About from "./About";
import CTA from "./CTA";
import Testimonials from "./Testimonials";
import Footer from "./Footer";


const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Gallery />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
