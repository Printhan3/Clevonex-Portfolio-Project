import React, { useState } from 'react';
import { useFormik } from 'formik';
import Map1 from '../assets/headset.png';
import Map2 from '../assets/Vector1.png';
import Map3 from '../assets/Vector2.png';
import Map4 from '../assets/Vector3.png';
import Map5 from '../assets/Vector4.png';

function Contact() {
  const [showSuccess, setShowSuccess] = useState(false); 

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Required';
      }
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.message) {
        errors.message = 'Required';
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values); 
      setShowSuccess(true); 
      setTimeout(() => {
        resetForm();
        setShowSuccess(false); 
      }, 3000); 
    },
  });

  return (
    <div name="contact" className="w-full contact bg-gray-100 py-16">
      <div className="container mx-auto p-8">
        <h4 className="font-bold font-Oswald text-pink-500 mb-4">LOCATION</h4>
        <h1 className="text-4xl font-Oswald font-bold text-pink-500 mb-4">CONTACT US</h1>
        <div className="w-16 h-px bg-pink-600 mb-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-didact">
          {/* Contact Information Section */}
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              Hi, it is me Kiithya, Unleash Your Beauty Dreams! <br />
              Contact Me for a Transformation That Speaks Louder Than Words. <br />
              Let's Glam Together!
            </p>

            <div className="flex items-center mb-2">
              <span>
                <img src={Map1} alt="" />{' '}
              </span>
              <span className="text-gray-700 flex justify-between py-2 pl-2">+254712345678</span>
            </div>

            <div className="flex items-center mb-2">
              <span>
                <img src={Map2} alt="" />{' '}
              </span>
              <span className="text-gray-700 flex justify-between py-2 pl-2">example@mail.com</span>
            </div>

            <div className="flex items-center mb-2">
              <span>
                <img src={Map3} alt="" />{' '}
              </span>
              <span className="text-gray-700 flex justify-between py-2 pl-5">Karen, Nairobi, Kenya</span>
            </div>

            <div className="flex items-center mb-2">
              <span>
                <img src={Map4} alt="" />{' '}
              </span>
              <span className="text-gray-700 flex justify-between py-2 pl-5">Mon-Fri: 8:00-19:00, Sunday: Closed</span>
            </div>

            <div className="flex items-center mb-2">
              <span>
                <img src={Map5} alt="" />{' '}
              </span>
              <span className="text-gray-700 flex justify-between py-2 pl-5">Google Maps</span>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className="text-xl font-Oswald font-bold text-pink-500 mb-4">Get in Touch</h2>
            {showSuccess && ( 
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Success! </strong>
                <span className="block sm:inline">Your message has been sent.</span>
              </div>
            )}
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2"/>
                    
                  
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name*"
                    autoComplete="off"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.name}</div>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2" />
                    
                  
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email*"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.email}</div>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2"/>
                  
                
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message*"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
                  className="w-full border border-gray-300 size-40 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.message}</div>
                ) : null}
              </div>
              <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;


