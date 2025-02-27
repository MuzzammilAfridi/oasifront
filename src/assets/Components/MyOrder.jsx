import { useEffect, useState } from "react";
import axios from "axios";
import UserDashboard from "./UserDashboard";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [email, setEmail] = useState("");

  axios.defaults.withCredentials = true;


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


  useEffect(() => {
    if (!email) return; 

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

  // Function to determine progress percentage
  const getProgress = (status) => {
    const stages = ["pending", "confirmed", "shipped", "delivered"];
    return (stages.indexOf(status) / (stages.length - 1)) * 100;
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <p className="text-4xl font-bold text-blue-700 text-center mb-6">My Orders</p>

      <div className="max-w-4xl mx-auto space-y-6">
        {orders.length === 0 ? (
          <p className="text-gray-800 text-center">No orders found.</p>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="border border-gray-300 p-5 rounded-lg shadow-md bg-white">
              <p className="text-blue-600 font-bold text-lg">Order ID: <span className="text-gray-800">{order._id}</span></p>
              <p className="text-gray-800 mt-2">👤 Customer: <span className="font-semibold">{order.customerName}</span></p>
              <p className="text-gray-700">📧 Email: <span className="font-semibold">{order.email}</span></p>
              <p className="text-green-600 font-semibold mt-2">💰 Total Price: ${order.totalPrice.toFixed(2)}</p>
              <p className="text-gray-500 text-sm">📅 Created At: {new Date(order.createdAt).toLocaleString()}</p>

              <p className="text-blue-600 font-semibold mt-4">🛒 Products Ordered:</p>
              <ul className="list-none text-gray-800 mt-2 space-y-2">
                {order.items.map(({ itemName, quantity }, index) => (
                  <li key={index} className="bg-gray-200 px-4 py-2 rounded-md shadow-sm">
                    <span className="text-blue-700 font-medium">{itemName || "Unknown Product"}</span> - 
                    <span className="text-yellow-600"> {quantity}</span>
                  </li>
                ))}
              </ul>

              {/* Order Progress Bar */}
              <div className="mt-4">
                <p className="text-blue-600 font-semibold mb-2">📦 Order Progress:</p>
                <div className="relative w-full bg-gray-300 rounded-full h-4">
                  <div
                    className={`h-4 rounded-full transition-all duration-500 ${
                      order.status === "pending" ? "bg-gray-400" :
                      order.status === "confirmed" ? "bg-blue-500" :
                      order.status === "shipped" ? "bg-yellow-500" : "bg-green-500"
                    }`}
                    style={{ width: `${getProgress(order.status)}%` }}
                  ></div>
                </div>
                <p className="text-center text-gray-700 mt-1">{order.status.toUpperCase()}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* <UserDashboard /> */}
    </div>
  );
};

export default MyOrder;
