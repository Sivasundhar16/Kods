import React from "react";
import { useNavigate } from "react-router-dom";

const Decidepage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="flex flex-col sm:flex-row gap-6">
        <button
          onClick={() => navigate("/register")}
          className="px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-2xl shadow-lg hover:bg-indigo-700 hover:scale-105 transform transition duration-300 ease-in-out"
        >
          ➕ Add Users
        </button>

        <button
          onClick={() => navigate("/dom-users")}
          className="px-8 py-4 text-lg font-semibold text-white bg-pink-500 rounded-2xl shadow-lg hover:bg-pink-600 hover:scale-105 transform transition duration-300 ease-in-out"
        >
          🏠 Add DOM Users
        </button>
      </div>
    </div>
  );
};

export default Decidepage;
