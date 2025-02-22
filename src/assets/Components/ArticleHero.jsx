import React from 'react';
import LatestArticle from './LatestArticle';
import { motion } from "framer-motion/dist/framer-motion";


const ArticleHero = ({ articleData }) => {
  return (
    <div>
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }} 
        className='w-full px-3 sm:px-5 lg:px-10 mt-5'
      >
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
          }}
          className='flex flex-col gap-5 max-w-[1200px] mx-auto'
        >
          {/* Animated Heading */}
          <motion.h6 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className='text-[25px] sm:w-[70vw] sm:text-[30px] lg:text-[40px] font-semibold leading-tight'
          >
            Transforming Your Living Space: Top Trends in Modern Furniture
          </motion.h6>

          {/* Animated Paragraph */}
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className='text-[14px] sm:text-[16px] lg:text-[18px] text-[#5f6980] max-w-[90vw] lg:max-w-[80vw] leading-[1.7]'
          >
            Explore the latest trends in modern furniture design that can elevate your living space with style and functionality.
          </motion.p>

          {/* Animated Button */}
          <motion.span
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className='mt-2'
          >
            <motion.a 
              whileHover={{ scale: 1.1, backgroundColor: "#e0e0e0" }} 
              whileTap={{ scale: 0.95 }} 
              transition={{ duration: 0.2 }}
              className='px-5 py-3 font-semibold text-[16px] lg:text-[18px] text-[#2e2f33] bg-[#f8f7fb] rounded-3xl cursor-pointer inline-block'
              href="#"
            >
              Read article →
            </motion.a>
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="w-full h-auto flex justify-center mt-5 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className='w-[361px] sm:w-[80vw] lg:w-[60vw] xl:w-[70vw] sm:h-[55vh] object-cover rounded-md shadow-lg'
          src="./article-01.jpeg"
          alt="Article Image"
        />
      </motion.div>

      {/* Latest Article Section */}
      <LatestArticle articleData={articleData} />
    </div>
  );
};

export default ArticleHero;
