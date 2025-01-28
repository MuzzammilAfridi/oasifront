import React from 'react';

const AlsoView = () => {
  const items = [
    { id: 1, name: 'Product 1', image: './top-20.png', price: '$10.00' },
    { id: 2, name: 'Product 2', image: './top-18.png', price: '$20.00' },
    { id: 3, name: 'Product 3', image: './top-17.png', price: '$30.00' },
    { id: 4, name: 'Product 4', image: './top-16.png', price: '$40.00' },
    { id: 5, name: 'Product 5', image: './top-21.png', price: '$50.00' },
   
    
    // Add more items as needed
  ];

  return (
    <div className="w-full overflow-x-scroll p-4">
      <h2 className="text-xl font-bold mb-4">Also Viewed</h2>
      <div className="flex space-x-4">
        {items.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-48">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="mt-2">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlsoView;
