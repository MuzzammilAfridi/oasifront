import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules';

const SlidingAnimation = () => {
  
  return (
    <div className="overflow-hidden py-10 bg-gray-50 min-h-[300px] flex flex-col justify-center">
      {/* <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sliding Showcase</h2> */}
      <div className="w-full px-6">
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 4 }
          }}
          freeMode={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[FreeMode, Autoplay]}
        >
          {[...Array(10).keys()].map((index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md w-48 h-48 flex items-center justify-center text-lg font-semibold text-gray-700">
                Item {index + 1}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SlidingAnimation;
