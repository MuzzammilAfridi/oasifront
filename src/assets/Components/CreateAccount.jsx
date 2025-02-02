import { FaGoogle, FaApple, FaSpinner } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const CreateAccount = ({ setOpen, setSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  axios.defaults.withCredentials = true;

  const handleSign = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const res = await axios.post("https://oasback.onrender.com/register", { email, password, name, phone });

      if (res.data.success) {
        handleLogin();
        alert("You are successfully registered!");
      }
    } catch (err) {
      console.error("Signup error:", err);
    } finally {
      setLoading(false); // Stop loading after request
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
    <>
      <form>
        <div className="sm:w-[35vw] pt-36 sm:mt-0 w-screen flex absolute right-0 flex-col gap-3 items-center sm:pt-5 shadow-lg bg-gray-100 min-h-screen">
          <button onClick={handleCloseSign} className="absolute sm:top-5 top-10 left-5 text-xl px-2 py-1 font-bold">
            X
          </button>
          <h3 className="text-3xl font-semibold">Sign Up</h3>
          <img className="w-[100px]" src="./createAcc.png" alt="img" />
          <p>Let's get you set up</p>
          <div className="flex flex-col gap-2 w-[50%]">
            <input required className="px-5 py-2 rounded-lg" name="name" onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
            <input required className="px-5 py-2 rounded-lg" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
            <input required className="px-5 py-2 rounded-lg" onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Phone Number" />
            <input className="px-5 py-2 rounded-lg" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
            <button 
              onClick={handleSign} 
              className={`px-5 py-2 rounded-lg bg-cyan-400 transition ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-cyan-500'
              }`}
              disabled={loading} // Disable button while loading
            >
              {loading ? <FaSpinner className="animate-spin mx-auto" /> : "Create Account"}
            </button>
          </div>
          <span className="ml-4">
            <input className="ml-2" type="checkbox" name="term" id="term" />
            <span className="ml-2">I agree to the Terms and Conditions</span>
          </span>
          <span>
            Already have an account?
            <button onClick={handleLogin} className="ml-2 text-blue-700">Login</button>
          </span>
        </div>
      </form>
    </>
  );
};

export default CreateAccount;
