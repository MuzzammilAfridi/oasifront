import { FaGoogle, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Profile({ setIsprofile }) {
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState(null);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("https://oasback.onrender.com/user", {
          withCredentials: true,
        });
        setUser(res.data.user);

        if (res.data.user?.address) {
          setAddress(res.data.user.address);
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

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
    <div className="flex flex-col items-center p-6 bg-gray-900 h-screen overflow-y-auto">
      <p
        onClick={handleClose}
        className="bg-white cursor-pointer font-medium absolute left-2 top-1 rounded-full px-3 py-1"
      >
        X
      </p>

      <div className="w-full max-w-md min-h-fit bg-green-500 rounded-2xl shadow-md p-6">
        <div className="flex items-center gap-4">
          <img
            src="https://images.pexels.com/photos/11286875/pexels-photo-11286875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User Avatar"
            className="w-20 object-contain h-20 rounded-full border-2 border-blue-500"
          />
          <div>
            <h2 className="text-xl font-semibold">{user?.name || "Guest"}</h2>
            <p className="text-gray-500">{user?.email || "Not Logged In"}</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-md mt-6">
        {/* Address Section */}
        <div className="p-4 border-b">
          <h3 className="font-medium text-lg mb-2">Address</h3>
          <p className="text-sm text-gray-500">
            {address
              ? `${address.street}, ${address.city}, ${address.state}, ${address.zip}`
              : "No address saved."}
          </p>
          <Link
            onClick={handleClose}
            to="/address"
            className="mt-2 text-sm text-blue-500 hover:underline"
          >
            Edit Address
          </Link>
        </div>

        {/* Orders Section */}
        <div className="p-4 border-b">
          <h3 className="font-medium text-lg mb-2">Orders</h3>
          <p className="text-sm text-gray-500">You have 3 active orders.</p>
          <Link
            to="/my-order"
            onClick={handleClose}
            className="mt-2 text-sm text-blue-500 hover:underline"
          >
            View Orders
          </Link>
        </div>

        {/* Wishlist Section */}
        <div className="p-4 border-b">
          <h3 className="font-medium text-lg mb-2">Wishlist</h3>
          <p className="text-sm text-gray-500">5 items in your wishlist.</p>
          <Link
            onClick={handleClose}
            to="/cartlist"
            className="mt-2 text-sm text-blue-500 hover:underline"
          >
            View Wishlist
          </Link>
        </div>

        {/* Account Settings Section */}
        <div className="p-4 border-b">
          <h3 className="font-medium text-lg mb-2">Account Settings</h3>
          <button className="text-sm text-blue-500 hover:underline">
            Manage Settings
          </button>
        </div>

        {/* Logout Section */}
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
