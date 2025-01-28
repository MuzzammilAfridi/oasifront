import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Shop = ({topProductsData}) => {
  return (
    <div>
      <div className=" w-full  max-h-[2897px]  mx-auto">
        {/* <Navbar/> */}
      <h2 className="text-[20px] mt-5 ml-4 sm:mx-14 text-[#2E2F33] leading-[24.2px] font-bold">
        Top Products
      </h2>

      {/* Grid container for products */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5 w-full">
        {topProductsData.map((elem, idx) => (
          <div key={idx} className="flex shadow py-3 rounded-lg flex-col items-center justify-center">
            <img
              className="bg-[#F3F4F7] w-[164px] h-[173px] sm:w-[296px] sm:h-[313px]"
              src={elem.img}
              alt="Product Image"
            />
            <div className="flex justify-between w-[164px] px-1 py-2 mt-2">
              <p className="font-semibold text-[14px] leading-[16px]">{elem.name}</p>
              <p className="font-semibold text-[14px] leading-[16px]">{elem.price}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Add margin below to separate from footer or other components */}
      <div className="mb-10"></div>
    </div>
    <Footer/>
    </div>
  )
}

export default Shop
