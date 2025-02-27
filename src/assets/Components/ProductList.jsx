import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();


  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchProducts = async () => {
      if (!query) return;

      try {
        const response = await fetch(
          `https://oasback.onrender.com/product/search?query=${query}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
        Search Results : 
      </h2>

      {products.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">No products found.</p>
      ) : (
        <div className="grid mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((item) => (
             <Link to={`/${item._id}`} className="w-full">
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg  overflow-hidden cursor-pointer transition-all hover:shadow-2xl"
            >
             
                <motion.img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-64 object-cover rounded-t-xl"
                  whileHover={{ scale: 1.03 }}
                />
             

              <div className="p-5 bg-white rounded-b-xl">
                <h3 className="text-xl font-semibold text-gray-900 truncate">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {item.description}
                </p>
                <p className="text-lg font-semibold text-blue-600 mt-2">
                  ${item.price}
                </p>

                <motion.button
                  className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-lg font-medium shadow-md hover:from-blue-600 hover:to-indigo-600 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.85 }}
                >
                  Shop Now
                </motion.button>
               
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
