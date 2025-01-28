import React from 'react';
import LatestArticle from './LatestArticle';
import Navbar from './Navbar';

const ArticleHero = ({ articleData }) => {
  return (
    <div>
      {/* <Navbar /> */}

      {/* Hero Section */}
      <div className='w-full px-3 sm:px-5 lg:px-10 mt-5'>
        <div className='flex flex-col gap-5 max-w-[1200px] mx-auto'>
          <h6 className='text-[25px] sm:w-[70vw] sm:text-[30px] lg:text-[40px] font-semibold leading-tight'>
            Transforming Your Living Space: Top Trends  in Modern  Furniture
          </h6>

          <p className='text-[14px] sm:text-[16px] lg:text-[18px] text-[#5f6980] max-w-[90vw] lg:max-w-[80vw] leading-[1.7]'>
            Explore the latest trends in modern furniture design that can elevate your living space with style and functionality.
          </p>

          <span className='mt-2'>
            <a className='px-5 py-3 font-semibold text-[16px] lg:text-[18px] text-[#2e2f33] bg-[#f8f7fb] rounded-3xl' href="#">
              Read article (arrow)
            </a>
          </span>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full h-auto flex justify-center mt-5 relative">
        <img
          className='w-[361px] sm:w-[80vw] lg:w-[60vw] xl:w-[70vw] sm:h-[55vh] object-cover rounded-md'
          src="./article-01.jpeg"
          alt="Article Image"
        />
      </div>

      {/* Latest Article Section */}
      <LatestArticle articleData={articleData} />
    </div>
  );
};

export default ArticleHero;
