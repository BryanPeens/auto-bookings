import React from "react";
import Card from "../components/Card";

import suv from "../assets/images/suv.png";
import smallCar from "../assets/images/carInfo.png";
import pickup from "../assets/images/pickup.png";


const Rentals = () => {
  return (
    <div
      name="work"
      className="w-full min-h-screen py-20 md:py-40"
    >
      <div className="max-w-[1000px] text-gray-500 mx-auto p-4">
        <div className="pb-4">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold inline border-b-4 border-blue-800 text-center">
            Our Available Vehicles
          </p>
        </div>

        {/* Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Grid Item 1 */}
          <Card
            title="Toyota Suv"
            image={suv}
            demoLink="#"
            codeLink="#"
          />
          {/* Grid Item 2 */}
          <Card
            title="Range Rover"
            image={smallCar}
            demoLink="#"
            codeLink="#"
          />
          {/* Grid Item 3 */}
          <Card
            title="Dodge Ram"
            image={pickup}
            demoLink="#"
            codeLink="#"
          />
        </div>
      </div>
    </div>
  );
};

export default Rentals;
