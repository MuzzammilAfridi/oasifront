import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

 const navigate = useNavigate()
  const {id, token} = useParams()
  
 axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
  // console.log(token);

   axios.post(`https://oasback.onrender.com/reset-password/${token}`, {password} )
   .then(res => {
    prompt(res.data.message);
    
    if(res.data.success){
      navigate('/')
    }
    
   })
    
    

    
   
  };

  return (
    <div className="flex sm:items-center items-start mt-10 sm:mt-0 justify-center overflow-hidden h-[calc(100vh-100px)] bg-gray-100">
      <div className="bg-white px-6 rounded-lg shadow-md h-[calc(100vh-100px)] sm:h-[70vh] sm:py-5 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Reset Password
        </h2>
        {success ? (
          <div className="text-center text-green-600">
            <p>Your password has been reset successfully!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="mb-4 text-red-600 text-sm text-center">
                {error}
              </div>
            )}
            <div className="mb-4 relative">
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute top-5 inset-y-0 right-3 flex items-center text-gray-500 hover:text-indigo-600 focus:outline-none"
              >
                {showNewPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute  top-5 inset-y-0 right-3 flex items-center text-gray-500 hover:text-indigo-600 focus:outline-none"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
