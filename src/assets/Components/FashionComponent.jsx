import { motion } from "framer-motion";

import SlidingAnimation from './SlidingAnimation';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';



const fashionItems = [
  {
    id: 23,
    name: 'Elegant Dress',
    image: './fashon-01.jpeg',
    price: '$120',
  },
  {
    id: 24,
    name: 'Classic Suit',
    image: './fashon-02.webp',
    price: '$250',
  },
  {
    id: 25,
    name: 'Trendy Jacket',
    image: './fashon-03.webp',
    price: '$180',
  },
  {
    id: 26,
    name: 'Stylish Sneakers',
    image: './fashon-04.webp',
    price: '$95',
  },
  {
    id: 27,
    name: 'Elegant Dress',
    image: './fashon-01.jpeg',
    price: '$120',
  },
  {
    id: 28,
    name: 'Classic Suit',
    image: './fashon-02.webp',
    price: '$250',
  },
  {
    id: 29,
    name: 'Trendy Jacket',
    image: './fashon-03.webp',
    price: '$180',
  },
  {
    id: 30,
    name: 'Stylish Sneakers',
    image: './fashon-04.webp',
    price: '$95',
  },
];

const FashionComponent = () => {

  const [fashionProducts, setFashionProducts] = useState([]);

 useEffect(() => {
  axios.get("https://oasback.onrender.com/product/allproducts")
    .then((res) => {
      const products = res.data.products || []; // Ensure it's an array
      const furnitureItems = products.filter((item) => item.category === "Fashion");

      setFashionProducts(furnitureItems); // Only store "Furniture" products
      console.log("Filtered Furniture Products:", furnitureItems);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}, []);

  


  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Trending Fashion</h2>

      {/* <SlidingAnimation/> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
        {fashionProducts.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all"
          >
          <Link to={`/fashion/${item._id}`} className="w-full">
  <motion.img 
    src={item.img} 
    alt={item.name} 
    className="w-full h-72 object-cover" 
    whileHover={{ scale: 1.05 }}
  />
</Link>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-lg text-gray-500 mt-1">{item.price}</p>
              <motion.button 
                className="mt-4 bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Shop Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FashionComponent;