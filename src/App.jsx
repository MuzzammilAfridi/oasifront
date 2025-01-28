import { useEffect, useState } from 'react'
import Navbar from './assets/Components/Navbar'
import LoginPage from './assets/Components/LoginPage'
import CreateAccount from './assets/Components/CreateAccount'
import ForgotPassword from './assets/Components/ForgotPassword.jsx'
import Checkout from './assets/Components/Checkout'
import Payment from './assets/Components/Payment'
import HeroSection from './assets/Components/HeroSection'
import Categories from './assets/Components/Categories'
import SittingRoom from './assets/Components/SittingRoom'
import ViewProduct from './assets/Components/ViewProduct'
import ArticleHero from './assets/Components/ArticleHero'
import Footer from './assets/Components/Footer'
import Cart from './assets/Components/Cart'
import OderPlaced from './assets/Components/OderPlaced'
import FAQ from './assets/Components/FAQ'
import Design from './assets/Components/Design'
import { Route, Routes } from 'react-router-dom'
import TopProducts from './assets/Components/TopProducts'
import Shop from './assets/Components/Shop'
import CartList from './assets/Components/CartList'
import SuccessPage from './assets/Components/SuccessPage.jsx'
import { ToastContainer } from 'react-toastify'
import TopProductsDetails from './assets/Components/TopProductsDetails.jsx'
import Admin from './assets/Components/Admin.jsx'
import axios from 'axios'
import ResetPassword from './assets/Components/ResetPassword.jsx'
import Profile from './assets/Components/Profile.jsx'
// import { Counter } from './features/counter/Counter'
// import Design from './assets/Components/Design'


function App() {
  const [count1, setCount1] = useState(2)
  const [products, setProducts] = useState([])

  const [isAdmin, setIsAdmin] = useState(false)

  
// console.log(products)
  const topProductsData = [
    {
      id: 1,
      img : './top-01.png',
      name : "Faux Leat...",
      price : 129
    },
  // { id: 1, name: 'Apple', price: 20 },

    {
      id: 2,
      img : './top-02.png',
      name : "Faux Leat...",
      price : 129,
      qnt : 1
    },
    {
      id: 3,
      img : './top-03.png',
      name : "Faux Leat...",
      price : 129,
      qnt : 1
    },
    {
      id: 4,
      img : './top-04.png',
      name : "Faux Leat...",
      price : 129,
      qnt : 1
    },
    {
      id: 5,
      img : './top-05.png',
      name : "Faux Leat...",
      price : 129,
      qnt : 1
    },
    {
      id:6,
      img : './top-06.png',
      name : "Faux Leat...",
      price : 129
    },
    {
      id:7,
      img : './top-07.png',
      name : "Faux Leat...",
      price : 129
    },
    {
      id:8,
      img : './top-08.png',
      name : "Faux Leat...",
      price : 129
    },
    {
      id:9,
      img : './top-09.png',
      name : "Faux Leat...",
      price : 129
    },
    {
      id:10,
      img : './Top-10.png',
      name : "Faux Leat...",
      price : 129
    },
    {
      id:11,
      img : './top-11.png',
      name : "Faux Leat...",
      price : 129
    },
    {
      id:12,
      img : './top-12.png',
      name : "Faux Leat...",
      price : 129
    },
    {
      id:13,
      img : './top-13.png',
      name : "Faux Leat...",
      price : 129
    },
    {
      id:14,
      img : './top-14.png',
      name : "Faux Leat...",
      price : 129
    },
    {
      id:15,
      img : './top-15.png',
      name : "Faux Leat...",
      price : 129
    },
    {
      id:16,
      img : './top-16.png',
      name : "Faux Leat...",
      price : 129
    },
    {
      id:18,
      img : './top-17.png',
      name : "Faux Leat...",
      price : 129
    },
    {
      id:19,
      img : './top-18.png',
      name : "Faux Leat...",
      price : 129
    },
    {
      id:20,
      img : './top-19.png',
      name : "Faux Leat...",
      price : 129
    },
    {
      id:21,
      img : './top-20.png',
      name : "Faux Leat...",
      price : 129
    },
    {
      id:22,
      img : './top-21.png',
      name : "Faux Leat...",
      price : 129
    },
  ]

  


  



  useEffect(()=>{
    const data = axios.get("https://oasback.onrender.com/product/allproducts").then((res)=>{
      // console.log(res.data.products);
      setProducts([...topProductsData, ...res.data.products])

      
      
    })

    // console.log(products);

  }, [])




  const articleData = [
    {
      img : './article-01.jpeg',
      header : "The Art of Minimalism How <br/> to Achieve a Sleek Look",
      detail: "Discover tips and tricks for adopting a <br/> minimalist approach to interior design and creating"

    },
    {
      img: "./article-02.jpeg",
      header : "The Art of Minimalism How <br/> to Achieve a Sleek Look",
      detail: "Discover tips and tricks for adopting a <br/> minimalist approach to interior design and creating"

    },
    {
      img: "./article-03.png",
      header : "The Art of Minimalism How <br/> to Achieve a Sleek Look",
      detail: "Discover tips and tricks for adopting a <br/> minimalist approach to interior design and creating"

    },
    {
      img: "./article-04.jpeg",
      header : "The Art of Minimalism How <br/> to Achieve a Sleek Look",
      detail: "Discover tips and tricks for adopting a <br/> minimalist approach to interior design and creating"

    },
    {
      img: "./article-05.jpeg",
      header : "The Art of Minimalism How <br/> to Achieve a Sleek Look",
      detail: "Discover tips and tricks for adopting a <br/> minimalist approach to interior design and creating"

    },
    {
      img: "./article-06.jpeg",
      header : "The Art of Minimalism How <br/> to Achieve a Sleek Look",
      detail: "Discover tips and tricks for adopting a <br/> minimalist approach to interior design and creating"

    },
    {
      img: "./article-07.jpeg",
      header : "The Art of Minimalism How <br/> to Achieve a Sleek Look",
      detail: "Discover tips and tricks for adopting a <br/> minimalist approach to interior design and creating"

    },
  ]

  const cartData = [
    {
      img: "./article-07.jpeg",
      name : "Luxe Armchair - Left Arm Chute",
      price : 899,
    },
    {
      img: "./article-07.jpeg",
      name : "Luxe Armchair - Left Arm Chute",
      price : 899,
    },
    
  
    
  ]


  const designData = [
    {
      img:"./design-01.png"
    },
    {
      img:"./design-02.png"
    },
    {
      img:"./design-03.png"
    },
    {
      img:"./design-04.png"
    },
    {
      img:"./design-05.png"
    },
    {
      img:"./design-06.png"
    },
    {
      img:"./design-07.png"
    },
    {
      img:"./design-08.png"
    },
    
  ]

  const [open, setOpen] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const [itemPrice, setItemPrice] = useState(0)
  const [img, setImg] = useState('')
  const [forgotPassword, setForgotPassword] = useState(false)
  const [isProfile, setIsprofile] = useState(false)
  

// console.log(user, isAuthenticated, isLoading);
  
  

  return (

    
    <div className="overflow-x-clip max-w-[100vw] mx-auto">
      <Navbar setOpen={setOpen} setIsprofile={setIsprofile} isAdmin={isAdmin} count1={count1} open={open} />
      {/* <Counter/> */}

      {/* {console.log(open)} */}
      

      {open && !signUp && (  <div className="sm:w-[52vw] w-screen h-screen  fixed right-0 sm:-top-5 z-50 transition-all duration-500">
        <LoginPage setForgotPassword={setForgotPassword} setOpen={setOpen} open={open} signUp={signUp} setSignUp={setSignUp} />
          </div>)}
      {signUp && !forgotPassword && (  <div className="sm:max-w-[40vw] w-screen min-h-screen  fixed right-0 top-0 z-50 transition-all duration-500">
        <CreateAccount setOpen={setOpen} setSignUp={setSignUp} />
          </div>)}

          {forgotPassword && (  <div className="sm:max-w-[40vw] w-screen min-h-screen  fixed right-0 top-0 z-50 transition-all duration-500">
        <ForgotPassword setForgotPassword={setForgotPassword}  setOpen={setOpen} setSignUp={setSignUp} />
          </div>) }

          {isProfile && (  <div className="sm:max-w-[40vw] w-screen min-h-screen  fixed right-0 top-0 z-50 transition-all duration-500">
        <Profile setIsprofile={setIsprofile} setOpen={setOpen}  />
          </div>) }


     
    <Routes>
      <Route path='/' element={
        <HeroSection setImg={setImg}  setItemPrice={setItemPrice} itemPrice={itemPrice} setCount1={setCount1} count1={count1} products={products} designData={designData}/>}/>
      <Route path='/login' element={<LoginPage setForgotPassword={setForgotPassword} setOpen={setOpen} open={open} signUp={signUp} setSignUp={setSignUp}/>}/>
      <Route path='/createAccount' element={<CreateAccount/>}/>
      <Route path='/forgot' element={<ForgotPassword setOpen={setOpen}/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/order' element={<OderPlaced/>}/>
      <Route path='/shop' element={      <TopProducts setCount1={setCount1} setImg={setImg} setItemPrice={setItemPrice} itemPrice={itemPrice}  count1={count1} products={products}/>
}/>
      {/* <Route path='/view' element={<ViewProduct/>}/> */}
      <Route path='/cartlist' element={<CartList setImg={setImg} img={img} itemPrice={itemPrice}/>}/>
      <Route path='/blog' element={<ArticleHero articleData={articleData}/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/sittingRoom'  element={<SittingRoom  products={products}/>}/>
      <Route path='/buy' element={<SuccessPage/>}/>
      <Route path='/reset-password/:token' element={<ResetPassword/>}/>

      <Route path="/:id" element={<TopProductsDetails products={products}/>} />
      <Route path="/product/:id" element={<TopProductsDetails setForgotPassword={setForgotPassword} products={products} />} />

      <Route path='/admin' element={<Admin/>}/>







    {/* <div className=' overflow-x-clip'> */}
    
    {/* <LoginPage/> */}
    {/* <CreateAccount/> */}
    {/* <ForgotPassword/> */}
     {/* <Checkout/> */}
   {/* <Payment/> */}

   {/* <OderPlaced/> */}

   {/* <FAQ/> */}

   {/* <Design/> */}

    {/* <HeroSection/> */}
    {/* <Categories/> */}
    
    {/* <ViewProduct/> */}

    {/* <ArticleHero articleData={articleData}/> */}




    {/* <Cart cartData={cartData}/>       */}
    {/* <Footer/> */}

    {/* </div> */}
    </Routes>
    <ToastContainer/>
    
    </div>
  )
}

export default App
