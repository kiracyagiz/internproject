import React from 'react'

const BlogCard = ({date,title}) => {
  return (
    <div className='flex flex-col  my-4 justify-between gap-y-4'>
        <img
          src="https://via.placeholder.com/350x250"
          alt="Placeholder Image"
        />
        <p className='text-black truncate'>{date}</p>
        <p className='font-bold '>{title}</p>
    </div>
  )
}

export default BlogCard
