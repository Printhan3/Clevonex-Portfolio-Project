import React, { useState } from 'react'
import Map1 from '../assets/headset.png'
import Map2 from '../assets/Vector1.png'
import Map3 from '../assets/Vector2.png'
import Map4 from '../assets/Vector3.png'
import Map5 from '../assets/Vector4.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data (e.g., to backend API)
    console.log('Form data:', formData); 
    
};

  return (
    <div name='contact' className='w-full h-screen contact bg-gray-100 py-16'>
      <div className="container mx-auto p-8">
      <h4 className='font-bold text-pink-500 mb-4'>LOCATION</h4>
            <h1 className="text-3xl font-bold text-pink-500 mb-4">CONTACT US</h1>
            <div className='w-16 h-px bg-pink-600 mb-6'></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information Section */}
                <div className="space-y-4">
                    <p className="text-lg text-gray-700">
                        Hi, it is me Kiithya, Unleash Your Beauty Dreams! <br/>
                        Contact Me for a Transformation That Speaks Louder Than Words.
                        Let's Glam Together!
                    </p>
                  {/*  <div className="flex items-center">
                    <svg aria-hidden="true" focusable="false" class=" w-6 h-6 fill-pink-500 mr-2 icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>
	                <span>+254712345678</span>
                    </div>
        
                   <div className="flex items-center mb-4">
                   <svg className="w-6 h-6 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                   xmlns="http://www.w3.org/2000/svg">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h4M12 5v16V5z" />
                   </svg>
                   <span>example@mail.com</span>
                  </div>  */}
                 <div className="flex items-center mb-2">
                 <span><img src={Map1} alt=''/> </span>
                 <span className=' text-gray-700 flex justify-between py-2 pl-2'>+254712345678</span>
                 </div>

                 <div className="flex items-center mb-2">
                 <span><img src={Map2} alt=''/> </span>
                 <span className='text-gray-700 flex justify-between py-2 pl-2'>example@mail.com</span>
                 </div>
    
                <div className="flex items-center mb-2">
                <span><img src={Map3} alt=''/> </span>
                <span className='text-gray-700 flex justify-between py-2 pl-5'>Karen,Nairobi,Kenya</span>
                </div>

                <div className="flex items-center mb-2">
                <span><img src={Map4} alt=''/> </span>
                <span className='text-gray-700 flex justify-between py-2 pl-5'>Mon-Fri: 8:00-19:0,Sunday: Closed</span>
                </div>

                <div className="flex items-center mb-2">
                <span><img src={Map5} alt=''/> </span>
                <span className='text-gray-700 flex justify-between py-2 pl-5'>Google Maps</span>
                </div>

    </div>

                {/* Contact Form Section */}
                <div>
    <h2 className="text-xl font-bold text-pink-500 mb-4">Get in Touch</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-2"> <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2"></label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder='Name*'
                value={formData.name} 
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required 
            />
        </div>
        <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2"></label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder='Email*'
                value={formData.email} 
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required 
            />
        </div> </div>
        <div>
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2"></label>
            <textarea 
                id="message" 
                name="message" 
                placeholder='Message*'
                value={formData.message} 
                onChange={handleChange}
                className="w-full border border-gray-300 size-40 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required 
            />
        </div>
        <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
            Submit
        </button>
    </form>
</div>

            </div>
        </div>
    </div>
  )
}

export default Contact;







