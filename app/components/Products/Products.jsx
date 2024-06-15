"use client"

import React, { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

import Product from '../Card/Product';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Products = () => {
  const products = [
    {
      title: "Rook Quill Rotary Tattoo \n Machine --Cooper",
      price: "449.99"
    },
    {
      title: "Rook Quill Rotary Tattoo \n Machine --Blue",
      price: "449.99"
    },
    {
      title: "Pre-Order -- Inkjecta Filte X1  Wireless Tattoo Machine",
      price: "1,199.99"
    },
    {
      title: "Pre-Order -- Inkjecta Filte X1 Wireless  Tattoo Machine",
      price: "1,199.99"
    },
    {
      title: "Pre-Order -- Inkjecta Filte X1 Wireless Tattoo Machine",
      price: "1,199.99"
    },
    {
      title: "Pre-Order -- Inkjecta Filte X1 Wireless Tattoo Machine",
      price: "1,199.99"
    },
    {
      title: "Pre-Order -- Inkjecta Filte X1 Wireless Tattoo Machine",
      price: "1,199.99"
    },
    {
      title: "Rook Quill Rotary Tattoo Machine  \n --Cooper",
      price: "449.99"
    },
    {
      title: "Rook Quill Rotary Tattoo Machine \n --Cooper",
      price: "449.99"
    },
  ];

  // Using useRef to create a reference to the Glide instance
  const glideRef = useRef(null);

  useEffect(() => {
    // Initialize Glide when the component mounts
    if (glideRef.current) {
      const glide = new Glide(glideRef.current, {
        type: 'carousel',
        startAt: 0,
        perView: 4, // Adjust perView based on your design needs
        breakpoints: {
          1024: {
            perView: 2
          },
          800: {
            perView: 1
          }
        }
      });
      glide.mount(); // Mount Glide carousel
    }
  }, []);

  return (
     <div className='  justify-center w-[92%] mx-auto   bg-gray-100 py-4'>
       <p className='text-black mb-8 font-bold text-center text-lg'>NEW PRODUCTS</p>
      <ProductSlider products={products} glideRef={glideRef}/>
    </div>
  );
};

const ProductSlider = ({ products, glideRef }) => (
    <div ref={glideRef} className='glide '>
    <div className='glide__track' data-glide-el='track'>
      <ul className='glide__slides'>
        {products.map((product, index) => (
          <li className='glide__slide' key={index}>
            <Product title={product.title} price={ "$" + product.price} />
          </li>
        ))}
      </ul>
    </div>
    <div className='glide__arrows' data-glide-el='controls'>
      <button className='glide__arrow glide__arrow--left' data-glide-dir='<'>
        <FaChevronLeft color='black'/>
      </button>
      <button className='glide__arrow glide__arrow--right bg-black' data-glide-dir='>'>
        <FaChevronRight color='black '  />
      </button>
    </div>
  </div>
  );
  


export default Products;
