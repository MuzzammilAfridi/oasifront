import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion/dist/framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Design = ({ designData }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-6 bg-gradient-to-b from-gray-50 to-gray-200">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Stunning Designs ✨
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[95vw] max-w-5xl mx-auto"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-lg"
        >
          {designData.map((elem, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                src={elem.img}
                alt="Design"
                className="w-full h-[400px] sm:h-[450px] object-cover rounded-xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Design;
