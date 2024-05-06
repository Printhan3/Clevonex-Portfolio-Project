import React from 'react'

const Pricing = () => {
  return (
    <div name='pricing' className='w-full h-screen bg-gray-100 pricing '>
      <div className="container mx-auto pt-20 px-10">
        <h4 className='text-pink-600 mb-3'>PRICES</h4>
  <h1 className="text-3xl font-bold  text-gray-800 mb-6">PRICING PLAN</h1>
   <div className='w-16 h-px bg-pink-600 mb-6'></div>
  <div className="grid grid-cols-2 gap-8">


     
    <div class="bg-[url('../src/assets/Por6.jpg')] bg-cover rounded-lg shadow-md p-6" >
      <h2 class="text-xl font-bold text-white mb-4">General Prices:</h2>
      <ul class="text-white">
        <li  class="flex justify-between py-2 border-b border-gray-700">
          <span >Eye Makeup</span>
          <span>$20</span>
        </li>   
        <li class="flex justify-between py-2 border-b border-gray-700">
          <span>Facial Makeup</span>
          <span>$60</span>
        </li>
        <li class="flex justify-between py-2 border-b border-gray-700">
          <span>Bridal Makeup</span>
          <span>$200</span>
        </li>
        <li class="flex justify-between py-2 border-b border-gray-700">
          <span>Child Face Painting Makeup</span>
          <span>$25</span>
        </li>
        <li class="flex justify-between py-2 border-b border-gray-700">
          <span>Effect Makeup</span>
          <span>$100</span>
        </li>
        <li class="flex justify-between py-2">
          <span>Hair Makeup</span>
          <span>$40</span>
        </li>
      </ul>
    </div>

     
     
    <div class="bg-[url('../src/assets/Por5.jpg')] bg-cover rounded-lg shadow-md p-6">
      <h2 class="text-xl font-bold text-white mb-4">Bridal Hairdo:</h2>
      <ul class="text-white">
        <li class="flex justify-between py-2 border-b border-gray-700">
          <span>Eye Makeup</span>
          <span>$20</span>
        </li>
        <li class="flex justify-between py-2 border-b border-gray-700">
          <span>Facial Makeup</span>
          <span>$60</span>
        </li>
        <li class="flex justify-between py-2 border-b border-gray-700">
          <span>Bridal Makeup</span>
          <span>$200</span>
        </li>
        <li class="flex justify-between py-2 border-b border-gray-700">
          <span>Child Face Painting Makeup</span>
          <span>$25</span>
        </li>
        <li class="flex justify-between py-2 border-b border-gray-700">
          <span>Effect Makeup</span>
          <span>$100</span>
        </li>
        <li class="flex justify-between py-2">
          <span>Hair Makeup</span>
          <span>$40</span>
        </li>
      </ul>
    </div>
  </div>
  </div>
    </div>
  )
}

export default Pricing;