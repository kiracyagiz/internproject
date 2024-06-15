"use client"

import React, { useEffect } from 'react'
import BlogCard from '../Card/BlogCard'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'
import ShopButton from '../Button/ShopButton'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Blogs = () => {

  const data = [
    {
      date: "Jun 10, 2020",
      title: "On Hard Work and Evoluation with Tattoo Artist Autumn Hudson"
    },
    {
      date: "Jun 10, 2020",
      title: "On Hard Work and Evoluation with Tattoo Artist Autumn Hudson"
    },
    {
      date: "Jun 10, 2020",
      title: "On Hard Work and Evoluation with Tattoo Artist Autumn Hudson"
    }
  ]

  useEffect(() => {
    const glide = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
    })
    glide.mount()
  }, [])

  return (
    <>
      <p className='font-bold text-xl text-center my-8'>FROM OUR COMMUNITY</p>

      {/* Grid layout for large screens */}
      <div className='hidden lg:flex flex-col lg:flex-row justify-center gap-x-8 mx-auto text-center'>
        {
          data.map((dt, i) => (
            <BlogCard date={dt.date} title={dt.title} key={i} />
          ))
        }
      </div>

      <div className=' hidden lg:block text-center my-8'>
      <ShopButton title={"See all blog posts"}/>

      </div>

      {/* Carousel for mobile devices */}
      <div className='lg:hidden glide'>
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>
            {
              data.map((dt, i) => (
                <li className='glide__slide' key={i}>
                  <BlogCard date={dt.date} title={dt.title} />
                </li>
              ))
            }
          </ul>
        </div>
 
        <div className='glide__arrows ' data-glide-el='controls'>
      <button className='glide__arrow glide__arrow--left' data-glide-dir='<'>
        <FaChevronLeft color='black'/>
      </button>
      <button className='glide__arrow glide__arrow--right bg-black' data-glide-dir='>'>
        <FaChevronRight color='black '  />
      </button>
    </div>
      </div>
      
      <div className=' block lg:hidden text-center my-8'>
      <ShopButton title={"See all blog posts"}/>

      </div>
    </>
  )
}

export default Blogs
