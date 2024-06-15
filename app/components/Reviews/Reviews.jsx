import React from 'react'
import ReviewCard from '../Card/ReviewCard'

const Reviews = () => {
    const review = ["","","",""]
  return (
   <div>
      <p className='text-center mt-8 text-black font-bold text-2xl'>REAL REVIEWS FROM REAL CUSTOMERS</p>

     <div className='flex flex-col lg:flex-row gap-y-8 gap-x-14 py-8 justify-center mx-auto items-center'>
      {
        review.map((dt,i)=> (
            <ReviewCard key={i}/>
        ))
      }
    </div>
   </div>
  )
}

export default Reviews
