import React from 'react';
import TopProducts from './TopProducts';
import Navbar from './Navbar';
import Footer from './Footer';
import AlsoView from './AlsoView';

const SittingRoom = ({ products }) => {
  return (
    <div className='overflow-x-hidden w-full bg-slate-50 flex-grow'>
      {/* <Navbar/> */}
      <div className='p-5  sm:p-0  sm:mt-10'>
        <h2 className='text-center font-semibold text-[25px] leading-[30.26px]'>Sitting Room</h2>
        <p className='text-center text-[#5F6980] mt-4'>Transform your sitting room with our elegant seating options.</p>
        
        {/* Other content here */}
        
        {/* Add TopProducts component */}
        <TopProducts products={products} />
        <AlsoView/>
        <Footer/>
      </div>
    </div>
  );
};

export default SittingRoom;
