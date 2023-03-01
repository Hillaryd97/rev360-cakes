import React from "react";
import Header from "./Header";
import HeroImage from "./assets/hero-img-1.jpg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Hero = () => {
  return (
    <motion.div
      className=" bg-gradient-to-t pt-4 from-pastel-pink"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="lg:mx-20">
        <Header />
      </div>
      <div className="lg:mx-28 mx-4">
        <div className="grid lg:grid-cols-2 grid-rows gap-6 container mx-auto md:gap-16 lg:mt-10">
          <motion.div className="item" variants={item}>
            <div className="lg:pr-24 space-y-4 lg:pt-24 lg:pb-8 pb-4 ">
              <h1 className="text-4xl lg:text-6xl font-bold">
                Bake <span className="text-pink-600">Memories</span> With Our
                Cakes
              </h1>
              <p className="text-md lg:pr-6 lg:text-lg">
                From corporate events to family gatherings, let us create a
                custom cake that will make your event unforgettable.{" "}
              </p>
            </div>
            <motion.div
              className="lg:hidden flex border-2 items mx-auto mb-3 justify-center items-center border-pink-300 bg-pink-600  rounded-full h-[18rem] w-[18rem] md:h-[32rem] md:w-[32rem] item"
              variants={item}
            >
              <img
                src={HeroImage}
                alt=""
                className="rounded-full border-2 border-pink-300 h-72 md:h-[30rem] md:w-[30rem]"
              />
            </motion.div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-5 items-center">
              <NavLink
                to="order"
                className="w-full lg:w-48 text-center text-md lg:text-lg border px-7 py-3 rounded-lg hover:bg-pink-500 bg-gradient-to-tl from-pink-400 to-pink-600 border-white hover:border-2 text-white hover:scale-95 hover:border-pink-600 "
              >
                Order Now
              </NavLink>
                <NavLink
                  to="menu"
                  className="w-full lg:w-48 text-center text-md text-pink-600 font-semibold lg:text-lg px-7 py-3 rounded-lg hover:bg-pink-200 bg-pink-300 border-white hover:border-2 hover:scale-95 hover:border-pink-600 flex items-center justify-center"
                >
                  See Menu &nbsp; <AiOutlineArrowRight />
                </NavLink>{" "}
                
            </div>
          </motion.div>
          <div className="flex justify-center">
            <motion.div
              className="lg:flex hidden border-2 items justify-center items-center border-pink-300 bg-pink-600  rounded-full h-[18rem] w-[18rem] md:h-[32rem] md:w-[32rem] item"
              variants={item}
            >
              <img
                src={HeroImage}
                alt=""
                className="rounded-full border-2 border-pink-300 h-72 md:h-[30rem] md:w-[30rem]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
