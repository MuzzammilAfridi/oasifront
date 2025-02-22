import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OderPlaced = () => {
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("https://oasback.onrender.com/user", {
          withCredentials: true,
        });
        setUserId(res.data.user._id);
        setEmail(res.data.user.email);
        setName(res.data.user.name);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      if (!userId) return;
      
      try {
        const res = await axios.get(`https://oasback.onrender.com/product/cart/${userId}`);
        if (res.data && Array.isArray(res.data.products)) {
          setCart(res.data.products);
        } else {
          console.error("Cart data format is incorrect:", res.data);
          setCart([]);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
        setCart([]);
      }
    };
    
    fetchCart();
  }, [userId]);

  const handleOrder = async () => {
    try {
      const res = await axios.get(`https://oasback.onrender.com/product/cart/${userId}`);
      const cart = res.data;
      
      if (!cart || !Array.isArray(cart.products) || cart.products.length === 0) {
        console.error('No products in cart.');
        return;
      }
  
      const orderData = {
        customerId: userId,
        customerName: name,
        email: email,
        items: cart.products.map(product => ({
          productId: product._id,
          itemName: product.productId.name,
          quantity: product.quantity || 1,
        })),
        totalPrice: cart.totalPrice || 0,
      };
  
      console.log("Sending order:", orderData);
  
      await axios.post("https://oasback.onrender.com/order/place", orderData);
      navigate('/my-order');
    } catch (error) {
      console.error("Error placing order:", error.response?.data || error);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="bg-white shadow-xl rounded-3xl p-8 flex flex-col items-center max-w-md w-full">
        <img className="h-32 w-32" src="./ordConf.png" alt="Order Confirmed" />
        <h2 className="text-2xl font-bold text-gray-900 mt-4">Your Order is Confirmed</h2>
        <p className="text-gray-600 text-center mt-2 px-4">
          Thank you for shopping with us! Your beautiful new furniture is on its way and will be with you soon. Get ready to transform your space!
        </p>
        <button
          onClick={handleOrder}
          className="mt-8 w-full bg-purple-600 text-white font-semibold py-3 rounded-xl text-lg transition-transform transform hover:scale-105 hover:bg-purple-700 shadow-md"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default OderPlaced;