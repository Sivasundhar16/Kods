import React from "react";
import { useNavigate } from "react-router-dom";

const AuthButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-200">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-indigo-200 text-center w-80">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-6">
          Welcome!
        </h2>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition duration-300"
          >
            Login
          </button>
          {/* <button
            onClick={() => navigate("/register")}
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg shadow-md transition duration-300"
          >
            Register
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AuthButtons;
