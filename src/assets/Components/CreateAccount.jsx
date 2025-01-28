import { FaGoogle, FaApple } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useState } from 'react';
const CreateAccount = ({setOpen, setSignUp}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState()




    axios.defaults.withCredentials = true
  const handleSign = (e)=>{
    e.preventDefault()
    // console.log(email, password, name);
    

    axios.post("https://oasback.onrender.com/register", {email, password,name,phone}).then((res)=>{
      // console.log(res.data);

      if(res.data.success == true){
        handleLogin()
      prompt("You are successfully Register")

      }
      
    })
    .catch((err)=>console.log(err)
    )
  }

  const handleLogin = (e)=>{
    // console.log("login in side the Signup");
    
   
    
    
    setOpen(true)
    setSignUp(false)

  }

  const handleCloseSign = ()=>{
    setOpen(false)
    setSignUp(false)
  }
  



  return (
    <>
    <form >
     <div className="sm:w-[35vw] pt-36  sm:mt-0 w-screen flex absolute right-0  flex-col gap-3 items-center sm:pt-5 shadow-lg bg-gray-100 min-h-screen">
      <button onClick={handleCloseSign} className=' absolute sm:top-5 top-10 left-5 text-xl  px-2 py-1 font-bold'>X</button>
        <h3 className='text-3xl font-semibold'>Sign Up</h3>
        <img className='w-[100px] ' src="./createAcc.png" alt="img" />
        <p>Let's get your set up</p>
        <div className="flex flex-col gap-2 w-[50%]">
        

        <input required className='px-5 py-2 rounded-lg' name='name' onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' />
        <input className='px-5 py-2 rounded-lg' onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' required />
        <input required className='px-5 py-2 rounded-lg' onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' />
        <input required className='px-5 py-2 rounded-lg' onChange={(e)=>setPhone(e.target.value)} type="number" placeholder='Phone Number' />
        <button onClick={handleSign} className='px-5 py-2 rounded-lg bg-cyan-400'>Create account</button>
        </div>
        <span className='ml-4'>
        <input className='ml-2 ' type="checkbox" name="term" id="term" />
        <span className='ml-2'>I agree to the Terms and Conditions</span>
        </span>
          
      
        <span>Already have an account ?
        <button onClick={handleLogin} className='ml-2 text-blue-700'>Login</button>
        </span>
        
     </div>
     </form>
    </>
  );
};

export default CreateAccount;
