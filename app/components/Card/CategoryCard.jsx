import React from "react";
import ShopButton from "../Button/ShopButton";

const CategoryCard = ({ title }) => {
  // Split the title string into words
  return (
    <div className="flex gap-x-8   items-center  lg:justify-center lg:text-center lg:flex-col lg:items-stretch mt-8">
      {/* Image on the left */}
      <div className="  lg:order-32 items-center justify-center text-center lg:mx-auto ">
        <img
          src="https://via.placeholder.com/250x250"
          className="lg:p-8    h-32  lg:h-full lg:w-full"
          alt="Placeholder Image"
        />
      </div>

      <div className="flex flex-col   lg:-order-2   ">
        {/* Render each word as a separate paragraph */}
          <p  className="font-bold text-md text-gray-500 lg:text-lg">
            {title}
          </p>

        {/* Button underneath the text */}
      <p className="text-left text-[#407EC9] font-bold  lg:text-lg flex lg:hidden">Shop now</p>
      </div>
      <div className="mt-4 hidden md:flex  text-center justify-center lg:mx-auto">
          <ShopButton title={"Shop now"} />
        </div>

    </div>
  ); 
};

export default CategoryCard;
