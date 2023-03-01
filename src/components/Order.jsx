import React from "react";
import Header from "./Header";

const Order = () => {
  return (
    <div
      className="h-screen bg-gradient-to-b pt-4 from-pastel-pink to-pastel-blue"
      initial="hidden"
      animate="visible"
    >
      <div className="lg:mx-20">
        <Header />
      </div>
      <div className="container mx-auto flex flex-col ">
        <div className={`mx-4 lg:mx-0 p-5 inset-0 bg-pink-400 bg-opacity-70`}>
          <h3 className="text-4xl text-center font-semibold">
            Cake Order Form
          </h3>
          <form>
            <div className="flex flex-col space-y-2 ">
              <label className="text-lg font-semibold">
                Name <span className="text-red-600">*</span>
              </label>
              <input type="text" placeholder="First" className="p-1.5 w-full" />
              <input type="text" placeholder="Last" className="p-1.5 w-full" />
              <label className="text-lg font-semibold">
                Email <span className="text-red-600">*</span>
              </label>
              <input type="text" placeholder="Email" className="p-1.5 w-full" />
              <label className="text-lg font-semibold">
                Phone <span className="text-red-600">*</span>
              </label>
              <input type="text" placeholder="Phone" className="p-1.5 w-full" />
              <label className="text-lg font-semibold">Order</label>
              <div className="bg-black bg-opacity-10 px-4">
                <form className="flex flex-col">
                  <label className="text-lg font-semibold py-2">
                    Cake Flavor <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="cake-type"
                    className="bg-gray-200 border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-pink-100
               focus:border-pink-600"
                  >
                    <option value="chocolate" className="text-gray-700">
                      Chocolate Chocolate
                    </option>
                    <option value="vanilla" className="text-gray-700">
                      Vanilla "Red Velvet" White
                    </option>
                    <option value="cream_cheese" className="text-gray-700">
                      Cream Cheese
                    </option>
                    <option value="cream_cheese" className="text-gray-700">
                      Mint Chip, Ginger, Mocha
                    </option>
                    <option value="caramel" className="text-gray-700">
                      Caramel, Coconut, Carrot
                    </option>
                    <option value="cream_cheese" className="text-gray-700">
                      Oreo, Mojito
                    </option>
                    <option value="cream_cheese" className="text-gray-700">
                      Blueberry (Seasonal), Apple
                    </option>
                    <option value="cream_cheese" className="text-gray-700">
                      Orange, Lemon
                    </option>
                    <option value="cream_cheese" className="text-gray-700">
                      Strawberry (Seasonal), Banana
                    </option>
                  </select>
                  <label className="text-lg font-semibold py-2">
                    Size <span className="text-red-600">*</span>
                  </label>
                  <div className="flex flex-col">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        value="6-inch"
                      />
                      <span className="ml-2">
                        6" Round Cake - Feeds 4-6 - 8,600 Naira
                      </span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        value="10-inch"
                      />
                      <span className="ml-2">
                        10" Round Cake - Feeds 10-15 - 15,000 Naira
                      </span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        value="halfsheet"
                      />
                      <span className="ml-2">
                        Half Sheet - Feeds 20-45 - 48,000 Naira
                      </span>
                    </label>
                    <p>
                      <i>
                        Select a size to view total amount at due at the bottom
                        of the form
                      </i>
                    </p>
                  </div>
                  <label className="text-lg font-semibold py-2">
                    Filling Flavor <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="cake-type"
                    className="bg-gray-200 border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-pink-100
               focus:border-pink-600"
                  >
                    <option value="chocolate" className="text-gray-700">
                      Lemon Curd, Caramel Chocolate
                    </option>
                    <option value="vanilla" className="text-gray-700">
                      Ganache, Chocolate Gravy
                    </option>
                    <option value="cream_cheese" className="text-gray-700">
                      Vanilla Chocolate, White Chocolate
                    </option>
                    <option value="cream_cheese" className="text-gray-700">
                      Cream Cheese, Whipped Cream, Oreo
                    </option>
                  </select>
                  <label className="text-lg font-semibold py-2">
                    Date Needed <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    name="delivery_date"
                    className="bg-gray-200 border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-pink-100 focus:border-pink-600"
                  />
                   <label className="text-lg font-semibold py-2">
               Pickup or Delivery? <span className="text-red-600">*</span>
              </label>
               <div className="flex space-x-6">
               <label className="inline-flex items-center">
                  <input type="radio" className="form-radio" value='pickup' />
                  <span className="ml-2">Pickup</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio" value='10-inch' />
                  <span className="ml-2">Delivery</span>
                </label>
               </div>
               <label className="text-lg font-semibold py-2">
               Questions or Comments?
              </label>
              <textarea name="" id="" cols="20" rows="3"></textarea>
              <button className="rounded px-4 py-2 font-bold text-white hover:bg-pink-800 bg-pink-600 my-4">Submit</button>
                </form>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
