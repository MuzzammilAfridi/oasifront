import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const CartList = ({itemPrice,setImg, img}) => {
  const item = useSelector((state) => state.counter.items)
  const ttlPrice = useSelector((state) => state.counter.totalPrice)
  // console.log(item);
 const dispatch = useDispatch()


  const handleQuantityChange = (id, type) => {
    dispatch({ type: 'counter/updateQuantity', payload: { id, type } });
};

  
  return (
    <div className='flex flex-col items-center mt-5 justify-center'>
        <h1 className='text-center text-4xl mt-5'>Cart List</h1>
       {item.map((e)=>(
         <div key={e.id} className="sm:w-[600px] mt-5 h-[180px] flex items-center justify-between sm:px-8 px-2 rounded-lg  w-screen shadow-lg border">
          <div className="h-full flex flex-col">
         <img className=' h-[130px]' src={e.img} alt="img" />
         <p className='text-sm text-center'>Price : {e.qnty*e.price}</p>
         </div>
         <Link to='/buy' className='px-4 rounded py-2 bg-[#7C71DF] text-white hover:bg-[#6358be] active:bg-green-900 '>Buy Now</Link>
         {/* <p>Quantity: {e.qnty || 0}</p> */}
         
         <div className="flex gap-2 items-center">
                            <button
                                className="px-2 py-1 bg-green-400 text-white rounded"
                                onClick={() => handleQuantityChange(e.id, 'increment')}
                            >
                                +
                            </button>
                            <p>{e.qnty || 0}</p>
                            <button
                                className="px-2 py-1 bg-red-500 text-white rounded"
                                onClick={() => handleQuantityChange(e.id, 'decrement')}
                            >
                                -
                            </button>
                        </div>
 
         </div>
       ))}
       <p className='my-5 text-lg font-semibold  w-screen text-center px-5 py-2'>Total Price : {ttlPrice}</p>
     
      
    </div>
  )
}

export default CartList
