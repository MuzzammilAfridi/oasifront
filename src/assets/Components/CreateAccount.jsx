import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateAccount = ({ setOpen, setSignUp }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  axios.defaults.withCredentials = true;

  const handleSign = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://oasback.onrender.com/register", { email, password, name, phone });
      if (res.data.success) {
        handleLogin();
        alert("You are successfully registered!");
      }
    } catch (err) {
      console.error("Signup error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    setOpen(true);
    setSignUp(false);
  };

  const handleCloseSign = () => {
    setOpen(false);
    setSignUp(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white ">
      <div className="bg-cyan-200 shadow-xl max-h-[98vh] rounded-2xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
          <button onClick={handleCloseSign} className="text-2xl font-bold text-gray-600 hover:text-red-500">&times;</button>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-600 text-center mb-6">Let's get you set up</p>
        </div>
        <form onSubmit={handleSign} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-white font-medium transition duration-200 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <div className="flex items-center gap-2 mt-4">
          <input type="checkbox" name="term" id="term" />
          <span className="text-gray-500">I agree to the Terms and Conditions</span>
        </div>
        <p className=" text-gray-500 mt-4">
          Already have an account? <button onClick={handleLogin} className="text-blue-500 hover:underline">Login</button>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;