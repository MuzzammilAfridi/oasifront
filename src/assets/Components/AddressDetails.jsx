import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AddressDetails = () => {
  const [address, setAddress] = useState([]);


 useEffect(()=>{
    axios.get("https://oasback.onrender.com/user").then((res)=>{
        setAddress(res.data.user.address)
      })
 },[])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Logic to save changes can go here (e.g., API call)
    alert("Changes Saved!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Address Details</h2>

      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-2">
          <span className="font-medium text-gray-700">Full Name:</span>
          <input
            type="text"
            name="fullName"
            value={address.fullName}
            onChange={handleInputChange}
            className="w-1/2 border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex justify-between items-center border-b pb-2">
          <span className="font-medium text-gray-700">Phone:</span>
          <input
            type="text"
            name="phone"
            value={address.phone}
            onChange={handleInputChange}
            className="w-1/2 border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex justify-between items-center border-b pb-2">
          <span className="font-medium text-gray-700">Street:</span>
          <input
            type="text"
            name="street"
            value={address.street}
            onChange={handleInputChange}
            className="w-1/2 border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex justify-between items-center border-b pb-2">
          <span className="font-medium text-gray-700">City:</span>
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={handleInputChange}
            className="w-1/2 border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex justify-between items-center border-b pb-2">
          <span className="font-medium text-gray-700">State:</span>
          <input
            type="text"
            name="state"
            value={address.state}
            onChange={handleInputChange}
            className="w-1/2 border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex justify-between items-center pb-2">
          <span className="font-medium text-gray-700">Zip Code:</span>
          <input
            type="text"
            name="zip"
            value={address.zip}
            onChange={handleInputChange}
            className="w-1/2 border border-gray-300 p-2 rounded"
          />
        </div>
      </div>

      <Link
        // onClick={handleSave}
        to='/address'
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Edit
      </Link>



      <Link to='/payment' className='bg-cyan-300 text-black px-5 py-2 rounded-md'>Procced</Link>

    </div>

    // <div className="">
    //     {console.log(address)}
        
    // <h1>hii</h1>
    // </div>
  );
};

export default AddressDetails;
