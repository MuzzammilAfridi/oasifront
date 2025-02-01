import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import OrderNotifications from './OrderNotifications';
import io from "socket.io-client";
import MyOrder from './MyOrder';

const Admin = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [orders, setOrders] = useState([]);
  const [userId, setUserId] = useState('')

  const [order_id, setOrder_id] = useState('')

  // console.log(orders._id);
  





  const [notifications, setNotifications] = useState([]);
  const [socket, setSocket] = useState(null);



  useEffect(()=>{
    axios.get("https://oasback.onrender.com/user").then((res)=>{
      setUserId(res.data.user._id)
      console.log("this is user", res.data.user._id);
      
    })
  },[])

  useEffect(() => {
    // Request permission for browser notifications
    if (Notification.permission === "default" || Notification.permission === "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("✅ Notification Permission Granted");
        } else {
          console.log("❌ Notification Permission Denied");
        }
      });
    }

    // Initialize Socket.IO connection
    const newSocket = io("https://oasback.onrender.com"); // Connect to backend
    setSocket(newSocket);

    // Check if connected successfully
    newSocket.on("connect", () => {
      console.log("🔌 Connected to WebSocket Server:", newSocket.id);
    });

    // Listen for order notifications
    newSocket.on("orderNotification", (data) => {
      console.log("📩 Received Notification Data:", data);

      // Show browser push notification
      if (Notification.permission === "granted") {
        const notification = new Notification("📦 Order Update", {
          body: data.message,
          icon: "https://oasis-rho-pink.vercel.app/Plant.png",
        });

        notification.onclick = () => {
          window.open("https://oasis-rho-pink.vercel.app/", "_blank");
        };
      } else {
        console.warn("🚨 Notifications are blocked by the user.");
      }

      // Update UI notification list
      setNotifications((prev) => [...prev, data]);
    });

    return () => {
      console.log("🔌 Disconnecting from WebSocket Server...");
      newSocket.off("orderNotification"); // Remove listener
      newSocket.disconnect();
    };
  }, []);

  // Function to send a notification request to the backend
  const sendNotification = async (message, userId) => {
    try {
      const res = await axios.post("https://oasback.onrender.com/socket/sendOrderStatus", { // Corrected endpoint
        message,
        orderStatus: "Lassun",
        userId,  // Use the actual user ID
      });
  
      console.log("✅ Notification Sent:", res.data.message);
    } catch (error) {
      console.error("❌ Error sending notification:", error.message);
    }
  };




  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const res = await axios.get('https://oasback.onrender.com/isadmin', { withCredentials: true });
        if (!res.data.success) {
          console.warn('Admin verification failed: User is not an admin');
          navigate('/');
        }
      } catch (error) {
        console.error('Admin verification failed:', error.response?.data?.message || error.message);
        navigate('/');
      }
    };

    verifyAdmin();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !price || !file) {
      setMessage('All fields are required!');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('file', file);

    try {
      const res = await axios.post('https://oasback.onrender.com/admin', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (res.data.success) {
        setMessage('Product added successfully!');
        setName('');
        setDescription('');
        setPrice(0);
        setFile(null);
      } else {
        setMessage('Failed to add the product.');
      }
    } catch (error) {
      console.error('Error submitting product:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await axios.get('https://oasback.onrender.com/order/all');
      console.log(res.data);
      setOrders(res.data);

      
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateOrderStatus = async (orderId, newStatus) => {
    setOrder_id(orderId)
    console.log(orderId);
    
    try {
      const res = await axios.put(`https://oasback.onrender.com/order/update/${orderId}`, { status: newStatus });
      if (res.data.success) {
        alert('Order status updated successfully!');
        fetchOrders(); // Refresh order list
      } else {
        alert('Failed to update order.');
      }
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  return (
    <div className='bg-black min-h-[188vh] py-10'>
      
      <h1 className='text-4xl font-bold text-center text-red-700'>
        Aur Bhai, mai hu Admin Teri koi aukat nhi h mere pass
      </h1>

      <div className="w-screen">
        <form onSubmit={handleSubmit} className='flex flex-col w-[300px] mx-auto border border-white p-5 rounded-lg gap-5 mt-8'>
          <input className='px-6 py-2' type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter the name of Product' />
          <input className='px-6 py-2' type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter the Description' />
          <input className='px-6 py-2' type='number' name='price' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter the price' />
          <input onChange={(e) => setFile(e.target.files[0])} className='ml-5 text-white' type='file' />
          <button className='px-5 py-2 rounded-md bg-cyan-400' type='submit'>Submit</button>
        </form>
      </div>
      {message && <p className='text-center text-white mt-4'>{message}</p>}

      <div className="p-5 bg-black min-h-screen">
  <p className="text-4xl font-bold text-cyan-300 text-center mb-6">Order List</p>

  <div className="max-w-4xl mx-auto space-y-6">
    {orders.length === 0 ? (
      <p className="text-white text-center">No orders found.</p>
    ) : (
      orders.map((order) => (
        <div key={order._id} className="border border-cyan-500 p-5 rounded-lg shadow-lg bg-gray-900">
          <p className="text-cyan-400 font-bold text-lg">
            Order ID: <span className="text-white">{order._id}</span>
          </p>
          <p className="text-white mt-2">👤 Customer: <span className="font-semibold">{order.customerName}</span></p>
          <p className="text-white">📧 Email: <span className="font-semibold">{order.email}</span></p>
          <p className="text-green-400 font-semibold mt-2">💰 Total Price: ${order.totalPrice.toFixed(2)}</p>
          <p className="text-gray-400 text-sm">📅 Created At: {new Date(order.createdAt).toLocaleString()}</p>

          <p className="text-cyan-300 font-semibold mt-4">🛒 Products Ordered:</p>
          <ul className="list-none text-white mt-2 space-y-2">
            {order.items.map(({ itemName, quantity }, index) => (
              <li key={index} className="bg-gray-800 px-4 py-2 rounded-md shadow">
                <span className="text-cyan-400 font-medium">{itemName}</span> - 
                <span className="text-red-300"> {quantity}</span>
              </li>
            ))}
          </ul>

          <p className="text-cyan-300 font-semibold mt-4">📦 Order Status: 
            <span className="text-yellow-300"> {order.status}</span>
          </p>

          <div className="flex space-x-3 mt-4">
          <button
  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
  onClick={() => {
    updateOrderStatus(order._id, "confirmed");
    sendNotification("✅ Your order has been Confirmed", order.customerId); // Use the correct user ID
  }}
>
  Send Confirmed
</button>

<button
  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
  onClick={() => {
    updateOrderStatus(order._id, "shipped");
    sendNotification("🚚 Your order has been Shipped", order.customerId); // Use the correct user ID
  }}
>
  Send Shipped
</button>

<button
  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
  onClick={() => {
    updateOrderStatus(order._id, "delivered");
    sendNotification("🎉 Your order has been Delivered", order.customerId); // Use the correct user ID
  }}
>
  Send Delivered
</button>

</div>

        </div>
      ))
    )}
  </div>
</div>

{/* <MyOrder/> */}

    </div>
  );
};

export default Admin;
