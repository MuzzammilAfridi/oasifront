// src/components/Checkout.js
import React, { useState } from 'react';
import Navbar from './Navbar';

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    address: '',
    city: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form Data Submitted:', formData);
  };

  return (

    <div className="max-h-screen ">
      <Navbar/>
      
      <div className="bg-white mt-1 p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Checkout</h2>
        <p className='text-[18px] mt-4 leading-[21.78px] font-medium text-[#5f6980]'>Customer Information</p>
        <p className='text-[16px] mb-4 font-semibold leading-[19.36px]'>Have an account? <span className=' text-[#7c71df]'>Login</span></p>
        
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder='Email'
              value={formData.email} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          <p className='text-[18px] leading-[21.78px] font-medium text-[#5f6980] mb-3'>Shipping address</p>

          {/* First Name */}
          <div className="mb-4">
            
            <input 
              type="text" 
              name="firstName" 
              placeholder='First Name'
              id="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <input 
              type="text" 
              name="lastName" 
              id="lastName"
              placeholder='Last Name' 
              value={formData.lastName} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <input 
              type="text" 
              name="mobileNumber" 
              id="mobileNumber"
              placeholder='Enter your Mobile Number' 
              value={formData.mobileNumber} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <input 
              type="text" 
              name="address" 
              id="address" 
              placeholder='Address'
              value={formData.address} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <input 
              type="text" 
              name="city" 
              id="city" 
              placeholder='City'
              value={formData.city} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          {/* Country */}
          <div className="mb-6">
            <input 
              type="text" 
              name="country" 
              placeholder='Country'
              id="country" 
              value={formData.country} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-screen absolute bottom-0 left-0 bg-[#7c71df] h-[63px] text-white py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
