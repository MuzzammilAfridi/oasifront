import React from 'react';
import { motion } from "framer-motion/dist/framer-motion";


const LatestArticle = ({ articleData }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} 
      className='min-h-fit px-4 mt-10'
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-[20px] leading-[24.2px] my-4 font-bold text-[#2e2f33]'
      >
        Latest Article
      </motion.span>
      
      {/* Grid container with staggered animation */}
      <motion.div 
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        {articleData.map((elem, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.3 }}
            className='w-[361px] sm:w-[80vw] lg:w-[90%] mt-4 min-h-[416px] mx-auto bg-white p-4 rounded-md shadow-md cursor-pointer'
          >
            {/* Image Section with Hover Effect */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='h-[217px] sm:h-[200px] lg:h-[210px] w-full object-cover rounded-md'
              src={elem.img}
              alt="img"
            />

            {/* Title */}
            <h4 className='text-[25px] sm:text-[24px] mt-4 leading-tight font-semibold'>
              {elem.title || "The Art of Minimalism: How to Achieve a Sleek Look"}
            </h4>

            {/* Description */}
            <p className='text-[16px] sm:text-[16px] w-full lg:w-[90%] truncate sm:whitespace-normal leading-[19.36px] mt-4 text-[#5f6980]'>
              {elem.description || "Discover tips and tricks for adopting a minimalist approach to interior design and creating a sleek, clutter-free home."}
            </p>

            {/* Link Button with Hover Effect */}
            <motion.a 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }} 
              transition={{ duration: 0.2 }}
              className='px-4 py-2 rounded-3xl mt-4 inline-block bg-[#f8f7fb] font-semibold text-[14px] text-[#7c71df]'
              href="#"
            >
              Interior Design
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LatestArticle;
