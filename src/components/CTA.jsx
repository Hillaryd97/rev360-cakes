import React from "react";
import Logo from "./assets/logoo.png";
import { NavLink } from "react-router-dom";

const CTA = () => {
  return (
    <div
      id=""
      className="bg-gradient-to-t from-pastel-blue to-pastel-pink flex items-center justify-center"
    >
      <div className=" flex items-center flex-col w-full text-center bg-pink-400 py-12">
      <img src={Logo} alt="logo" className="w-16 py-4" />
        <h2 className="lg:text-4xl text-2xl text-white font-medium pb-10">
          Indulge in a cake that looks just as good as it tastes.
        </h2>
        <NavLink
          to="order"
          className="lg:text-2xl text-xl border-2 px-6 py-2 rounded-lg shadow-2xl   hover:bg-pink-500 bg-gradient-to-tl from-pink-400 to-pink-600 border-white hover:border-2 text-white  hover:border-pink-600"
        >
          Order Now
        </NavLink>
      </div>
    </div>
  );
};

export default CTA;
