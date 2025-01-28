import React from 'react'
import Navbar from './Navbar'

const OderPlaced = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <div className="">
            <div className="w-screen flex justify-center mt-16">
            <img className='h-[127px] w-[127px]' src=".\ordConf.png" alt="img" />
            </div>
            <div className='text-center px-10 flex gap-8 flex-col'>
                <p className='font-medium mt-5 text-[18px] leading-[21.73px] text-center text-[#2e2f33]'>Your Order is Confirmed</p>
                <p>Thank you for shopping with us! Your beautiful new furniture is on its way and will be with you soon. Get ready to transform your space!</p>

                <button className='w-[353px] h-[56px] bg-[#7c71df] text-[16px] leading-[19.36px] font-semibold py-3 text-white rounded-3xl mt-20'>Done</button>
            </div>
        </div>
      
    </div>
  )
}

export default OderPlaced
