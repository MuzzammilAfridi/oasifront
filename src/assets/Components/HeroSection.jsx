import React, { useState } from 'react';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
import Categories from './Categories';
import TopProducts from './TopProducts';
import FAQ from './FAQ';
import Footer from './Footer';
import Design from './Design';
// import { Counter } from '../../features/counter/Counter';

const HeroSection = ({setOpen, products, setImg, designData, setCount1, count1, itemPrice, setItemPrice}) => {




  return (
    <div className="relative  sm:max-w-screen h-[569px]  mx-auto">
      
      {/* Hero Content */}
      <div className={`flex transition-all duration-500`}>
        <div className="flex-1">
          <h1 className="mt-3 mb-3 font-semibold text-center text-[14px] leading-[16.94px] text-black">
            FURNITURE STORE
          </h1>
          <h3 className="text-center w-[361px] sm:w-screen sm:relative sm:bottom-5 mx-auto text-[25px] md:text-[30px] lg:text-[35px] xl:text-[61px] font-semibold leading-[30.26px] lg:leading-[64px] text-black">
            Discover the Artistry of Modern Contemporary Furniture
          </h3>
          <p className="text-center w-[361px] sm:w-screen sm:relative sm:bottom-2 mx-auto text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 h-[66px] leading-[19px] sm:leading-[30px] mt-1">
            Experience the elegance and functionality of cutting-edge design where luxury meets innovation in every piece for ultimate relaxation.
          </p>
          <div className="flex items-center justify-center sm:relative sm:bottom-5">
            <img
              className="w-[361px] object-cover object-center rounded-xl sm:w-[80vw] h-auto sm:h-[377px] p-[10px]"
              src="./hero-img.jpeg"
              alt="Furniture"
            />
          </div>
        </div>
        
       
         
       
      </div>
     
      <Categories/>
      <TopProducts setCount1={setCount1} setOpen={setOpen} setImg={setImg} setItemPrice={setItemPrice} itemPrice={itemPrice}  count1={count1} products={products}/>
      <Design designData={designData}/>
      <FAQ/>
      <Footer/>

    </div>
  );
};

export default HeroSection;
