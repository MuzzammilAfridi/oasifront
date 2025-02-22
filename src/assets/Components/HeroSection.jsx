import React, { useState } from 'react';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
import Categories from './Categories';
import TopProducts from './TopProducts';
import FAQ from './FAQ';
import Footer from './Footer';
import Design from './Design';
import PerfectImageSlider from './PerfectImageSlider';
// import { Counter } from '../../features/counter/Counter';

const HeroSection = ({setOpen, products, setImg, designData, setCount1, count1, itemPrice, setItemPrice}) => {




  return (
    <div className="relative  sm:max-w-screen h-[569px]  mx-auto">
      
      {/* Hero Content */}
      

<div className="mb-9 z-20 flex items-center pb-11 justify-center  min-h-[30vh]">
          <PerfectImageSlider/>
          </div>
     
      {/* <Categories/> */}
      <TopProducts setCount1={setCount1} setOpen={setOpen} setImg={setImg} setItemPrice={setItemPrice} itemPrice={itemPrice}  count1={count1} products={products}/>
      <Design designData={designData}/>
      <FAQ/>
      <Footer/>

    </div>
  );
};

export default HeroSection;
