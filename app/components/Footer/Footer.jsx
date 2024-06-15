"use client"

import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
  const [showHelpfulLinks, setShowHelpfulLinks] = useState(false);
  const [showShopping, setShowShopping] = useState(false);

  return (
    <footer className='w-full flex flex-col items-center px-14 lg:px-28 justify-center text-center bg-[#407EC9] py-8'>
      <img
        src="https://i.ibb.co/vh4shz0/image-removebg-preview-1.png"
        className="w-24 h-24 mb-2"
        alt="PainfulPleasures"
      />
      <p className='text-white py-2 mb-4'>
        The leading provider of quality jewelry, tattoo and piercing supplies
      </p>
      <hr class=" hidden lg:flex my-4 w-full h-0.5 border-t-0  bg-gray-300 dark:bg-white/10" />

      <div className='w-full text-white'>
        {/* Mobile view */}
        <div className='md:hidden'>
        <hr class="md:hidden  my-4 w-full h-0.5 border-t-0  bg-gray-300 dark:bg-white/10" />

          <div className='mb-4'>
             <div className='flex flex-row items-center justify-between' onClick={() => setShowHelpfulLinks(!showHelpfulLinks)}>
             <h4 className='text-lg font-bold mb-2 cursor-pointer' >
              HELPFUL LINKS
            </h4>
            <FaChevronDown size={16}/>
             </div>
            {showHelpfulLinks && (
              <ul className='text-left'>
                <li><a href="#" className="hover:underline">Contact us</a></li>
                <li><a href="#" className="hover:underline">Support</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Accessibility Statement</a></li>
              </ul>
            )}
          </div>
          <hr class="md:hidden  my-4 w-full h-0.5 border-t-0  bg-gray-300 dark:bg-white/10" />

          <div className='mb-4'>
          <div className='flex flex-row items-center justify-between' onClick={() => setShowShopping(!showShopping)}>
             <h4 className='text-lg font-bold mb-2 cursor-pointer' >
              SHOPPING
            </h4>
            <FaChevronDown size={16}/>
             </div>
            {showShopping && (
              <ul className='text-left'>
                <li><a href="#" className="hover:underline">Reviews</a></li>
                <li><a href="#" className="hover:underline">Returns</a></li>
                <li><a href="#" className="hover:underline">Shipping</a></li>
                <li><a href="#" className="hover:underline">Track Order</a></li>
              </ul>
            )}
          </div>
          <hr class="md:hidden  my-4 w-full h-0.5 border-t-0  bg-gray-300 dark:bg-white/10" />

          <div className='mb-4 text-left'>
            <div>
            <h4 className='text-lg font-bold mb-2'>GET IN TOUCH</h4>
            </div>
            <div className='flex flex-col items-start'>
              <p className='flex items-center'>
                <FaPhone className='mr-2' /> <a href="tel:410-712-0145" className="hover:underline">410-712-0145</a>
              </p>
              <p >9:30am-5pm EST Mon - Fri</p>
              <p className='flex items-center mt-2'>
                <FaEnvelope className='mr-2' /> <a href="mailto:support@painfulpleasures.com" className="hover:underline">support@painfulpleasures.com</a>
              </p>
              <div className='flex mt-2'>
                <a href="#" className='mx-2 hover:underline p-1 rounded-md bg-white'><FaFacebookF color='#407EC9' /></a>
                <a href="#" className='mx-2 hover:underline p-1 rounded-md bg-white'><FaTwitter color='#407EC9'/></a>
                <a href="#" className='mx-2 hover:underline p-1 rounded-md bg-white'><FaInstagram color='#407EC9'/></a>
                <a href="#" className='mx-2 hover:underline p-1 rounded-md bg-white'><FaYoutube color='#407EC9'/></a>
                <a href="#" className='mx-2 hover:underline p-1 rounded-md bg-white'><FaPinterest color='#407EC9'/></a>
              </div>
            </div>
          </div>
          <div className='hidden lg:w-full'>
            <h4 className='text-lg font-bold mb-2'>SIGN UP TO OUR NEWSLETTER</h4>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Newsletter Sign-Up"
                className="p-2 rounded-l"
              />
              <button className="bg-black text-white p-2 rounded-r">SUBMIT</button>
            </div>
          </div>
        </div>

        {/* Desktop view */}
        <div className='hidden md:flex w-full justify-around py-4 text-left'>
          <div className='w-full md:w-1/4 mb-4 md:mb-0 flex flex-col'>
            <h4 className='text-lg font-bold mb-2'>HELPFUL LINKS</h4>
            <ul >
              <li><a href="#" className="hover:underline">Contact us</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Accessibility Statement</a></li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 mb-4 md:mb-0 flex flex-col'>
            <h4 className='text-lg font-bold mb-2'>SHOPPING</h4>
            <ul>
              <li><a href="#" className="hover:underline">Reviews</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
              <li><a href="#" className="hover:underline">Shipping</a></li>
              <li><a href="#" className="hover:underline">Track Order</a></li>
            </ul>
          </div>



          <div className='w-full md:w-1/4 mb-4 md:mb-0 flex flex-col'>
            <h4 className='text-lg font-bold mb-2'>GET IN TOUCH</h4>
            <div className='flex flex-col'>
              <p className='flex items-center'>
                <FaPhone className='mr-2' /> <a href="tel:410-712-0145" className="hover:underline">410-712-0145</a>
              </p>
              <p>9:30am-5pm EST Mon - Fri</p>
              <p className='flex items-center mt-2'>
                <FaEnvelope className='mr-2' /> <a href="mailto:support@painfulpleasures.com" className="hover:underline">support@painfulpleasures.com</a>
              </p>
              <div className='flex mt-2'>
                <a href="#" className='mx-2 hover:underline p-1 rounded-md bg-white'><FaFacebookF color='#407EC9' /></a>
                <a href="#" className='mx-2 hover:underline p-1 rounded-md bg-white'><FaTwitter color='#407EC9'/></a>
                <a href="#" className='mx-2 hover:underline p-1 rounded-md bg-white'><FaInstagram color='#407EC9'/></a>
                <a href="#" className='mx-2 hover:underline p-1 rounded-md bg-white'><FaYoutube color='#407EC9'/></a>
                <a href="#" className='mx-2 hover:underline p-1 rounded-md bg-white'><FaPinterest color='#407EC9'/></a>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/4 flex flex-col items-center'>
            <h4 className='text-lg font-bold mb-2'>SIGN UP TO OUR NEWSLETTER</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Newsletter Sign-Up"
                className="p-2 rounded-l"
              />
              <button className="bg-black text-white p-2 rounded-r">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

