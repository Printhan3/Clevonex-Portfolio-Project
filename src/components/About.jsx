import React from 'react'
import AboutImage from '../assets/about.jpg'

const About = () => {
  return (
    <div  name='about' className='w-full  about bg-pink-100 pt-15' >
     <section >
  <div className="container mx-auto">
  
    <div class="content-wrapper">
    
      <img src={AboutImage} alt="Ian Kiithya" class="profile-image" />
     
      <div className='text-lg text-gray-700'>
      <h6 className=' text-pink-800 pt-20 font-Oswald '>About Me</h6>
      <h1 className='text-5xl font-bold text-black font-Oswald'>IAN KIITHYA</h1>
      <div className='w-16 h-px bg-pink-600 mb-6'></div>
     <div className='font-didact '>
      <p className='pb-2'>Hey there, I'm Kiithya, a professional makeup artist breaking the norms. While makeup might seem like a 
         female-dominated field, I've carved my path with creativity and passion. My favorite color, a gentle and soothing 
        light salmon pink, defines not only my style but also my perspective – a fusion of warmth and sophistication.</p>
         
         <p className='pb-2'>
          Beyond the glitz and glamour, I find my joy in the simplest of activities. You'll often catch me at home, wrapped up
          in captivating docuseries. There's something about unraveling real stories that keeps me hooked and inspires 
          my artistry.</p>

         <p className='pb-2'> My brushes and palette are extensions of my imagination and skill. I turn faces into living, breathing works of art, 
            each stroke telling a unique story. As a guy in the makeup world, I bring a fresh take, pushing boundaries and 
             embracing the unexpected.</p>
      
         <p className=''>So here's to embracing pink, creating beauty, and finding inspiration in the comfort of my home, one docuseries 
         at a time. I'm Kiithya – makeup artist, storyteller, and advocate for breaking stereotypes.
        </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About; 






