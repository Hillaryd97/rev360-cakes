import React from "react";
import ownerImage from "./assets/owner2.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-t from-pastel-pink to-pastel-blue py-1 lg:py-10"
    >
      <div className="grid grid-rows lg:grid-cols-2 lg:gap-6 container mx-auto lg:mt-10">
        <div className="flex items-center justify-center mx-4 lg:mx-0">
          <div className="hidden lg:flex border-4 items-center justify-center border-t-pink-300 border-b-pink-400 border-r-blue-600 border-l-blue-400 bg-pink-100  rounded-2xl lg:h-[26.5rem] lg:w-[26.5rem]">
            <img
              src={ownerImage}
              alt=""
              className="rounded-2xl border-4  border-r-pink-300 border-l-pink-400 border-t-blue-600 border-b-blue-400 h-80 lg:h-[26rem] lg:w-[26rem] lg:hover:scale-110"
            />
          </div>
        </div>
        <div className="mx-4 lg:mx-0 flex justify-center flex-col">
          <p className="text-2xl lg:text-3xl font-bold tracking-wide lg:text-left text-center py-3 lg:pb-5 text-dark-blue">
            ~ About ~
          </p>
          <div className="flex lg:hidden border-4 mx-auto items-center justify-center border-t-pink-300 border-b-pink-400 border-r-blue-600 border-l-blue-400 bg-pink-100  rounded-2xl w-fit lg:h-[26.5rem] lg:w-[26.5rem]">
            <img
              src={ownerImage}
              alt=""
              className="rounded-2xl border-4  border-r-pink-300 border-l-pink-400 border-t-blue-600 border-b-blue-400 h-80 lg:h-[26rem] lg:w-[26rem] lg:hover:scale-110"
            />
          </div>
          <h3 className="text-lg text-pink-600 font-bold text-center lg:text-left py-2 lg:text-xl ">
            Meet the baker behind the cakes
          </h3>
         
          <p className="text-lg text-justify leading-8 pb-2 w-fit">
            Welcome to Rev 3:20 Cakes, where every cake is handmade with love
            and passion by me, Dami. I specialize in creating delicious and
            unique cakes for all of your special occasions. Using only the
            freshest ingredients, I work closely with my customers to bring
            their vision to life and make their dream cake a reality. Thank you
            for considering me, I can't wait to make your special moment
            sweeter.
          </p>
          <a
            href="mailto:hillaryd97@gmail.com"
            className="text-pink-600 w-fit font-semibold text-lg px-7 py-2 rounded-lg hover:bg-pink-200 bg-pink-300 border-white hover:border-2 hover:scale-95 hover:border-pink-600"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
