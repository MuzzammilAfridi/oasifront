import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import CreateAccount from "./CreateAccount";
import LoginPage from "./LoginPage";
import { addItem } from '../../features/counter/counterSlice';

import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";

const FurnitureDetail = () => {
  const { id } = useParams();
  const [fashionProducts, setFashionProducts] = useState([]);
  const [loading, setLoading] = useState(true);
   const [open, setOpen] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);
    const [userId, setUserId] = useState();
    const dispatch = useDispatch();

  useEffect(() => {
    console.log("ID from URL:", id);
  }, [id]);



  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("https://oasback.onrender.com/user");
        setUserId(res.data.user._id);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUser();
  }, []);


  const notifySuccess = () => toast.success("Product added successfully!");


  useEffect(() => {
    axios.get("https://oasback.onrender.com/product/allproducts")
      .then((res) => {
        const products = res.data.products || [];
        setFashionProducts(products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (fashionProducts.length > 0) {
      console.log("Finding product with ID:", id);
      console.log("Available products:", fashionProducts);
    }
  }, [fashionProducts, id]);


  const handleBuy = async () => {
    try {
      const authResponse = await axios.get('https://oasback.onrender.com/isAuthenticated');
      if (authResponse.data.success) {
        await axios.post(
          `https://oasback.onrender.com/product/cart/${userId}/add`,
          { productId: id, quantity: 1 },
          { withCredentials: true }
        );
        notifySuccess();
        dispatch(addItem(product));
      } else {
        setOpen(true);
      }
    } catch (error) {
      console.error("Error in handleBuy:", error);
      setOpen(true);
    }
  };

  const product = fashionProducts.find((e) => e._id === id);

  if (loading) {
    return <h2 className="text-center text-blue-500 text-xl mt-10">Loading...</h2>;
  }

  if (!product) {
    return <h2 className="text-center text-red-500 text-xl mt-10">Item not found</h2>;
  }

  return (
    <div className="w-full min-h-screen bg-cyan-100 flex flex-col items-center py-10 px-5">
      {open && !signUp && <LoginPage setForgotPassword={setForgotPassword} setOpen={setOpen} signUp={signUp} setSignUp={setSignUp} />}
      {signUp && <CreateAccount setOpen={setOpen} setSignUp={setSignUp} />}
      {forgotPassword && <ForgotPassword setForgotPassword={setForgotPassword} setOpen={setOpen} setSignUp={setSignUp} />}

      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row">
        <div className="sm:w-1/2 p-6 flex items-center justify-center">
          <img className="rounded-md w-full max-w-sm object-cover" src={product.img} alt={product.name} />
        </div>

        <div className="sm:w-1/2 p-6">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-500 mt-2">Rating ⭐⭐⭐⭐⭐</p>

          <div className="flex items-center gap-4 mt-3">
            <span className="text-xl font-bold text-indigo-600">${product.price}</span>
            <span className="text-gray-400 line-through">$199.00</span>
            <span className="px-3 py-1 bg-red-100 text-red-500 rounded-lg">-40%</span>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">Ultra-functional and elegantly minimalist, our Luxe Armchair Collection draws inspiration from Nordic-style décor.</p>

          <div className="flex gap-3 mt-4">
            <span className="w-10 h-10 bg-gray-400 rounded-md"></span>
            <span className="w-10 h-10 bg-brown-400 rounded-md"></span>
            <span className="w-10 h-10 bg-blue-400 rounded-md"></span>
          </div>

          <button 
            onClick={handleBuy}
            className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            Add to Cart
          </button>

          <p className="mt-3 text-sm text-gray-500">Free shipping included</p>
          <p className="text-sm text-gray-500">Made from premium materials</p>
        </div>
      </div>
    </div>
  );
};

export default FurnitureDetail;
