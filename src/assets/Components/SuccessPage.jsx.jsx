import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-100 to-blue-100">
      <CSSTransition
        in={show}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <div className="bg-white shadow-lg rounded-lg p-10 text-center max-w-md mx-auto animate-slide-in">
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="Success"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-green-600 mb-2">
            Purchase Successful!
          </h1>
          <p className="text-gray-600">
            Your ad has been successfully purchased. Thank you for your trust!
          </p>
          {/* <button
            className="mt-6 px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            onClick={() => setShow(false)}
          >
            Done
          </button> */}
          <div className="mt-4">
            <Link
              to="/"
              className="text-blue-500 hover:underline transition duration-300"
            >
              Shop More
            </Link>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default SuccessPage;
