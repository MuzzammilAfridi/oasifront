import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const OderPlaced = () => {
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null)
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:7070/user", {
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
        const res = await axios.get(`http://localhost:7070/product/cart/${userId}`);
        console.log("Fetched Cart Data:", res.data.products[0]._id);  // Log fetched data
  
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
  
  
  
  
  // const handleOrder = async () => {
  //   if (!userId || !email || !Array.isArray(cart) || cart.length === 0) {
  //     console.error("Invalid order data:", { userId, email, cart });
  //     return;
  //   }
  
  //   const orderData = {
  //     customerId: userId,
  //     customerName: "Aman",
  //     email: email,
  //     items: cart.map(item => ({
  //       productId: item.productId,
  //       itemName: item.itemName,
  //       quantity: item.quantity,
  //     })),
  //     totalPrice: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
  //   };
  
  //   console.log("Sending order:", orderData); // Debug log before sending request
  
  //   try {
  //     const res = await axios.post("http://localhost:7070/order/place", orderData);
  //     console.log("Order placed successfully:", res.data);
  //   } catch (error) {
  //     console.error("Error placing order:", error.response?.data || error.message);
  //   }
  // };
  
  
  
  const handleOrder = async () => {
    try {
      // Fetch cart data
      const res = await axios.get(`http://localhost:7070/product/cart/${userId}`);
      const cart = res.data; // Assuming cart data contains products array and other details
      
      // Ensure the cart has products before proceeding
      if (!cart || !Array.isArray(cart.products) || cart.products.length === 0) {
        console.error('No products in cart.');
        return;
      }
  
      // Build the orderData object
      const orderData = {
        customerId: userId,
        customerName: name,
        email: email,
        items: cart.products.map(product => ({
          productId: product._id,  // Get the product _id from the cart
          itemName: product.productId.name,  // Assuming product has a 'name' field
          quantity: product.quantity || 1,  // Default to 1 if quantity is not provided
        })),
        totalPrice: cart.totalPrice || 0,  // Assuming totalPrice is in cartData
      };
  
      // Log the order data to check its structure
      console.log("Sending order:", orderData);
  
      // Send order data to the server
      const response = await axios.post("http://localhost:7070/order/place", orderData);
      console.log(response.data);  // Check the response from the server
  
    } catch (error) {
      console.error("Error placing order:", error.response?.data || error);
    }
  };
  





  return (
    <div>

      {/* {console.log("This is cart id",cart._id)} */}
      <div className="w-screen flex justify-center mt-16">
        <img className="h-[127px] w-[127px]" src="./ordConf.png" alt="Order Confirmed" />
      </div>
      <div className="text-center px-10 flex gap-8 flex-col">
        <p className="font-medium mt-5 text-[18px] leading-[21.73px] text-center text-[#2e2f33]">
          Your Order is Confirmed
        </p>
        <p>
          Thank you for shopping with us! Your beautiful new furniture is on its way and will be with you soon. Get ready to transform your space!
        </p>

        <button
          onClick={handleOrder}
          className="w-[353px] h-[56px] bg-[#7c71df] text-[16px] leading-[19.36px] font-semibold py-3 text-white rounded-3xl mt-20"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default OderPlaced;
