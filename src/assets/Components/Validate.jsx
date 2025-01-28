import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";



const Validate = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
        <p className="text-gray-700 mb-6">
          You need to be authenticated to view this page. Please log in or contact the administrator if you believe this is an error.
        </p>
        <button
        onClick={() => loginWithRedirect()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Validate;
