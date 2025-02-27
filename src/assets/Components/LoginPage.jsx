import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const LoginPage = ({ setForgotPassword, setOpen, open, setSignUp, signUp }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  axios.defaults.withCredentials = true;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://oasback.onrender.com/login", { email, password }, { withCredentials: true });
      alert(res.data.message);
      
      if (res.data.success) {
        if (res.data.admin) {
          navigate("/admin");
        }
        handleClose();
      }
    } catch (err) {
      console.error("Login error:", err);
      alert(err.response.data.message);

    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSignUp(false);
    setOpen(false);
    setForgotPassword(false);
  };

  const handleSignup = () => {
    setSignUp(!signUp);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setForgotPassword(true);
    setOpen(false);
    setSignUp(false);
  };

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-gray-100"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="bg-cyan-200 shadow-xl rounded-2xl p-8 max-w-md w-full"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          <button onClick={handleClose} className="text-2xl font-bold text-gray-600 hover:text-red-500">&times;</button>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-600 text-center mb-6">Welcome back! Please log in to continue.</p>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={handleForgotPassword} className="text-sm text-blue-500 hover:underline mt-1">Forgot Password?</button>
          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-white font-medium transition duration-200 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          New here? <button onClick={handleSignup} className="text-blue-500 hover:underline">Create an account</button>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
