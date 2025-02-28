import React from 'react';

const Footer = () => {
  return (
    
    <div className='w-full h-screen sm:h-[415px] overflow-y-hidden sm:mt-10 bg-[#101010] text-white px-[16px] pt-20'>
      <div className='flex py-8 flex-col sm:flex-row justify-between sm:items-start sm:flex-wrap'>
        
        {/* Logo and Links */}
        <div className='flex flex-col mb-8 sm:mb-0 sm:w-[23%]'>
       <img src="./muzzKart.png" alt="img" />

          <div className='text-[14px] sm:relative sm:top-12 font-semibold leading-[16.9px] mt-4'>
            <span><a href="#">Home</a></span>
            <span className='mx-3'>/</span>
            <span><a href="#">Blog</a></span>
            <span className='mx-3'>/</span>
            <span><a href="#">Sale</a></span>
            <span className='mx-3'>/</span>
            <br />
            <span><a href="#">About us</a></span>
          </div>
        </div>

        {/* Contact */}
        <div className='flex sm:relative sm:top-20 flex-col mb-8 sm:mb-0 sm:w-[23%]'>
          <div>
            <p className='font-normal text-[13px] leading-[15.73px]'>Contact Us</p>
            <p className='font-normal text-[20px] leading-[30.2px]'>+91 9087654321</p>
          </div>
          <div className='mt-4'>
            <p className='font-normal text-[13px] leading-[15.73px]'>Email</p>
            <p className='font-normal text-[20px] leading-[30.2px]'>hello@logoipsum.com</p>
          </div>
        </div>

        {/* Address */}
        <div className='flex sm:relative sm:top-20 flex-col mb-8 sm:mb-0 sm:w-[23%]'>
          <div>
            <p className='font-normal text-[13px] leading-[15.73px]'>ADDRESS</p>
            <p className='font-normal text-[20px] leading-[30.2px]'>
              2118 Thornridge Cir. Syracuse, <br /> Connecticut 35624
            </p>
          </div>
          <div className='mt-4'>
            <p className='font-normal text-[13px] leading-[15.73px]'>OPENING HOURS</p>
            <p className='font-normal text-[20px] leading-[30.2px]'>9am-6pm</p>
          </div>
        </div>

        {/* Copyright */}
        <div className='flex sm:relative sm:top-20 sm:left-10 flex-col mb-8 sm:mb-0 sm:w-[23%]'>
          <p className='mt-4'>©2024 ---- Copy right</p>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
