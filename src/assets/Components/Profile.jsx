import { FaGoogle, FaApple } from 'react-icons/fa';
// import { FiX } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
// import { use } from '../../../../backend/routes/userRoutes';

// import Navbar from './Navbar';

function Profile({setIsprofile }) {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  axios.defaults.withCredentials = true


  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post('https://oasback.onrender.com/login', { email, password });
      // console.log(res.data);
      if(res.data.success && res.data.admin){ 
        navigate('/admin')
        setOpen(false)
      }
      
    
    
  
    } catch (err) {
      console.error(err);
    }
  };
  
  const handleLogout = ()=>{
    axios.get('https://oasback.onrender.com/logout').then((res)=>{
        handleClose()
        navigate('./')
    })
  }


  const handleClose = ()=>{
  
    setIsprofile(false)


  }

  

  

  return (
    <div className="sm:w-[35vw] w-screen flex fixed right-0 top-0 flex-col gap-5    bg-gray-100 min-h-screen">

     
      
      <div className="flex    overflow-y-hidden bg-cyan-300  border w-screen sm:w-full absolute top-0 right-0 justify-center min-h-screen ">
        <div className="w-full  max-w-md p-8">
          <button className='text-xl sm:relative sm:bottom-5  px-2 py-1 font-bold'
          onClick={handleClose}>X</button>

          <div className="">
          
          <button onClick={handleLogout} className='px-4 py-2 bg-slate-300 rounded-md'>Logout</button>
       
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
