import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Cart = ({ cartData }) => {
  return (
    <div className='flex flex-col h-screen bg-white'>
      <Navbar />
      <p className='font-semibold text-[20px] leading-[24.2px] text-center text-black my-8'>Cart</p>

      {/* Cart Items Container */}
      <div className='flex-grow overflow-y-auto px-5'>
        {cartData.map((elem, idx) => {
          const [selectedColor, setSelectedColor] = useState('bg-cyan-600');
          const [cartItems, setCartItems] = useState(1);
          const [totalPrice, setTotalPrice] = useState(elem.price); // Initialize price with item's price

          // Function to update the quantity and price for each item
          const handleQuantityChange = (change) => {
            const updatedQuantity = cartItems + change;
            if (updatedQuantity > 0) {
              setCartItems(updatedQuantity);
              setTotalPrice(updatedQuantity * elem.price); // Update total price based on quantity
            }
          };

          return (
            <div key={idx} className='h-fit w-full flex items-center justify-center mb-4'>
              <div className="w-full h-auto flex flex-col items-start space-y-4 border border-gray-300 p-5 rounded-lg shadow-lg">
                <div className="flex items-center w-full">
                  <img className='h-[100px] w-[100px] bg-[#f3f4f7]' src={elem.img} alt="Product" />
                  <div className="flex-1 px-3">
                    <div className='w-full flex justify-between items-center'>
                      <p className='font-medium text-[16px] leading-[19.36px] text-[#2e2f33]'>
                        {elem.name}
                      </p>
                      <p className='text-[14px] font-semibold leading-[16.9px] text-[#7c71df]'>
                        ${totalPrice.toFixed(2)}
                      </p> {/* Display updated price */}
                    </div>

                    {/* Color selector circles */}
                    <div className='flex space-x-4 mt-3'>
                      <span 
                        onClick={() => setSelectedColor('bg-cyan-600')} 
                        className={`h-[20px] w-[20px] rounded-full bg-cyan-600 cursor-pointer ${selectedColor === 'bg-cyan-600' ? 'ring-2 ring-black' : ''}`}
                      ></span>
                      <span 
                        onClick={() => setSelectedColor('bg-red-600')} 
                        className={`h-[20px] w-[20px] rounded-full bg-red-600 cursor-pointer ${selectedColor === 'bg-red-600' ? 'ring-2 ring-black' : ''}`}
                      ></span>
                      <span 
                        onClick={() => setSelectedColor('bg-green-600')} 
                        className={`h-[20px] w-[20px] rounded-full bg-green-600 cursor-pointer ${selectedColor === 'bg-green-600' ? 'ring-2 ring-black' : ''}`}
                      ></span>
                    </div>
                  </div>
                </div>

                {/* Number of items in the cart */}
                <div className='flex items-center justify-between w-full mt-4'>
                  <span className='font-medium text-[16px] leading-[19.36px] text-[#2e2f33]'>Quantity</span>
                  <div className='flex items-center space-x-2'>
                    <button 
                      onClick={() => handleQuantityChange(-1)} 
                      className='px-2 py-1 bg-gray-300 text-black rounded'>
                      -
                    </button>
                    <span className='text-[16px] font-semibold'>{cartItems}</span>
                    <button 
                      onClick={() => handleQuantityChange(1)} 
                      className='px-2 py-1 bg-gray-300 text-black rounded'>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Button at the bottom of the cart */}
      <div className="relative">
        <button className='w-full h-[63px] bg-[#7c71df] text-white font-normal text-[20px] leading-[30.2px] text-center'>
          Next
        </button>
      </div>
      <Footer/>
    </div>
  );
}

export default Cart;
