import React from "react";
import Logo from "./assets/logoo.png";
import { RxDotFilled } from "react-icons/rx";
import {
  BsTwitter,
  BsInstagram,
  BsTelephoneFill,
  BsFacebook,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-pastel-blue to-pastel-pink">
      <div className="container mx-auto grid md:grid-cols-3 py-10">
        <div className="md:hidden justify-evenly md:space-x-3 flex">
          <a
            href="http://www.facebook.com/Rev320c"
            className="text-xl pt-[1rem]"
          >
            <BsFacebook size={25} />
          </a>
          <a
            href="http://www.instagram.com/revelation3_20c"
            className="text-xl pt-[1rem]"
          >
            <BsInstagram size={25} />
          </a>
          <a
            href="http://www.twitter.com/rev320c"
            className="text-xl pt-[1rem]"
          >
            <BsTwitter size={25} />
          </a>
          <a href="tel:+2348024370107" className="text-xl pt-[1rem]">
            <BsTelephoneFill size={25} />
          </a>
        </div>
        <div className="">
        <h3 className="text-xl md:pb-2 md:pt-2 pt-8 pb-2 md:text-left text-center">Services</h3>
          <div className="flex md:items-start items-center flex-col text-lg lg:text-md">
          <div className="flex items-center text-pink-600 text-md">
            <RxDotFilled size={18} />
            <a href="/" className="">
              {" "}
              Custom Cakes
            </a>
          </div>
          <div className="flex items-center text-pink-600 text-md">
            <RxDotFilled size={18} />
            <a href="/" className="">
              {" "}
              Decorated Cakes
            </a>
          </div>
          <div className="flex items-center text-pink-600 text-md">
            <RxDotFilled size={18} />
            <a href="/" className="">
              {" "}
              Baked Goods
            </a>
          </div>
          <div className="flex items-center text-pink-600 text-md">
            <RxDotFilled size={18} />
            <a href="/" className="">
              {" "}
              Cupcakes
            </a>
          </div>
          <div className="flex items-center text-pink-600 text-md">
            <RxDotFilled size={18} />
            <a href="/" className="">
              {" "}
              Wedding Cakes
            </a>
          </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl md:text-left text-center pb-2 pt-2 ">About us</h3>
          <div className="flex md:items-start items-center flex-col text-lg lg:text-md">
          <div className="flex items-center text-pink-600 text-md">
            <RxDotFilled size={18} />
            <a href="/" className="">
              {" "}
              Our Team
            </a>
          </div>
          <div className="flex items-center text-pink-600 text-md">
            <RxDotFilled size={18} />
            <a href="/" className="">
              {" "}
              Process & Timeline
            </a>
          </div>
          <div className="flex items-center text-pink-600 text-md">
            <RxDotFilled size={18} />
            <a href="/" className="">
              {" "}
              Testimonials
            </a>
          </div>
          <div className="flex items-center text-pink-600 text-md">
            <RxDotFilled size={18} />
            <a href="/" className="">
              {" "}
              Photos
            </a>
          </div>
          <div className="flex items-center text-pink-600 text-md">
            <RxDotFilled size={18} />
            <a href="/" className="">
              {" "}
              Videos
            </a>
          </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl md:text-left text-center pb-2 pt-2">Catering</h3>
         <div className="flex md:items-start items-center flex-col text-lg lg:text-md">
         <div className="flex items-center text-pink-600 text-md">
            <RxDotFilled size={18} />
            <a href="/" className="">
              {" "}
              About Catering
            </a>
          </div>
          <div className="flex items-center text-pink-600 text-md">
            <RxDotFilled size={18} />
            <a href="/" className="">
              {" "}
              Mini-Novelties
            </a>
          </div>
          <div className="flex items-center text-pink-600 text-md">
            <RxDotFilled size={18} />
            <a href="/" className="">
              {" "}
              Holidays & Parties & Events
            </a>
          </div>
         </div>
          <div className="md:flex space-x-3 hidden">
            <a
              href="http://www.facebook.com/Rev320c"
              className="text-xl pt-[1rem]"
            >
              <BsFacebook size={25} />
            </a>
            <a
              href="http://www.instagram.com/revelation3_20c"
              className="text-xl pt-[1rem]"
            >
              <BsInstagram size={25} />
            </a>
            <a
              href="http://www.twitter.com/rev320c"
              className="text-xl pt-[1rem]"
            >
              <BsTwitter size={25} />
            </a>
            <a href="tel:+2348024370107" className="text-xl pt-[1rem]">
              <BsTelephoneFill size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
