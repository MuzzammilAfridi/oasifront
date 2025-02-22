import { FaGoogle, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Profile({ setIsprofile }) {
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState(null);
  const [email, setEmail] = useState('');
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("https://oasback.onrender.com/user", {
          withCredentials: true,
        });
        setUser(res.data.user);
        setEmail(res.data.user.email);

        if (res.data.user?.address) {
          setAddress(res.data.user.address);
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("https://oasback.onrender.com/user", {
          withCredentials: true,
        });
        if (res.data.user?._id) setUserId(res.data.user._id);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (!userId) return;
    fetchCart();
  }, [userId]);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://oasback.onrender.com/product/cart/${userId}`);
      setCart(res.data);
    } catch (err) {
      console.error("Error fetching cart:", err);
    } finally {
      setLoading(false);
    }
  };

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
  }, [email]);

  const handleLogout = () => {
    axios.get("https://oasback.onrender.com/logout").then(() => {
      setUser(null);
      setIsprofile(false);
      navigate("/");
    });
  };

  const handleClose = () => {
    setIsprofile(false);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-cyan-900 text-white h-screen overflow-y-auto">
      <p
        onClick={handleClose}
        className="bg-white text-cyan-900 cursor-pointer font-medium absolute left-2 top-1 rounded-full px-3 py-1 shadow-md"
      >
        X
      </p>

      <div className="w-full max-w-md min-h-fit bg-cyan-600 rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-4">
          <img
            src="./profile.jpg"
            alt="User Avatar"
            className="w-20 h-20 rounded-full border-4 border-cyan-400 object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">{user?.name || "Guest"}</h2>
            <p className="text-gray-300">{user?.email || "Not Logged In"}</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md bg-cyan-800 rounded-2xl shadow-md mt-6">
        <div className="p-4 border-b border-cyan-600">
          <h3 className="font-medium text-lg mb-2">Address</h3>
          <p className="text-sm text-gray-300">
            {address ? `${address.street}, ${address.city}, ${address.state}, ${address.zip}` : "No address saved."}
          </p>
          <Link
            onClick={handleClose}
            to="/address"
            className="mt-2 text-sm text-cyan-300 hover:underline"
          >
            Edit Address
          </Link>
        </div>

        <div className="p-4 border-b border-cyan-600">
          <h3 className="font-medium text-lg mb-2">Orders</h3>
          <p className="text-sm text-gray-300">You have {orders.length} active orders.</p>
          <Link
            to="/my-order"
            onClick={handleClose}
            className="mt-2 text-sm text-cyan-300 hover:underline"
          >
            View Orders
          </Link>
        </div>

        <div className="p-4 border-b border-cyan-600">
          <h3 className="font-medium text-lg mb-2">Wishlist</h3>
          <p className="text-sm text-gray-300">{cart && cart.products.length} items in your wishlist.</p>
          <Link
            onClick={handleClose}
            to="/cartlist"
            className="mt-2 text-sm text-cyan-300 hover:underline"
          >
            View Wishlist
          </Link>
        </div>

        {/* <div className="p-4 border-b border-cyan-600">
          <h3 className="font-medium text-lg mb-2">Account Settings</h3>
          <button className="text-sm text-cyan-300 hover:underline">
            Manage Settings
          </button>
        </div> */}

        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 shadow-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
