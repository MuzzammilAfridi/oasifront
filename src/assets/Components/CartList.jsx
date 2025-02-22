import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddressDetails from "./AddressDetails";


const CartList = () => {
  const [userId, setUserId] = useState(null);
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:7070/user", {
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
      const res = await axios.get(`http://localhost:7070/product/cart/${userId}`);
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
      const res = await axios.put(`http://localhost:7070/product/cart/update`, {
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
  
  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`https://oasback.onrender.com/product/cart/${userId}/remove/${productId}`);
      fetchCart(); // Refresh cart after deletion
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

 
  
  
  

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
     
      
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      


      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : cart && cart.products.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart &&
            cart.products.map(({ productId, quantity }) => (
              <li key={productId && productId._id} className="flex flex-col sm:flex-row justify-between  sm:items-center items-start bg-gray-100 min-h-[140px] p-4 rounded-md">
                <div className="flex items-center gap-4">
                  <img src={productId && productId.img} alt={productId && productId.name} className="w-16 h-16 object-cover rounded-md" />
                  <div>
                    <p className="font-medium">{productId && productId.name}</p>
                    <p className="text-gray-600">${productId && productId.price} x {quantity}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(productId._id, "decrease")}
                    className="px-3 py-1 bg-red-500 text-white rounded-md"
                  >
                    -
                  </button>
                  <span className="font-semibold">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(productId._id, "increase")}
                    className="px-3 py-1 bg-green-500 text-white rounded-md"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(productId._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
        </ul>
      )}

      {cart && cart.products.length > 0 && (
        <div className="mt-6 flex justify-between items-center border-t pt-4">
          <p className="text-lg font-semibold">Total: ${cart.totalPrice}</p>
          <Link
           
            to="/address-details"
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}

      {/* <AddressDetails/> */}
    </div>
  );
};

export default CartList;
