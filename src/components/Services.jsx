import React, { useState } from 'react';
import Makeup1 from '../assets/Por2.jpg';
import Makeup2 from '../assets/Por3.jpg';
import Makeup3 from '../assets/kiithya.jpg';
import Makeup4 from '../assets/pic1.png';
import Makeup5 from '../assets/pic2.png';
import Makeup6 from '../assets/pic3.png';
import Makeup7 from '../assets/pic4.png';
import Makeup8 from '../assets/Por1.jpg';
import Makeup9 from '../assets/Por4.jpg';
import Makeup10 from '../assets/Por5.jpg';
import Makeup11 from '../assets/Por6.jpg';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const servicesData = [
    [ { image: Makeup1, title: 'Eye Makeup' },
    { image: Makeup2, title: 'Face Makeup' }, ],

    [{ image: Makeup8, title: 'Bridal Makeup' },
    { image: Makeup9, title: 'Special Effects Makeup' }, ],

    [{ image: Makeup10, title: 'Hair Makeup' },
    { image: Makeup11, title: 'Facial Makeup' }, ]
    
  ];


  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div name='services' className='w-full services'>
      <div className="container mx-auto">
        <div className='bg-gray-100 p-16'>
        <h6 className="text-2xl text-pink-500 font-Oswald font-bold mb-5">What I Do</h6>
        <h1 className="text-4xl font-Oswald font-bold mb-6">MAKEUP SERVICES</h1>
        <div className='w-20 h-px bg-pink-600 mb-6'></div>
        
       {/* Service Cards Section */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData[activeIndex].map((service, index) => (
            <div key={index} className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-pink-500 bg-opacity-80">
                <h3 className="text-xl font-semibold text-white p-4">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>


        {/* Carousel Indicators */}
        <div className="flex justify-center items-center space-x-2 mt-4 mb-4">
          {servicesData.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === activeIndex ? 'bg-pink-500' : 'bg-gray-300'
              }`}
              onClick={() => handleIndicatorClick(index)}
            ></div>
          ))}
        </div>
        </div>

       

        {/* About Me Section - Make responsive using grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-red-950 py-8 gap-2">
          <div>
            <img
              src={Makeup3}
              alt=""
              className="w-full h-64 max-w-xs mx-auto rounded-lg" 
            />
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 pt-8 pr-6"> 
            {/* Adjust columns based on screen size */}
            {[Makeup4, Makeup5, Makeup6, Makeup4, Makeup5, Makeup7].map((image, index) => (
              <div key={index} className="flex flex-col items-center text-white">
                <img src={image} alt="" className="w-8 h-8 mb-4"/> 
                <span className="text-sm">
                {index % 3 === 0 ? "Facial Makeup" : (index % 3 === 1 ? "Bridal Makeup" : "Eye Makeup")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;















