import React from 'react'
import { FaStar } from "react-icons/fa6";

const ReviewCard = () => {
  return (
    <div className='flex flex-col border  p-4 border-gray-200 w-72 '>

        {/* Top */}
        <div className='flex flex-row justify-between items-center my-2'>

         <div className='flex flex-row gap-x-2'>
         <FaStar size={8} color='yellow'/>
         <FaStar size={8} color='yellow'/>
         <FaStar size={8} color='yellow'/>
         <FaStar size={8} color='yellow'/>
         <FaStar size={8} color='yellow'/>

         </div>
         <p className='text-sm font-bold'>12/02/19</p>
        </div>
        <p className='font-bold mb-4'>Great healing</p>

        <div className='flex flex-row gap-x-2'>
       <div>
       <img
          src="https://via.placeholder.com/350x250"
          alt="Placeholder Image"
          className='   w-80 h-24'
        />
<p className='text-xs'>
  <a href="#" className='text-blue-500 hover:text-blue-700 underline mt-4'>Recovry Derm Shield - 7.9"x 8 Yard Roll</a>
</p>       </div>
       <div>
       <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  vel tristique libero. Phasellus vel sapien in tortor fermentum accumsan.</p>
        <p className='text-sm mt-4'>Ashley S.</p>
       </div>
        </div>
    </div>
  )
}

export default ReviewCard