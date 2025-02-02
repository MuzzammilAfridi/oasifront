import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { } from 'react';
import {addItem} from '../../features/counter/counterSlice'
// import { toast } from "react-toastify";
import { Link } from 'react-router-dom';





const TopProducts = ({ products, setImg, setCount1, count1, setItemPrice, itemPrice }) => {
  
  // console.log(products);
  
  // const handleAddToCart  = ()=>{
  //   setCount(count+1)
  //   console.log(elem.price);
    
  // }

  console.log(products);
  
  const dispatch = useDispatch()

  // const item = useSelector((state) => state.counter.items)
  // console.log(item);

  const notifySuccess = () => toast.success("Product added successfully!");

  

  return ( 

    // {isAuthenticated && }

    <div className="px-[15px] w-full min-h-fit py-[30px] mx-auto">
      <h2 className="text-[20px] sm:text-[30px] sm:mx-14 text-[#2E2F33] leading-[24.2px] font-bold">
        Top Products
      </h2>

      {/* Grid container for products */}
     
    



      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 w-full">
      {!products || products.length === 0 ? (
        <div className="flex flex-wrap shadow py-1 gap-y-4 gap-x-2 mx-auto w-[98vw] rounded-lg border items-center justify-center">
          {[...Array(8)].map((_, idx) => (
            <div key={idx} className="flex flex-col px-4 w-[340px] sm:w-[300px] h-[350px] bg-gray-300 shadow py-1 rounded-lg border items-center justify-center animate-pulse">
              <div className="bg-gray-200 w-full h-[203px] sm:w-[296px] sm:h-[313px] rounded-md flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex w-full px-2 items-center py-2 mt-2 flex-col space-y-2">
                <div className="bg-gray-200 h-4 w-3/4 rounded-md"></div>
                <div className="bg-gray-200 h-4 w-1/2 rounded-md"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        [...products].reverse().map((elem, idx) => (
          <div key={elem.id || elem._id || idx} className="flex flex-col shadow py-1 px-1 rounded-lg border items-center justify-center">
            <Link to={`/${elem.id || elem._id}`}>
              <img
                className="bg-[#F3F4F7] object-contain w-[164px] h-[173px] sm:w-[296px] sm:h-[313px]"
                src={elem.img}
                alt="Product Image"
              />
            </Link>
            <div className="flex w-full px-2 items-center py-2 mt-2">
              <div className="flex flex-col w-full space-y-1">
                <p className="font-semibold text-[14px] leading-[16px]">{elem.name}</p>
                <p className="font-normal text-[14px] leading-[16px]">Price: {elem.price}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
      
      {/* Add margin below to separate from footer or other components */}
      <div className="mb-10"></div>
    </div>
  );
};

export default TopProducts;
