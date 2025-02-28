import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const FurnitureComponent = () => {
  const [furnitureProducts, setFurnitureProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://oasback.onrender.com/product/allproducts")
      .then((res) => {
        const products = res.data.products || [];
        const filteredItems = products.filter(
          (item) => item.category === "Furniture"
        );

        setFurnitureProducts(filteredItems);
        console.log("Filtered Furniture Products:", filteredItems);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-3">
      {/* Hero Section */}
      <div className="relative w-full h-96 rounded-xl shadow-lg mb-10 overflow-hidden">
        <img 
          src="./furniture-3.webp" 
          alt="Latest Furniture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-5xl font-bold">Elegant Furniture</h1>
          <p className="mt-3 text-lg">Discover timeless and stylish furniture for your space.</p>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 uppercase">
        Trending Furniture
      </h2>

      <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {furnitureProducts.map((item) => (
          <Link to={`/${item._id}`} key={item._id} className="w-[95vw] sm:w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all hover:shadow-2xl"
            >
              {/* Product Image Section */}
              <div className="relative w-full h-64 overflow-hidden">
                <motion.img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain rounded-t-xl transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Product Details */}
              <div className="p-5 bg-white rounded-b-xl text-center">
                <h3 className="text-xl font-semibold text-gray-900 truncate">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {item.description}
                </p>
                <p className="text-lg font-semibold text-blue-600 mt-2">
                  ${item.price}
                </p>

                {/* Extra Thumbnail Images */}
                <div className="flex justify-center gap-2 mt-3">
                  {item.extraImages?.map((img, index) => (
                    <motion.img
                      key={index}
                      src={img}
                      alt="Extra"
                      className="w-12 h-12 rounded-md border border-gray-300 object-cover cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                    />
                  ))}
                </div>

                {/* Shop Now Button */}
                <motion.button
                  className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-lg font-medium shadow-md hover:from-blue-600 hover:to-indigo-600 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Shop Now
                </motion.button>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FurnitureComponent;
