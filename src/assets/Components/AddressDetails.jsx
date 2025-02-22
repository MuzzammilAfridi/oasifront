import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js'

const AddressDetails = () => {
  const [address, setAddress] = useState([]);
  const [cart, setCart] = useState(null);
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(false);


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


  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("https://oasback.onrender.com/user", {
          withCredentials: true,
        });
        if (res.data.user?._id) setUserId(res.data.user._id);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (!userId) return;
    fetchCart();
  }, [userId]);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://oasback.onrender.com/product/cart/${userId}`);
      setCart(res.data);
      
    } catch (err) {
      console.error("Error fetching cart:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (productId, type) => {
    if (!userId) return;
    
    try {
      const res = await axios.put(`https://oasback.onrender.com/product/cart/update`, {
        userId, // Ensure userId is sent
        productId, // Ensure productId is sent
        type, // "increase" or "decrease"
      });
  
      if (res.status === 200) {
        fetchCart(); // Refresh cart after update
      } else {
        console.error("Failed to update quantity:", res.data);
      }
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };


  const handleSave = () => {
    // Logic to save changes can go here (e.g., API call)
    alert("Changes Saved!");
  };


   useEffect(() => {
      if (!userId) return;
      fetchCart();
    }, [userId]);



  const makePayment = async () => {
    console.log("Starting payment process...");
    const stripe = await loadStripe("pk_test_51Qp9JBRrdmcN18A9H9CUq4iyZUpLf8jCv6qEHOQfEeSkdCYMWDewjNnDocyLFFgJKDFpS1yeEQcKsDQPALZe8NW100fE88pgs4");
  
    const body = { products: cart.products };
    const headers = { "Content-Type": "application/json" };
  
    try {
      const response = await fetch("https://oasback.onrender.com/create-checkout-session", {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        console.error("Failed to create checkout session:", response.statusText);
        return;
      }
  
      const session = await response.json();
  
      if (!session.id) {
        console.error("Session ID is missing:", session);
        return;
      }
  
      const result = await stripe.redirectToCheckout({ sessionId: session.id });
  
      if (result.error) {
        console.error("Stripe checkout error:", result.error.message);
      }
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };


  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg mt-10 shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Address Details</h2>

      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-2">
          <span className="font-medium text-gray-700">Full Name:</span>
          <input
            type="text"
            name="fullName"
            value={address && address.fullName}
            onChange={handleInputChange}
            className="w-1/2 border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex justify-between items-center border-b pb-2">
          <span className="font-medium text-gray-700">Phone:</span>
          <input
            type="text"
            name="phone"
            value={address && address.phone}
            onChange={handleInputChange}
            className="w-1/2 border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex justify-between items-center border-b pb-2">
          <span className="font-medium text-gray-700">Street:</span>
          <input
            type="text"
            name="street"
            value={address && address.street}
            onChange={handleInputChange}
            className="w-1/2 border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex justify-between items-center border-b pb-2">
          <span className="font-medium text-gray-700">City:</span>
          <input
            type="text"
            name="city"
            value={address && address.city}
            onChange={handleInputChange}
            className="w-1/2 border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex justify-between items-center border-b pb-2">
          <span className="font-medium text-gray-700">State:</span>
          <input
            type="text"
            name="state"
            value={address && address.state}
            onChange={handleInputChange}
            className="w-1/2 border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex justify-between items-center pb-2">
          <span className="font-medium text-gray-700">Zip Code:</span>
          <input
            type="text"
            name="zip"
            value={address && address.zip}
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



      <button  onClick={makePayment} className='bg-cyan-300 ml-5 text-black px-5 py-2 rounded-md'>Procced</button>

    </div>

    // <div className="">
    //     {console.log(address)}
        
    // <h1>hii</h1>
    // </div>
  );
};

export default AddressDetails;
