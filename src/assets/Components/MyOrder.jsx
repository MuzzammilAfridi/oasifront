import { useEffect, useState } from "react";
import axios from "axios";
import UserDashboard from "./UserDashboard";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState('');

  axios.defaults.withCredentials = true;


  



  // Fetch user email
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("https://oasback.onrender.com/user", { withCredentials: true });
        if (res.data.user) {
          setEmail(res.data.user.email);
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUser();
  }, []);

  // Fetch user orders only after email is set
  useEffect(() => {
    if (!email) return; // Prevent running if email is empty

    const fetchOrders = async () => {
      try {
        const res = await axios.get(`https://oasback.onrender.com/order/user/${email}`);
        if (res.data.success) {
          setOrders(res.data.orders);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, [email]); // Re-run when email updates

  return (
    <div className="p-5 bg-black min-h-screen">

        {console.log(email)
        }
      <p className="text-4xl font-bold text-cyan-300 text-center mb-6">My Orders</p>
      <div className="max-w-4xl mx-auto space-y-6">
        {orders.length === 0 ? (
          <p className="text-white text-center">No orders found.</p>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="border border-cyan-500 p-5 rounded-lg shadow-lg bg-gray-900">
              <p className="text-cyan-400 font-bold text-lg">Order ID: <span className="text-white">{order._id}</span></p>
              <p className="text-white mt-2">👤 Customer: <span className="font-semibold">{order.customerName}</span></p>
              <p className="text-white">📧 Email: <span className="font-semibold">{order.email}</span></p>
              <p className="text-green-400 font-semibold mt-2">💰 Total Price: ${order.totalPrice.toFixed(2)}</p>
              <p className="text-gray-400 text-sm">📅 Created At: {new Date(order.createdAt).toLocaleString()}</p>

              <p className="text-cyan-300 font-semibold mt-4">🛒 Products Ordered:</p>
              <ul className="list-none text-white mt-2 space-y-2">
                {order.items.map((item, index) => (
                  <li key={index} className="bg-gray-800 px-4 py-2 rounded-md shadow">
                    <span className="text-cyan-400 font-medium">{item.itemName || "Unknown Product"}</span> -
                    <span className="text-yellow-300"> {item.quantity}</span>
                  </li>
                ))}
              </ul>

              <p className="text-cyan-300 font-semibold mt-4">📦 Order Status:
                <span className="text-yellow-300"> {order.status}</span>
              </p>
            </div>
          ))
        )}
      </div>

        <UserDashboard/>

        <p className="text-5xl text-white">Hii</p>

    </div>
  );
};

export default MyOrder;