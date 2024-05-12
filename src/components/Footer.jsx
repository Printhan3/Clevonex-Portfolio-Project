import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Detail1 from '../assets/headset.png';
import Detail2 from '../assets/Vector1.png';
import Detail3 from '../assets/Vector2.png';

const Footer = () => {
  return (
    <div name='contact' className='w-full h-50 bg-red-950 contact'>
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
        <Header />
        <Contact />
        <OpeningHours />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="py-5">
      <h1 className="text-4xl font-bold font-Oswald text-pink-500 pl-5 pt-2">KIITHYA</h1>
      <p className="text-lg font-didact text-gray-300 mt-2 pl-5">
        Hi, it is me Kiithya, Unleash Your Beauty Dreams! <br />
        Let's Glam Together!
      </p>
      <div className='flex items-center mt-4 space-x-4 pl-5'>
        <a className='w-6 h-6 text-pink-500' href="/"> <FaFacebook /></a>
        <a className='w-6 h-6 text-pink-500' href="/"> <FaInstagram /></a>
        <a className='w-6 h-6 text-pink-500' href="/"> <FaTwitter /></a>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-6 rounded-lg bg-red-950 font-didact">
      <h2 className="text-xl font-Oswald font-bold text-pink-500 mb-4 flex justify-between py-2 border-b border-pink-700">GET IN TOUCH</h2>
      <div className="flex items-center mb-2">
        <span><img src={Detail1} alt='' className='w-5 h-5' /></span>
        <span className='text-gray-300 flex justify-between py-2 pl-2'>+254712345678</span>

        {/*   <svg aria-hidden="true" focusable="false" class=" w-5 h-5 fill-pink-500 mr-2 icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>
<span className='text-gray-300 flex justify-between py-2'>+254712345678</span> */}

      </div>
      <div className="flex items-center mb-2">
        <span><img src={Detail2} alt='' className='w-5 h-5'/> </span>
        <span className='text-gray-300 flex justify-between py-2 pl-2'>example@mail.com</span>
      </div>
      <div className="flex items-center mb-2">
        <span><img src={Detail3} alt='' className='w-5 h-5'/></span>
        <span className='text-gray-300 flex justify-between pl-2'>Karen, Nairobi, Kenya</span>
      </div>
    </div>
  );
}

function OpeningHours() {
  return (
    <div className="p-6 rounded-lg bg-red-950 font-didact">
      <h2 className="text-xl font-Oswald font-bold text-pink-500 mb-4 flex justify-between py-2 border-b border-pink-700">OPENING HOURS</h2>
      <div className="grid grid-cols-3 gap-2">
        <h4 className='text-gray-300'>Mon-Friday:</h4>
        <h4 className='text-gray-300 '>9am-7pm</h4>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <h4 className='text-gray-300'>Saturday:</h4>
        <h4 className='text-gray-300 '>10am-5pm</h4>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <h4 className='text-gray-300'>Sunday:</h4>
        <h4 className='text-gray-300 '>ByCall</h4>
      </div>
    </div>
  );
}

    

export default Footer;


