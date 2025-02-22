import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = ({ setOpen, setForgotPassword }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setForgotPassword(false);
  };

  const handleLogin = () => {
    setOpen(true);
    setForgotPassword(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://oasback.onrender.com/forgot-password", { email });
      handleClose();
      navigate(`/reset-password/${res.data.token}`);
    } catch (err) {
      console.error("Forgot Password Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Forgot Password</h2>
          <button onClick={handleClose} className="text-2xl font-bold text-gray-600 hover:text-red-500">&times;</button>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-32 w-32 mb-4" src="./forgot.png" alt="Forgot Password" />
          <p className="text-gray-600 text-center mb-6">
            Enter your email and we'll send a link to reset your password.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-white font-medium transition duration-200 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Remember your password? <button onClick={handleLogin} className="text-blue-500 hover:underline">Back to Login</button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
