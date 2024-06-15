import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import SelectableButton from "./Button/SelectableButton";
import { IoMdMenu } from "react-icons/io";

export default function Header() {
  const selectableData = [
    {
      title: "Community",
      icon: "",
      selectable: false,
    },
    {
      title: "Account",
      icon: <MdAccountCircle size={20} />,
      selectable: true,
    },
    {
      title: "Cart",
      icon: <FaShoppingCart />,
      selectable: true,
    },
  ];

  return (
    <header>
      <div className="flex flex-row  lg:bg-[#EEEEEE] px-4 lg:px-0 justify-between lg:justify-evenly text-center items-center">


      <div className="flex flex-row md:hidden lg:hidden items-center">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjuWzLTeJFoaI21w7cY7n6mzft-vhXyy7vQ&s"
       className="w-14 h-14"
       alt="PainfulPleasures"
       ></img>
        
        <p className="text-blue-400 text-sm font-bold italic ">PainfulPleasures</p>
       </div>


        {/* Tabs*/}
        <div className="hidden md:flex  flex-row items-center gap-x-4">
          <div>
            <button className="  md:relative lg:relative  md:bg-white font-bold md:text-blue-400 p-4 overflow-hidden">
              <span className="md:absolute md:top-0 md:left-0 md:right-0 md:h-1  md:bg-blue-400"></span>
              Wholesale - Pros Only
            </button>
          </div>


       
          <button className="font-bold text-gray-600">Retail</button>
        </div>

   

        {/* Searchbar*/}

        <div className="flex-row items-center hidden  md:flex lg:flex my-2">
          <input
            type="text"
            placeholder="Search by name, category.."
            className="px-8 py-2 pr-10 text-center border rounded-l-[5px] border-[#1A355C] w-full md:w-48 lg:w-96 focus:outline-none"
          />
          <div className="bg-[#1A355C]  rounded-r-[5px] p-[13px]">
            <IoSearchOutline size={16} className="text-white" />
          </div>
        </div>

        <div className="flex font-bold  flex-row gap-x-8">
          {selectableData.map((dt, i) => (
            <SelectableButton
              icon={dt.icon}
              title={dt.title}
              key={i}
              selectable={dt.selectable}
            />
          ))}
          <IoMdMenu size={18} className="flex lg:hidden md:hidden" />
        </div>
      </div>

      {/* Searchbar for mobile*/}

      <div className="flex-row px-4 items-center flex  min-w-full md:hidden lg:hidden my-2">
        <input
          type="text"
          placeholder="Search by name, category.."
          className="px-8 py-1 pr-10 text-center border border-[#1A355C] w-full md:w-96 focus:outline-none"
        />
        <div className="bg-[#1A355C]  rounded-r-[5px] p-[9px]">
          <IoSearchOutline size={16} className="text-white" />
        </div>
      </div>
    </header>
  );
}
