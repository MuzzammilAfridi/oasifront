import React from 'react';

const Design = ({ designData }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="w-[95vw] max-h-fit py-5 flex flex-wrap gap-3 mx-auto">
        {designData.map((elem, key) => (
          <img
            key={key} // Added key prop for each item
            className='rounded-lg max-w-[47%] sm:min-w-[32%] sm:h-[450px]' // Adjust width for two columns
            src={elem.img}
            alt="img"
          />
        ))}
      </div>
    </div>
  );
};

export default Design;
