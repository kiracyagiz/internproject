import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const SelectableButton = ({icon,title,selectable,isCategory}) => {
  return (
    <div className='flex flex-row items-center gap-x-2'>
       {icon}
        <div className='hidden md:flex lg:flex items-center gap-x-2'>
        <p  className={`${isCategory ? "text-gray-400  font-bold text-[13px]" : "text-sm"}`}>{title}</p>
         {
            selectable && 
            <FaAngleDown size={8} color='black'/>  
         }        
        </div>
    </div>
  )
}

export default SelectableButton
