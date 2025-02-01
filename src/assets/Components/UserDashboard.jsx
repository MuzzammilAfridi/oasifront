import React, { useEffect, useState } from 'react';
import io from "socket.io-client";

const UserDashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [socket, setSocket] = useState(null);
  const [newProduct, setNewProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Initialize the socket connection and listen for notifications
  useEffect(() => {
    const newSocket = io("https://oasback.onrender.com");
    setSocket(newSocket);

    // Register the user with the socket server
    const userId = "user123"; // Replace with the actual user ID, e.g., from authentication
    newSocket.emit("register", userId);

    // Listen for incoming notifications (order updates)
    newSocket.on("orderNotification", (data) => {
      console.log("Received Notification:", data);
      
      // Show browser notification if permission is granted
      if (Notification.permission === "granted") {
        const notification = new Notification("Order Update", {
          body: data.message,
          icon: "https://example.com/icon.png",
        });

        notification.onclick = () => {
          window.location.href = "/order-details"; // Redirect to the order page
        };
      }

      // Update state to show the notification in the UI
      setNotifications((prev) => [...prev, data]);
    });

    // Listen for new product notifications
    newSocket.on('newProductNotification', (product) => {
      setNewProduct(product);
      setIsVisible(true);

      // Hide the popup after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    });

    // Clean up the socket connection when the component is unmounted
    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <div className='text-white'>
      <h1>User Dashboard</h1>
      <h2>Order Notifications</h2>
      <div>
        {notifications.length > 0 ? (
          notifications.map((notif, index) => (
            <div key={index}>
              <p>{notif.message}</p>
            </div>
          ))
        ) : (
          <p>No new notifications.</p>
        )}
      </div>

      {/* New Product Popup */}
      {isVisible && newProduct && (
        <div className="fixed top-4 right-4 p-4 bg-blue-500 text-white rounded-lg shadow-lg max-w-xs w-full">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">New Arrival!</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-xl font-bold bg-transparent text-white"
            >
              &times;
            </button>
          </div>
          <div className="mt-2">
            <p className="font-semibold">{newProduct.name}</p>
            <p>{newProduct.description}</p>
            <p className="mt-2 font-bold">Price: ${newProduct.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
