import user1 from "./assets/userAvatar01.svg";
import user2 from "./assets/userAvatar02.svg";
import user3 from "./assets/userAvatar03.svg";

import React from "react";
import Card from "./Card";

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-t to-pastel-pink from-pastel-blue py-12">
      <div className=" container mx-auto py-3">
        <div className="lg:mx-14 mx-4 bg-opacity-50 bg-slate-300 p-6 rounded-lg">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-xl font-bold tracking-wide text-dark-blue">
            ~ Testimonials ~
          </p>
          <h1 className="text-pink-600 font-bold text-2xl text-center pb-5">
            What do people say?
          </h1>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 p-4">
            <Card
              avatar={user1}
              fname={"Chinwe Eze"}
              userName={"@chi_eze"}
              comment={
                "The cake i ordered from Rev 3:20c for my daughter's birthday was perfect! it was moist, delicious and beautiful decorated."
              }
              likes={533}
            />
            <Card
              avatar={user3}
              fname={"Tunde Johnson"}
              userName={"@tunde_"}
              comment={
                "I've tried many cakes over the year, but the cakes at Rev 3:20c are some of the best I've ever had. They're fresh and flavorful. Dami is also very friendly and accommodating, which makes the experience even better. Highly recommend!"
              }
              likes={390}
            />
            <Card
              avatar={user2}
              fname={"Eneojo Ayinde"}
              userName={"@enide98"}
              comment={
                "Absolutely love everything about Rev 3:20 Cakes, from the cake designs to the lovely customer service. Definitely ordering again!"
              }
              likes={902}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
