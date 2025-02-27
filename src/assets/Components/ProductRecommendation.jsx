import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const ProductRecommendation = () => {
    const { id } = useParams();
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState(null);

    // Function to shuffle the array
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        const fetchRecommendations = async () => {
            if (!id) return;

            try {
                const res = await axios.get(`https://oasback.onrender.com/product/recommendations/${id}`);
                console.log(res.data);

                if (Array.isArray(res.data)) {
                    setRecommendations(shuffleArray(res.data)); // Shuffle before setting state
                } else {
                    console.error("Invalid response format:", res.data);
                    setRecommendations([]);
                }
            } catch (error) {
                console.error("Error fetching recommendations:", error);
                setError(error.message);
            }
        };

        fetchRecommendations();
    }, [id]);

    if (error) {
        return <p className="text-red-500 text-center mt-4">Failed to load recommendations: {error}</p>;
    }

    return (
        <div className="mt-10 max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold mb-6 text-gray-900 text-center">
                You may also like
            </h2>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {recommendations.length > 0 ? (
                    recommendations.map((product) => (
                        <Link key={product._id} to={`/${product._id}`} className="w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                whileHover={{ scale: 1.03 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all hover:shadow-xl p-5 border border-gray-200"
                            >
                                {/* Responsive Image */}
                                <motion.img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-56 object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                                />

                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                        {product.description}
                                    </p>
                                    <p className="text-xl font-bold text-blue-600 mt-3">
                                        ${product.price}
                                    </p>

                                    <motion.button
                                        className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2.5 rounded-xl font-semibold shadow-md hover:from-blue-600 hover:to-indigo-600 transition-transform duration-200 transform hover:scale-105"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Shop Now
                                    </motion.button>
                                </div>
                            </motion.div>
                        </Link>
                    ))
                ) : (
                    <p className="text-gray-600 text-center col-span-full">
                        No similar products found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProductRecommendation;
