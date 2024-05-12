import React from 'react';
import Image1 from '../assets/Por1.jpg';
import Image2 from '../assets/Por2.jpg';
import Image3 from '../assets/Por3.jpg';
import Image4 from '../assets/Por4.jpg';
import Image5 from '../assets/Por5.jpg';
import Image6 from '../assets/Por1.jpg';
import Image7 from '../assets/Por2.jpg';
import Image8 from '../assets/Por3.jpg';
import Image9 from '../assets/Por4.jpg';
import Image10 from '../assets/Por6.jpg';
import Image11 from '../assets/Por4.jpg';
import Image12 from '../assets/Por1.jpg';

const Portfolio = () => {
  return (
    <div name='portfolio' className='w-full bg-pink-100 portfolio'>
      <div className="container mx-auto pt-20 px-4 sm:px-6 md:px-8 lg:px-20">
        <div>
          <h4 className='font-bold text-pink-500 font-Oswald'>GALLERY</h4>
          <h2 className="text-5xl font-bold font-Oswald text-gray-800 py-2">PORTFOLIO</h2>
          <div className='w-16 h-px bg-pink-600 mb-6'></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <img src={Image1} alt="" className="w-full h-auto rounded-lg" />
          <img src={Image2} alt="" className="w-full h-50 rounded-lg" />
          <img src={Image3} alt="" className="w-full h-50 rounded-lg" />
          <img src={Image4} alt="" className="w-full h-50 rounded-lg" />
          <img src={Image5} alt="" className="w-full h-50 rounded-lg" />
          <img src={Image6} alt="" className="w-full h-50 rounded-lg" />
          <img src={Image7} alt="" className="w-full h-50 rounded-lg" />
          <img src={Image8} alt="" className="w-full h-50 rounded-lg" />
          <img src={Image9} alt="" className="w-full h-50 rounded-lg" />
          <img src={Image10} alt="" className="w-full h-50 rounded-lg" />
          <img src={Image11} alt="" className="w-full h-50 rounded-lg" />
          <img src={Image12} alt="" className="w-full h-50 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;


