import React from 'react';
import TopProducts from './TopProducts';
import Navbar from './Navbar';
import Footer from './Footer';
import AlsoView from './AlsoView';

const SittingRoom = ({ products }) => {
  return (
    <div className='overflow-x-hidden w-full bg-slate-50 flex-grow'>
      {/* <Navbar/> */}
      <div className='p-5  sm:p-0  sm:mt-3'>
        {/* <h2 className='text-center font-semibold text-[25px] leading-[30.26px]'>Sitting Room</h2>
        <p className='text-center text-[#5F6980] mt-4'>Transform your sitting room with our elegant seating options.</p> */}
        
        {/* Other content here */}
        
        {/* Add TopProducts component */}


      <div className={`flex transition-all duration-500`}>
        <div className="flex-1">
          <h1 className=" mb-3 font-semibold text-center text-[14px] leading-[16.94px] text-black">
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


        <TopProducts products={products} />
        <AlsoView/>
        <Footer/>
      </div>
    </div>
  );
};

export default SittingRoom;
