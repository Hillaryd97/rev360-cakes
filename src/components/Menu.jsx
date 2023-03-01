import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import menuBg from "./assets/menu-bg-2.jpg";
import { MdCake } from "react-icons/md";

const Menu = () => {
  return (
    <motion.div
      className="h-screen bg-gradient-to-b pt-4 from-pastel-pink to-pastel-blue"
      initial="hidden"
      animate="visible"
    >
      <div className="lg:mx-20">
        <Header />
      </div>
      <div className="container mx-auto ">
        <div
          className={`mx-4 lg:mx-0 bg-cover bg-center bg-no-repeat p-5`}
          style={{ backgroundImage: `url(${menuBg})` }}
        >
          <div className="inset-0 bg-pink-100 bg-opacity-70 shadow-2xl px-4 pb-6">
            <h3 className="text-center text-4xl lg:text-5xl pt-6">Cake Menu</h3>
            <p className="text-center lg:text-lg px-4 py-3 text-gray-900">
              From classic flavors to unique combinations, discover your new
              favorite cake on our menu
            </p>
            <div className="grid lg:grid-cols-2">
              <div className="space-y-1">
                <h3 className="text-xl lg:text-2xl text-pink-600 font-bold tracking-wider w-fit py-1">
                  CLASSIC FLAVORS
                </h3>
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Vanilla "Red Velvet" White</p>
                </div>
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Chocolate Chocolate</p>
                </div>
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Cream Cheese</p>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl lg:text-2xl text-pink-600 font-bold tracking-wider w-fit py-1">
                  INTERESTING FLAVORS
                </h3>
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Mint Chip, Ginger, Mocha</p>
                </div>
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Caramel, Coconut, Carrot</p>
                </div>
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Oreo, Mojito</p>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl lg:text-2xl text-pink-600 font-bold tracking-wider w-fit py-1">
                  FROSTING & FILLING
                </h3>
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Lemon Curd, Caramel Chocolate</p>
                </div>
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Ganache, Chocolate Gravy</p>
                </div>
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Vanilla Chocolate, White Chocolate</p>
                </div>{" "}
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Cream Cheese, Whipped Cream, Oreo</p>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl lg:text-2xl text-pink-600 font-bold tracking-wider w-fit py-1">
                  FRUITY FLAVORS
                </h3>
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Orange, Lemon</p>
                </div>
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Blueberry (Seasonal), Apple</p>
                </div>
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Strawberry (Seasonal), Banana</p>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl lg:text-2xl text-pink-600 font-bold tracking-wider w-fit py-1">
                  UPSIDE DOWN CAKES <br /> (WEEKENDS ONLY)
                </h3>
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Peach, Banana & Caramel</p>
                </div>
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Apples, Strawberries (Seasonal)</p>
                </div>
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Pineapple (Seasonal)</p>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl lg:text-2xl text-pink-600 font-bold tracking-wider w-fit py-1">
                  RECOMMENDED <br /> COMBINATIONS
                </h3>
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Mint Chip & Chocolate Ginger</p>
                </div>
                <div className="flex items-center space-x-1">
                  <MdCake color="rgb(219 39 119)" />
                  <p>Chocolate, Mocha & Coconut Banana & Caramel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
