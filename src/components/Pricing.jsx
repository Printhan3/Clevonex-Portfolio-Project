import React from 'react'

 const Pricing = () => {
  return (
    <div name='pricing' className='w-full  bg-gray-100 pricing'>
      <div className="container mx-auto pt-20 px-10"> 
        <h4 className='text-pink-600 mb-3 font-Oswald'>PRICES</h4>
        <h1 className="text-5xl font-bold text-gray-800 mb-6 font-Oswald">PRICING PLAN</h1>
        <div className='w-16 h-px bg-pink-600 mb-6'></div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[url('../src/assets/Por6.jpg')] bg-cover bg-center rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-white mb-4">General Prices:</h2>
            <ul className="text-white">
              <li className="flex justify-between py-2 ">
                <span>Eye Makeup</span>
                <span>$20</span>
              </li>
              <li className="flex justify-between py-2 ">
                <span>Facial Makeup</span> 
                <span>$60</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Bridal Makeup</span>
                <span>$200</span>
              </li>
              <li className="flex justify-between py-2 ">
                <span>Child Face Painting Makeup</span>
                <span>$25</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Effect Makeup</span> 
                <span>$100</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Hair Makeup</span> 
                <span>$40</span>
              </li>
            </ul>
          </div>

          <div className="bg-[url('../src/assets/Por5.jpg')] bg-cover bg-center rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-white mb-4">Bridal Hairdo:</h2>
            <ul className="text-white">
              <li className="flex justify-between py-2">
                <span>Eye Makeup</span> 
                <span>$20</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Facial Makeup</span> 
                <span>$60</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Bridal Makeup</span> 
                <span>$200</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Child Face Painting Makeup</span> 
                <span>$25</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Effect Makeup</span>  
                <span>$100</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Hair Makeup</span> 
                <span>$40</span>
              </li>
            </ul>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Pricing;

