// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import io from "socket.io-client";

// const OrderNotifications = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [socket, setSocket] = useState(null);

//   useEffect(() => {
//     // Request permission for browser notifications
//     if (Notification.permission === "default" || Notification.permission === "denied") {
//       Notification.requestPermission().then((permission) => {
//         if (permission === "granted") {
//           console.log("✅ Notification Permission Granted");
//         } else {
//           console.log("❌ Notification Permission Denied");
//         }
//       });
//     }

//     // Initialize Socket.IO connection
//     const newSocket = io("http://localhost:7070"); // Connect to backend
//     setSocket(newSocket);

//     // Check if connected successfully
//     newSocket.on("connect", () => {
//       console.log("🔌 Connected to WebSocket Server:", newSocket.id);
//     });

//     // Listen for order notifications
//     newSocket.on("orderNotification", (data) => {
//       console.log("📩 Received Notification Data:", data);

//       // Show browser push notification
//       if (Notification.permission === "granted") {
//         const notification = new Notification("📦 Order Update", {
//           body: data.message,
//           icon: "https://oasis-rho-pink.vercel.app/Plant.png",
//         });

//         notification.onclick = () => {
//           window.open("https://oasis-rho-pink.vercel.app/", "_blank");
//         };
//       } else {
//         console.warn("🚨 Notifications are blocked by the user.");
//       }

//       // Update UI notification list
//       setNotifications((prev) => [...prev, data]);
//     });

//     return () => {
//       console.log("🔌 Disconnecting from WebSocket Server...");
//       newSocket.off("orderNotification"); // Remove listener
//       newSocket.disconnect();
//     };
//   }, []);

//   // Function to send a notification request to the backend
//   const sendNotification = async (message) => {
//     try {
//       const res = await axios.post("http://localhost:7070/socket/sendOrderStatus", {
//         message,
//         orderStatus: "Lassun",
//       });

//       console.log("✅ Notification Sent:", res.data.message);
//     } catch (error) {
//       console.error("❌ Error sending notification:", error.message);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-5 bg-gray-100 shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold text-gray-800 mb-4">📢 Order Notifications</h1>

//       {/* Buttons to send different order statuses */}
//       <div className="flex space-x-3 mb-4">
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//           onClick={() => sendNotification("✅ Your order has been Confirmed")}
//         >
//           Send Confirmed
//         </button>
//         <button
//           className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
//           onClick={() => sendNotification("🚚 Your order has been Shipped")}
//         >
//           Send Shipped
//         </button>
//         <button
//           className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//           onClick={() => sendNotification("🎉 Your order has been Delivered")}
//         >
//           Send Delivered
//         </button>
//       </div>

//       {/* Display notifications */}
//       <ul className="space-y-2">
//         {notifications.length > 0 ? (
//           notifications.map((notif, idx) => (
//             <li
//               key={idx}
//               className={`p-3 rounded-lg text-white ${
//                 notif.message.includes("Confirmed")
//                   ? "bg-blue-500"
//                   : notif.message.includes("Shipped")
//                   ? "bg-yellow-500"
//                   : "bg-green-500"
//               }`}
//             >
//               {notif.message}
//             </li>
//           ))
//         ) : (
//           <p className="text-gray-600">No notifications yet...</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default OrderNotifications;
