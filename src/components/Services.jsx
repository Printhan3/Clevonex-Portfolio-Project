import React from 'react'
import Makeup1 from '../assets/Por2.jpg'
import Makeup2 from '../assets/Por3.jpg'
import Makeup3 from '../assets/kiithya.jpg'
import Makeup4 from '../assets/pic1.png'
import Makeup5 from '../assets/pic2.png'
import Makeup6 from '../assets/pic3.png'
import Makeup7 from '../assets/pic4.png'


const Services = () => {
  return (
    <div name='services' className='w-full  services bg-gray-100 '>
  <div className="p-16">
      <h6 className="text-2xl text-pink-500 font-bold mb-5">What I Do</h6>
      <h1 className="text-4xl font-bold mb-6">MAKEUP SERVICES</h1>
      <div className='w-20 h-px bg-pink-600 mb-6'></div>
      {/* Service Cards Section */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        {/* Eye Makeup Card */}
        <div>
          <img 
            src={Makeup1} 
            alt="Eye Makeup" 
            className="w-full h-64 object-cover" 
          />
          <div className="bg-pink-500 pl-10 rounded-lg  overflow-hidden">
            
              <h3 className="text-xl font-semibold text-black p-4">Eye Makeup</h3>
              </div>
              
      </div>

        {/* Face Makeup Card */}
        <div>
          <img 
            src={Makeup2}
            alt="Face Makeup" 
            className="w-full h-64 object-cover"
          />
          <div className="bg-pink-500 pl-10 rounded-lg overflow-hidden">
          <h3 className="text-xl font-semibold text-black p-4">Face Makeup</h3>
          </div>
          </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center items-center space-x-2">
        <div className="w-4 h-4 rounded-full bg-pink-500"></div>
        <div className="w-4 h-4 rounded-full bg-white"></div>
        <div className="w-4 h-4 rounded-full bg-white"></div>
        <div className="w-4 h-4 rounded-full bg-white"></div>
      </div>
    </div> 
      {/* About Me Section */}
      <div class="grid grid-cols-2  bg-red-950 px-40 ">
        <div class="">
      <img 
          src={Makeup3}
          alt=""
          className="w-48 h-48 p-4"
        />
       </div> 
        <div class="col-span-1 grid grid-cols-3 gap-2  flex-col items-center ">

          
          <div>
        <span><img src={Makeup4} alt=""/></span>
        <span class="text-sm text-gray-400">Facial Makeup</span>
          </div>

           <div>
        <span><img src={Makeup5} alt=""/></span>
        <span class="text-sm text-gray-400">Bridal Makeup</span>
           </div>

           <div>
        <span><img src={Makeup6} alt=""/></span>
        <span class="text-sm text-gray-400">Eye Makeup</span>
           </div>
         
           <div>
        <span><img src={Makeup4} alt=""/></span>  
        <span class="text-sm text-gray-400">Facial Makeup</span>
           </div>

           <div>
        <span><img src={Makeup5} alt=""/></span>
        <span class="text-sm text-gray-400">Bridal Makeup</span>
           </div>

           <div>
        <span><img src={Makeup7} alt=""/></span>
        <span class="text-sm text-gray-400">Eye Makeup</span>
           </div>

      </div>
          </div>
        </div>
      
    





    
  )
}

export default Services;









