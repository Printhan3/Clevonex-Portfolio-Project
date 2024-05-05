import React from 'react'
import { Link } from 'react-scroll';

const Home = () => {
  return (
   <div name='home' className='size-full h-screen banner'> 
  <div className='max-w-[1000px] mx-auto h-full px-8 flex flex-col justify-center'> 
    <p className="text-pink-500">MAKEUP ARTIST</p>
    <h1 className='text-4xl font-bold text-white'>Ian Kiithya</h1>
    <div>
      <button className='bg-pink-600 text-white rounded-full border-2 px-6 py-2 my-2' >
      <Link to="about" smooth={true} duration={500}>About me</Link> 
      </button>
      </div>
    </div>
   </div>
   )
}

export default Home;