import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const ForgotPassword = ({setOpen, setForgotPassword}) => {
  const {id, token} = useParams()

  const navigate = useNavigate()
  const [email, setEmail] = useState("");

  const handleClose = ()=>{
    setOpen(false)
    setForgotPassword(false)

  }

  const handleLogin = ()=>{
    setOpen(true)
    setForgotPassword(false)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
   await axios.post('https://oasback.onrender.com/forgot-password', {email}).then((res)=>{
    // console.log(token);
    
    // console.log(res.data);
    handleClose()
    navigate(`/reset-password/${res.data.token}`)
    
   })
   
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex h-screen justify-end   max-h-screen "> {/* Added pt-16 to add space below the navbar */}
       
        <div className="bg-white shadow-lg p-6 max-w-md w-full h-full">
          <div className="flex items-center justify-center">
        <button onClick={handleClose} className="text-xl relative right-24 font-bold">X</button>
          <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
          </div>
          <div className="max-w-screen sm:mt-5 mt-20 flex justify-center flex-col items-center">
            <img className="h-[127px] w-[127px]" src=".\forgot.png" alt="img" />
            <p className="text-[18px] font-medium leading-[21.78px] text-center text-[#2e2f33] my-8">
              Enter your email and we'll send a link to reset your password
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full h-[64px] rounded-3xl px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full h-[64px] rounded-3xl bg-[#7c71df] font-semibold text-white py-2 hover:bg-blue-600 transition duration-300 my-5"
            >
              Forgot Password
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Remember your password?{" "}
            <button onClick={handleLogin} className="text-blue-500 hover:underline">
              Back to Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
