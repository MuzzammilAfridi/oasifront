import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from "react-toastify";
import LoginPage from './LoginPage';
import CreateAccount from './CreateAccount';
import {addItem} from '../../features/counter/counterSlice'
import { useAuth0 } from "@auth0/auth0-react";
import Validate from './Validate';
import axios from 'axios'
import ForgotPassword from './ForgotPassword';

import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

const TopProductsDetails = ({ products,  }) => {
  const [open, setOpen] = useState(false)
const [signUp, setSignUp] = useState(false)
const [forgotPassword, setForgotPassword] = useState(false)
const [userId, setUserId] = useState()
  const dispatch = useDispatch()
// console.log(open);



         
    const {id} = useParams();
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("https://oasback.onrender.com/user", {
          withCredentials: true,
        });
        setUserId(res.data.user._id);
        console.log("User id",res.data.user._id);
        console.log("Product id",id);
        

       
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

    // console.log("ID from useParams:", id);
    // console.log("Products array:", products);
  
    // Find product
    const product = products.find((e) => {
      // console.log("Checking product:", e, "against ID:", id);
      return e.id === parseInt(id) || e._id === id;
    });
  
    if (!products || products.length === 0) {
      return <p>Loading products...</p>;
    }
  
    if (!product) {
      return <p>Product not found!</p>;
    }

  const notifySuccess = () => toast.success("Product added successfully!");
  // const { user, isAuthenticated, isLoading, logout, } = useAuth0();

  const handleBuy = async () => {
    try {
      const authResponse = await axios.get('https://oasback.onrender.com/isAuthenticated');
      
      if (authResponse.data.success) {
        console.log("User authenticated:", authResponse.data);
        
        const cartResponse = await axios.post(
          `https://oasback.onrender.com/product/cart/${userId}/add`,
          { productId: id, quantity: 1 },
          { withCredentials: true }
        );
  
        console.log("Cart response:", cartResponse.data);
  
       
        if (cartResponse.data?.success || cartResponse.status === 200) {
          notifySuccess();
          dispatch(addItem(product));
        } else {
          console.warn("Unexpected response format:", cartResponse.data);
        }
      } else {
        console.warn("User not authenticated");
        setOpen(true);
      }
    } catch (error) {
      console.error("Error in handleBuy:", error);
      setOpen(true);
    }
  };
  
  


  return (
    <>

{open && !signUp && (  <div className="sm:w-[52vw] w-screen h-screen  fixed right-0 sm:-top-5 z-50 transition-all duration-500">
        <LoginPage setForgotPassword={setForgotPassword} setOpen={setOpen}  open={open} signUp={signUp} setSignUp={setSignUp} />
          </div>)}
      {signUp && (  <div className="sm:max-w-[40vw] w-screen min-h-screen  fixed right-0 top-0 z-50 transition-all duration-500">
        <CreateAccount setOpen={setOpen} setSignUp={setSignUp} />
          </div>)}

          {forgotPassword && (  <div className="sm:max-w-[40vw] w-screen min-h-screen  fixed right-0 top-0 z-50 transition-all duration-500">
        <ForgotPassword setForgotPassword={setForgotPassword}  setOpen={setOpen} setSignUp={setSignUp} />
          </div>) }

    ( <div className='w-full   sm:w-screen bg-white  h-fit pb-4'>
      {/* <Navbar /> */}
  
      <div className='flex pl-4 sm:pl-10 flex-col sm:flex-row sm:items-center gap-5 mt-6 mb-8 items-start text-[#5F6980]'>
     <div className='flex gap-4'>
     <p><a href="#">Homepage </a></p>
        <p><a href="#">Categories </a></p>
        <p><a href="#">Sitting Room </a></p>
         {/* <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button> */}
     </div>
        <p className='text-[13px] font-normal leading-[15.73px] text-[#2E2F33]'>Luxe Armchair - Left Arm Chute</p>
      </div>
  
      <div className='flex flex-col  sm:flex-row   sm:pl-10 gap-4 w-full mt-5'>
        {/* Product Info Section */}
        
          <div className='flex items-center justify-center sm:w-1/2 w-screen '>
          <img className='rounded-md w-[80vw] sm:w-[30vw] sm:ml-5 ml-0 bg-[#F3F4F7] object-cover' src={product.img} alt="Product" />
          {/* <img className='w-full rounded-md hidden sm:block my-4 h-[361px] bg-[#F3F4F7] object-cover' src="./sofa-02.png" alt="Product" />
          <img className='w-full rounded-md hidden sm:block h-[361px] bg-[#F3F4F7] object-cover' src="./sofa-03.png" alt="Product" />
          <img className='w-full rounded-md hidden sm:block my-4 h-[361px] bg-[#F3F4F7] object-cover' src="./sofa-04.png" alt="Product" /> */}
        </div>
       
        
  
        {/* Product Details Section */}
        <div className='flex-1 pl-4 sm:pl-10 h-fit  flex flex-col'>
          <div className='flex-grow'>
            <p className='font-semibold text-[25px] leading-[30.26px] text-[#2E2F33] mt-5'>{product.name}</p>
            <p className='mt-3'>Rating (remaining)</p>
  
            <div className='flex items-center justify-start gap-[6px] mt-5'>
              <p className='font-semibold text-[26px] leading-[31.47px] text-[#7C71DF]'>{product.price}</p>
              <p className='text-[16px] font-normal leading-[19.36px] line-through text-[#5F6980]'>$1999.00</p>
              <p className='px-6 py-3 text-[16px] font-medium leading-[19.36px] rounded-3xl bg-[#f650616c] text-[#f65061]'>-40%</p>
            </div>
  
            <p className='mt-3 font-normal text-[16px] leading-[26px] text-[#5f6980]'>
              Ultra-functional and elegantly minimalist, our <br />
              Luxe Armchair Collection draws inspiration <br />
              from Nordic-style décor. It features a neutral <br />
              color palette and natural wood accents, <br />
              highlighted by uniquely designed hexagonal <br />
              legs.
            </p>
  
            {/* Color Options */}
            <div className='flex justify-start gap-5 mt-4'>
              <span className='w-[50px] h-[50px] border-2 border-white bg-[#A6A39D] rounded-lg'></span>
              <span className='w-[50px] h-[50px] border-2 border-white bg-[#B6978D] rounded-lg'></span>
              <span className='w-[50px] h-[50px] border-2 border-white bg-[#8D9EB6] rounded-lg'></span>
            </div>
          </div>
  
          {/* Buy Now Button */}
          <div className='flex justify-start mt-7 mb-5'>
            <button 
            onClick={handleBuy}
            className='w-[351px] h-[45px] sm:h-[53px] bg-[#7c71df] text-white rounded-[50px]'>Add to Cart</button>
          </div>
  
          {/* Shipping Info */}
          <div className='pb-4'>
            <p className='text-[14px] leading-[16.94px] font-normal text-black my-[16px]'>Free shipping included</p>
            <p className='text-[14px] leading-[16.94px] font-normal text-black my-[16px]'>Made from the best of materials sourced</p>
          </div>
        </div>
      </div>
      </div>) 
   
      </>

  )
}

export default TopProductsDetails
