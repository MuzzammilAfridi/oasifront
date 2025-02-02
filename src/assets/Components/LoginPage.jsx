import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';

function LoginPage({ setForgotPassword, setOpen, open, setSignUp, signUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // New loading state
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const res = await axios.post('https://oasback.onrender.com/login', { email, password }, { withCredentials: true });

      if (res.data.success) {
        if (res.data.admin) {
          navigate('/admin');
        }
        handleClose();
      }
    } catch (err) {
      console.error('Login error:', err);
    } finally {
      setLoading(false); // Stop loading after request is complete
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
    <div className="sm:w-[35vw] w-screen flex fixed right-0 top-0 flex-col gap-5 bg-gray-100 min-h-screen">
      <div className="flex overflow-y-hidden border sm:w-[1/2] absolute top-0 right-0 justify-center min-h-screen">
        <div className="w-full max-w-md p-8">
          <button className="text-xl sm:relative sm:bottom-5 px-2 py-1 font-bold" onClick={handleClose}>
            X
          </button>
          <h2 className="text-2xl sm:relative sm:bottom-5 font-bold mb-6 text-center">Login</h2>
          <div className="flex sm:relative sm:bottom-5 flex-col justify-center items-center mb-6">
            <img className="h-[127px] w-[127px] sm:h-[90px] sm:w-[90px]" src="./Plant.png" alt="img" />
            <p className="text-center mt-2">Welcome back</p>
          </div>
          <form className="sm:space-y-2 space-y-4 sm:relative sm:bottom-8">
            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="w-[353px] h-[64px] sm:h-[40px] px-4 sm:py-2 py-3 border-[1.5px] rounded-3xl focus:outline-none focus:ring-2 focus:border-[#D6BBFB] transition duration-200 ease-in-out hover:border-[#D6BBFB] hover:shadow-xl"
              />
            </div>
            <div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-[353px] h-[64px] sm:h-[40px] px-4 sm:py-2 py-3 border-[1.5px] rounded-3xl focus:outline-none focus:ring-2 focus:border-[#D6BBFB] transition duration-200 ease-in-out hover:border-[#D6BBFB] hover:shadow-lg"
              />
              <button onClick={handleForgotPassword} className="text-sm text-blue-500 hover:underline mt-2 block">
                Forgot Password?
              </button>
            </div>
            <button
              onClick={handleLogin}
              type="submit"
              disabled={loading} // Disable button while loading
              className={`w-full sm:w-[353px] h-[56px] sm:h-[40px] bg-[#7c71df] text-white py-2 rounded-3xl transition ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
              }`}
            >
              {loading ? <FaSpinner className="animate-spin mx-auto" /> : 'Login'}
            </button>
          </form>
          <div className="my-3 sm:relative sm:bottom-5 sm:my-1 text-center">
            <div className="text-center sm:relative sm:bottom-3">
              <p className="text-sm text-gray-500">
                First time here?{' '}
                <button onClick={handleSignup} className="text-blue-500 hover:underline">
                  Create an account
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
