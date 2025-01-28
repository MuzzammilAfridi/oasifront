import React from 'react';
// import Navbar from './Navbar';

const ViewProduct = () => {
  return (
    <div className='w-full   sm:w-screen bg-white  h-fit pb-4'>
      {/* <Navbar /> */}

      <div className='flex pl-4 sm:pl-10 flex-col sm:flex-row sm:items-center gap-5 mt-6 mb-8 items-start text-[#5F6980]'>
     <div className='flex gap-4'>
     <p><a href="#">Homepage </a></p>
        <p><a href="#">Categories </a></p>
        <p><a href="#">Sitting Room </a></p>
     </div>
        <p className='text-[13px] font-normal leading-[15.73px] text-[#2E2F33]'>Luxe Armchair - Left Arm Chute</p>
      </div>

      <div className='flex flex-col sm:flex-row pl-4 sm:pl-10 gap-4 w-full mt-5'>
        {/* Product Info Section */}
        <div className='flex-1 '>
          <img className='w-full rounded-md h-[361px] bg-[#F3F4F7] object-cover' src="./view-01.png" alt="Product" />
          <img className='w-full rounded-md hidden sm:block my-4 h-[361px] bg-[#F3F4F7] object-cover' src="./sofa-02.png" alt="Product" />
          <img className='w-full rounded-md hidden sm:block h-[361px] bg-[#F3F4F7] object-cover' src="./sofa-03.png" alt="Product" />
          <img className='w-full rounded-md hidden sm:block my-4 h-[361px] bg-[#F3F4F7] object-cover' src="./sofa-04.png" alt="Product" />
        </div>

        {/* Product Details Section */}
        <div className='flex-1 pl-4 sm:pl-10 max-h-[537px] flex flex-col'>
          <div className='flex-grow'>
            <p className='font-semibold text-[25px] leading-[30.26px] text-[#2E2F33] mt-5'>Luxe Armchair - Left Arm <br /> Chute</p>
            <p className='mt-3'>Rating (remaining)</p>

            <div className='flex items-center justify-start gap-[6px] mt-5'>
              <p className='font-semibold text-[26px] leading-[31.47px] text-[#7C71DF]'>$899.00</p>
              <p className='text-[16px] font-normal leading-[19.36px] line-through text-[#5F6980]'>$1999.00</p>
              <p className='px-6 py-3 text-[16px] font-medium leading-[19.36px] rounded-3xl bg-[#f650616c] text-[#f65061]'>-40%</p>
            </div>

            <p className='mt-3 font-normal text-[16px] leading-[26px] text-[#5f6980]'>
              Ultra-functional and elegantly minimalist, our <br />
              Luxe Armchair Collection draws inspiration <br />
              from Nordic-style décor. It features a neutral <br />
              color palette and natural wood accents, <br />
              highlighted by uniquely designed hexagonal <br />
              legs.
            </p>

            {/* Color Options */}
            <div className='flex justify-start gap-5 mt-4'>
              <span className='w-[50px] h-[50px] border-2 border-white bg-[#A6A39D] rounded-lg'></span>
              <span className='w-[50px] h-[50px] border-2 border-white bg-[#B6978D] rounded-lg'></span>
              <span className='w-[50px] h-[50px] border-2 border-white bg-[#8D9EB6] rounded-lg'></span>
            </div>
          </div>

          {/* Buy Now Button */}
          <div className='flex justify-start mt-7 mb-5'>
            <button className='w-[351px] h-[45px] sm:h-[53px] bg-[#7c71df] text-white rounded-[50px]'>Buy now</button>
          </div>

          {/* Shipping Info */}
          <div className='pb-4'>
            <p className='text-[14px] leading-[16.94px] font-normal text-black my-[16px]'>Free shipping included</p>
            <p className='text-[14px] leading-[16.94px] font-normal text-black my-[16px]'>Made from the best of materials sourced</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
