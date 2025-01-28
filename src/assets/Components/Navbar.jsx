import { useEffect, useState } from 'react';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
// import { decrement, increment,addToCart } from '../../features/counter/counterSlice'


function Navbar({isAdmin, setIsprofile, open, setOpen, count1 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [logout, setLogout] = useState(false)

  useEffect(()=>{
    axios.get('https://oasback.onrender.com/isAuthenticated',{ withCredentials: true })
    .then((res)=>{
      if(res.data.success){
        setLogout(true)
      }
    }
    )
  })


  

  const handleLogout = ()=>{
    axios.get("https://oasback.onrender.com/logout").then((res)=>{
      setLogout(true)
      // console.log(res.data);
      
    })
  }

   const handleGetStarted =()=>{
    setOpen(!open)
   }

   const qnt = useSelector((state) => state.counter.totalQuantity)
  //  const dispatch = useDispatch()

  // const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  return (
    <nav className="bg-white shadow-md h-[10vh] sm:h-[13vh]">
      <div className="w-screen  px-8 py-3 h-full  flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">

          <Link to='/'>
        <svg width="51" height="19" viewBox="0 0 51 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1385 2.2525C13.5873 2.91732 13.9197 3.62369 14.1357 4.37161C14.3518 5.10292 14.4598 5.91732 14.4598 6.81483C14.4598 7.71233 14.3601 8.66801 14.1607 9.68186C13.9612 10.6957 13.6288 11.7096 13.1634 12.7234C12.6981 13.7373 12.133 14.6348 11.4681 15.4159C10.8033 16.1971 9.96399 16.837 8.95014 17.3356C7.93629 17.8176 6.82271 18.0586 5.60942 18.0586C3.83103 18.0586 2.45152 17.427 1.47091 16.1639C0.490305 14.8841 0 13.247 0 11.2525C0 9.24142 0.34903 7.40485 1.04709 5.7428C1.76177 4.06413 2.77562 2.70125 4.08864 1.65416C5.41828 0.59045 6.8892 0.0585938 8.50138 0.0585938C9.5651 0.0585938 10.4958 0.25804 11.2936 0.656931C12.0914 1.05582 12.7064 1.58768 13.1385 2.2525ZM6.35734 16.3633C7.1385 16.3633 7.79501 16.0226 8.32687 15.3411C8.87535 14.6597 9.29086 13.7705 9.57341 12.6736C10.1385 10.5129 10.4211 8.29405 10.4211 6.01704C10.4211 3.17494 9.65651 1.75388 8.12742 1.75388C7.26316 1.75388 6.50693 2.26912 5.85873 3.29959C4.64543 5.24419 4.03878 7.93671 4.03878 11.3772C4.03878 13.2553 4.14681 14.4187 4.36288 14.8675C4.4626 15.1168 4.59557 15.3744 4.76177 15.6403C5.06094 16.1223 5.5928 16.3633 6.35734 16.3633Z" fill="#55575F"/>
<path d="M22.7553 7.43809C22.7886 7.40485 22.88 7.18879 23.0296 6.7899C23.8107 6.7899 24.8578 7.02258 26.1709 7.48796C25.7553 8.86746 25.4229 10.3134 25.1736 11.8259C24.9243 13.3218 24.7997 14.3938 24.7997 15.042C24.7997 15.6736 24.8661 15.9893 24.9991 15.9893C25.0988 15.9893 25.4645 15.8314 26.0961 15.5157L26.3952 15.3661L26.844 16.2386C26.6944 16.3716 26.495 16.5378 26.2456 16.7373C26.013 16.9367 25.5642 17.2109 24.8994 17.56C24.2346 17.8924 23.6362 18.0586 23.1044 18.0586C22.0739 18.0586 21.4756 17.5932 21.3094 16.6625C20.2456 17.5932 19.2817 18.0586 18.4174 18.0586C17.5697 18.0586 16.8468 17.7262 16.2484 17.0614C15.6667 16.3965 15.3758 15.3495 15.3758 13.9201C15.3758 11.6929 15.8329 9.93948 16.747 8.6597C17.6612 7.3633 18.7664 6.7151 20.0628 6.7151C20.9936 6.7151 21.8911 6.9561 22.7553 7.43809ZM19.9132 15.9395C20.3121 15.9395 20.7609 15.7816 21.2595 15.4658C21.3758 13.1223 21.7664 10.8037 22.4312 8.51012C21.9326 8.29405 21.5088 8.18602 21.1598 8.18602C20.5614 8.18602 20.0462 8.77605 19.6141 9.9561C19.1986 11.1195 18.9908 12.4076 18.9908 13.8204C18.9908 15.2331 19.2983 15.9395 19.9132 15.9395Z" fill="#55575F"/>
<path d="M34.7159 14.4935C34.7159 15.5406 34.2505 16.3965 33.3197 17.0614C32.4056 17.7262 31.3585 18.0586 30.1785 18.0586C28.9984 18.0586 28.0594 17.8093 27.3613 17.3107C26.6799 16.8121 26.3391 16.3716 26.3391 15.9893C26.3391 15.7567 26.63 15.3827 27.2117 14.8675C27.7934 14.3356 28.2837 14.0115 28.6826 13.8952C29.5137 14.5101 30.1951 15.4824 30.7269 16.8121C31.3419 16.7622 31.6494 16.4713 31.6494 15.9395C31.6494 15.1749 30.9763 14.0946 29.63 12.6985C28.2837 11.2857 27.6106 10.1639 27.6106 9.33283C27.6106 8.50181 27.9846 7.86192 28.7325 7.41316C29.4804 6.94779 30.3779 6.7151 31.425 6.7151C32.4887 6.7151 33.2865 6.90624 33.8184 7.28851C34.3502 7.65416 34.6161 8.16109 34.6161 8.80929C34.6161 9.44087 34.1092 10.3218 33.0954 11.4519C33.2117 11.5683 33.3613 11.7262 33.5441 11.9256C33.7269 12.1085 33.9679 12.4658 34.2671 12.9977C34.5663 13.5295 34.7159 14.0281 34.7159 14.4935ZM32.3225 10.5794C33.0206 9.98103 33.3696 9.391 33.3696 8.80929C33.3696 8.22757 32.9707 7.93671 32.1729 7.93671C31.7907 7.93671 31.4749 8.01981 31.2256 8.18602C30.9763 8.3356 30.8516 8.51012 30.8516 8.70956C30.8516 9.07521 31.2173 9.59045 31.9486 10.2553L32.3225 10.5794Z" fill="#55575F"/>
<path d="M41.035 8.26081C41.035 8.95887 40.8107 10.1639 40.3619 11.8758C39.9132 13.5711 39.6888 14.6846 39.6888 15.2165C39.6888 15.7317 39.7636 15.9893 39.9132 15.9893C40.0129 15.9893 40.3951 15.8314 41.06 15.5157L41.3591 15.3661L41.783 16.2386C41.6334 16.3716 41.4339 16.5378 41.1846 16.7373C40.9353 16.9367 40.4699 17.2109 39.7885 17.56C39.1071 17.8924 38.4755 18.0586 37.8938 18.0586C37.312 18.0586 36.855 17.8841 36.5226 17.535C36.1902 17.1694 36.024 16.6874 36.024 16.0891C36.024 15.4741 36.2317 14.3938 36.6472 12.8481C37.0627 11.2857 37.2705 10.2719 37.2705 9.80652C37.2705 9.10846 37.0544 8.45195 36.6223 7.83699L36.3979 7.53782L36.4228 7.21372C37.3037 6.96441 38.7331 6.83976 40.7109 6.83976C40.927 7.08907 41.035 7.56275 41.035 8.26081ZM38.1929 4.1223C37.8605 3.7899 37.6943 3.34945 37.6943 2.80098C37.6943 2.2525 37.9187 1.77051 38.3674 1.35499C38.8328 0.93948 39.3647 0.731724 39.963 0.731724C40.5614 0.731724 41.0267 0.897929 41.3591 1.23034C41.6915 1.56275 41.8577 2.00319 41.8577 2.55167C41.8577 3.08352 41.6168 3.55721 41.1348 3.97272C40.6694 4.38823 40.1458 4.59599 39.5641 4.59599C38.9824 4.59599 38.5253 4.4381 38.1929 4.1223Z" fill="#55575F"/>
<path d="M50.3706 14.4935C50.3706 15.5406 49.9053 16.3965 48.9745 17.0614C48.0604 17.7262 47.0133 18.0586 45.8332 18.0586C44.6532 18.0586 43.7141 17.8093 43.0161 17.3107C42.3346 16.8121 41.9939 16.3716 41.9939 15.9893C41.9939 15.7567 42.2848 15.3827 42.8665 14.8675C43.4482 14.3356 43.9385 14.0115 44.3374 13.8952C45.1684 14.5101 45.8498 15.4824 46.3817 16.8121C46.9967 16.7622 47.3041 16.4713 47.3041 15.9395C47.3041 15.1749 46.631 14.0946 45.2848 12.6985C43.9385 11.2857 43.2654 10.1639 43.2654 9.33283C43.2654 8.50181 43.6393 7.86192 44.3872 7.41316C45.1352 6.94779 46.0327 6.7151 47.0798 6.7151C48.1435 6.7151 48.9413 6.90624 49.4731 7.28851C50.005 7.65416 50.2709 8.16109 50.2709 8.80929C50.2709 9.44087 49.764 10.3218 48.7501 11.4519C48.8665 11.5683 49.0161 11.7262 49.1989 11.9256C49.3817 12.1085 49.6227 12.4658 49.9219 12.9977C50.221 13.5295 50.3706 14.0281 50.3706 14.4935ZM47.9773 10.5794C48.6753 9.98103 49.0244 9.391 49.0244 8.80929C49.0244 8.22757 48.6255 7.93671 47.8277 7.93671C47.4454 7.93671 47.1296 8.01981 46.8803 8.18602C46.631 8.3356 46.5064 8.51012 46.5064 8.70956C46.5064 9.07521 46.872 9.59045 47.6033 10.2553L47.9773 10.5794Z" fill="#55575F"/>
</svg>
</Link>

        </div>

       

        {/* Menu Items */}
        <ul
        onClick={()=>setIsOpen(!isOpen)}
        
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-[10vh] left-0 w-full  md:static md:flex md:items-center ml-32 md:justify-center md:space-x-6 z-20 shadow-lg sm:shadow-none bg-slate-300 sm:bg-white transition-all ease-in-out duration-300 md:w-auto`}
        >
          <li className="py-2 px-4 md:px-0 hover:text-blue-500">
            <Link to="/">Home</Link>
          </li>
          <li className="py-2 px-4 md:px-0 hover:text-blue-500">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="py-2 px-4 md:px-0 hover:text-blue-500">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="py-2 px-4 md:px-0 hover:text-blue-500">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="py-2 px-4 sm:hidden md:px-0 hover:text-blue-500" 
         >
         
{/* onClick={() => loginWithRedirect()} */}
            {/* <button onClick={handleGetStarted} >Get Started</button> */}
          </li>
        </ul>


<div className="flex gap-3 ">
     
   {/* Right Side: Add to Cart and Get Started */}
   <div className=" flex items-center space-x-4">
          
          <Link to="/cartlist">
          <button className="flex items-center relative text-gray-700 hover:text-blue-500">
            <div className="bg-red-700 text-[10px]  text-white flex items-center justify-center rounded-full w-3 absolute top-[2px] left-[10px] h-3">{qnt}</div>
            <FiShoppingCart size={26} />
            <span className="ml-2 hidden sm:block">Cart</span>
          </button>
          
          </Link>

         
          
          {/* {isAuthenticated && <button className='hidden sm:block bg-slate-500 px-4 py-2'  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>}

         {isAuthenticated ?  <img className='h-[40%] hidden sm:block rounded-full' src={user.picture} alt="img" /> : 
          <button
          className="bg-blue-500 hidden sm:block text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => loginWithRedirect()}
         
        >
          Get Started
        </button>} */}

        {logout ?( <button onClick={()=>setIsprofile(true)} className='px-5 py-2 bg-cyan-500 rounded-md hover:bg-cyan-600'>Profile</button> ): (<button onClick={handleGetStarted}>Get Started</button> )}

        
        </div>

         {/* Mobile Menu Button */}
         <div className="md:hidden mt-3 ">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
