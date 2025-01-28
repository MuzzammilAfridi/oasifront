import { FaGoogle, FaApple } from 'react-icons/fa';
// import { FiX } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
// import { use } from '../../../../backend/routes/userRoutes';

// import Navbar from './Navbar';

function LoginPage({setForgotPassword, setOpen, open, setSignUp, signUp }) {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  axios.defaults.withCredentials = true


  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post('https://oasback.onrender.com/login', { email, password }, { withCredentials: true })
      .then((res)=>{
        if(res.data.success && res.data.admin){ 
          navigate('/admin')
          handleClose()
        }
  
        if(res.data.success){
          handleClose()
        }
      })
    

      
    
    
      
      // if (res.data.admin) {
      //   handleClose();
      //   navigate('/admin');
      // } else {
      //   handleClose();
      //   navigate('/shop');
      // }
    } catch (err) {
      console.error(err);
    }
  };
  


  const handleClose = ()=>{
    // console.log("X button is Clicked");

    // console.log(open);
    // console.log(signUp);
    
    setSignUp(false)
    setOpen(false)
    setForgotPassword(false)

  }

  const handleSignup = ()=>{
    setSignUp(!signUp)
    // console.log("Sign Up is Clicked");
    
  }

  const handleForgotPassword = (e)=>{
    e.preventDefault()
    setForgotPassword(true)
    setOpen(false)
    setSignUp(false)
  }

  return (
    <div className="sm:w-[35vw] w-screen flex fixed right-0 top-0 flex-col gap-5    bg-gray-100 min-h-screen">

     
      
      <div className="flex    overflow-y-hidden  border sm:w-[1/2] absolute top-0 right-0 justify-center min-h-screen ">
        <div className="w-full  max-w-md p-8">
          <button className='text-xl sm:relative sm:bottom-5  px-2 py-1 font-bold'
          onClick={handleClose}>X</button>
          <h2 className="text-2xl  sm:relative sm:bottom-5 font-bold mb-6 text-center">Login</h2>
          <div className="flex  sm:relative sm:bottom-5 flex-col justify-center items-center mb-6">
            <img className="h-[127px] w-[127px] sm:h-[90px] sm:w-[90px]" src="./Plant.png" alt="img" />
            <p className="text-center mt-2">Welcome back</p>
          </div>
          <form className="sm:space-y-2 space-y-4  sm:relative sm:bottom-8">
            <div>
              <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="w-[353px] h-[64px] sm:h-[40px] px-4 sm:py-2 py-3 border-[1.5px] rounded-3xl focus:outline-none focus:ring-2 focus:border-[#D6BBFB] transition duration-200 ease-in-out hover:border-[#D6BBFB] hover:shadow-xl"
              />
            </div>
            <div>
              <input 
            
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-[353px] h-[64px] sm:h-[40px] px-4 sm:py-2 py-3 border-[1.5px] rounded-3xl focus:outline-none focus:ring-2 focus:border-[#D6BBFB] transition duration-200 ease-in-out hover:border-[#D6BBFB] hover:shadow-lg"
              />
              <button
                onClick={handleForgotPassword}
                className="text-sm text-blue-500 hover:underline mt-2 block"
              >
                Forgot Password?
              </button>

             

            </div>
            <button 
              onClick={handleLogin}
              type="submit"
              className="w-full sm:w-[353px] h-[56px] sm:h-[40px] bg-[#7c71df] text-white py-2 rounded-3xl hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
          <div className="my-3  sm:relative sm:bottom-5 sm:my-1 text-center">
            <p className="text-sm text-gray-500 sm:relative sm:bottom-3 mb-2 sm:mb-0">Or continue with</p>
            <div className="flex  justify-center sm:relative sm:bottom-3 sm:right-3 flex-wrap mt-2 sm:mt-1">
              <button className="flex items-center justify-center w-[353px] bg-gray-100 py-2 px-4 rounded-lg hover:bg-gray-200">
                <FaGoogle />
                <span className="ml-2">Google</span>
              </button>

              <button className="flex  sm:relative sm:bottom-3 items-center justify-center w-[353px] bg-gray-100 py-2 px-4 rounded-lg hover:bg-gray-200 mt-4 sm:mt-2">
                <FaApple />
                <span className="ml-2">Apple</span>
              </button>
            </div>
            <div  className="text-center sm:relative sm:bottom-3">
            <p className="text-sm text-gray-500">
              First time here?{' '}
              <button 
              onClick={handleSignup}
              className="text-blue-500 hover:underline">
                Create an account
              </button>
            </p>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
