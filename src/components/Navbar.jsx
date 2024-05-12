import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-black text-gray-300'>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div className='font-didact'>
        {/*menu*/}
        <ul className='md:flex hidden space-x-8'> 
          <li className='uppercase text-sm font-semibold'>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li className='uppercase text-sm font-semibold'>
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li className='uppercase text-sm font-semibold'>
            <Link to="services" smooth={true} duration={500}>Services</Link>
          </li>
          <li className='uppercase text-sm font-semibold'>
            <Link to="pricing" smooth={true} duration={500}>Pricing</Link>
          </li>
          <li className='uppercase text-sm font-semibold'>
            <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
          </li>
          <li className='uppercase text-sm font-semibold'>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </div>
      {/*Hamburger*/}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile Menus*/}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
        <ul className='space-y-6'>
          <li className='py-6 text-1xl uppercase font-semibold'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li className='py-6 text-1xl uppercase font-semibold'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li className='py-6 text-1xl uppercase font-semibold'>
            <Link onClick={handleClick} to="services" smooth={true} duration={500}>Services</Link>
          </li>
          <li className='py-6 text-1xl uppercase font-semibold'>
            <Link onClick={handleClick} to="pricing" smooth={true} duration={500}>Pricing</Link>
          </li>
          <li className='py-6 text-1xl uppercase font-semibold'>
            <Link onClick={handleClick} to="portfolio" smooth={true} duration={500}>Portfolio</Link>
          </li>
          <li className='py-6 text-1xl uppercase font-semibold'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
