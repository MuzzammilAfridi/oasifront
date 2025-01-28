import React from 'react'

const LatestArticle = ({articleData}) => {
  return (
    <div className='min-h-fit px-4 mt-10'>
        <span className='text-[20px] leading-[24.2px] my-4 font-bold text-[#2e2f33]'>Latest Article</span>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
  {articleData.map((elem, idx) => (
    <div key={idx} className='w-[361px] sm:w-[80vw] lg:w-[90%] mt-4 min-h-[416px] mx-auto'>
      {/* Image Section */}
      <img
        className='h-[217px] sm:h-[200px] lg:h-[210px] w-full object-cover rounded-md'
        src={elem.img}
        alt="img"
      />

      {/* Title */}
      <h4 className='text-[25px] sm:text-[24px] mt-4 leading-tight font-semibold'>
        The Art of Minimalism: How  to Achieve a Sleek Look
      </h4>

      {/* Description */}
      <p className='text-[16px] sm:text-[16px] w-full lg:w-[90%] truncate sm:whitespace-normal leading-[19.36px] mt-4 text-[#5f6980]'>
        Discover tips and tricks for adopting a minimalist approach to interior design and creating a sleek, clutter-free home.
      </p>

      {/* Link Button */}
      <a className='px-4 py-2 rounded-3xl mt-4 inline-block bg-[#f8f7fb] font-semibold text-[14px]  text-[#7c71df]' href="#">
        Interior Design
      </a>
    </div>
  ))}
</div>


      
    </div>
  )
}

export default LatestArticle
