import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const TopProducts = ({ products }) => {
  return (
    <div className="px-[15px] w-full min-h-fit py-[30px] bg-gradient-to-b from-cyan-50 to-cyan-100 mx-auto">
      <h2 className="text-[22px] sm:text-[30px] sm:mx-14 text-[#2E2F33] font-bold">
        Top Products
      </h2>

      {/* Grid container for products */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 w-full">
        {!products || products.length === 0 ? (
          <div className="flex flex-wrap shadow py-1 gap-y-4 gap-x-2 mx-auto w-[98vw] rounded-lg border items-center justify-center">
            {[...Array(8)].map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="flex flex-col px-4 w-[160px] sm:w-[220px] h-[280px] bg-gray-300 shadow-md py-2 rounded-lg border items-center justify-center animate-pulse"
              >
                <div className="bg-gray-200 w-full h-[160px] sm:w-[200px] sm:h-[200px] rounded-md flex items-center justify-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex w-full px-2 items-center py-2 mt-2 flex-col space-y-2">
                  <div className="bg-gray-200 h-4 w-3/4 rounded-md"></div>
                  <div className="bg-gray-200 h-4 w-1/2 rounded-md"></div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          [...products].reverse().map((elem, idx) => (
            <motion.div
              key={elem.id || elem._id || idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col bg-white shadow-lg py-3 px-4 rounded-lg border border-gray-200 items-center justify-center cursor-pointer transition-all duration-300"
            >
              <Link to={`/${elem.id || elem._id}`} className="w-full">
                <motion.img
                  className="bg-[#F3F4F7] object-contain w-[140px] h-[150px] sm:w-[200px] sm:h-[220px] mx-auto rounded-md"
                  src={elem.img}
                  alt="Product"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                />
           

              <div className="flex w-full px-2 items-center py-2 mt-2 flex-col text-center">
                <h3 className="font-semibold text-sm sm:text-base text-gray-800">
                  {elem.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">{elem.description}</p>

                <div className="mt-2 px-3 py-1 rounded-md bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md">
                  <p className="text-sm font-semibold">
                    Price: <span className="text-white">${elem.price}</span>
                  </p>
                </div>
              </div>
              </Link>
            </motion.div>
          ))
        )}
      </div>

      {/* Extra spacing for better layout */}
      <div className="mt-12"></div>
    </div>
  );
};

export default TopProducts;
