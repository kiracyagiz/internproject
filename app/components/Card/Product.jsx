import React from 'react'

const Product = ({ price, title }) => {



  const truncateTitle = (title, wordLimit) => {
    const words = title.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return title;
  }

  return (
    <div className='flex  bg-white mx-auto items-center border border-gray-200   min-h-80  max-h-80   text-center justify-center   w-3/4 flex-col  gap-y-8'>
      <img
        src="https://via.placeholder.com/250x250"
        alt="Placeholder Image"
        className=' w-2/3 mt-2'
      />
      <p className='text-blue-600 font-bold'>{price}</p>
      <p className='whitespace-pre-line'>{truncateTitle(title,6)}</p>
    </div>
  )
}

export default Product
