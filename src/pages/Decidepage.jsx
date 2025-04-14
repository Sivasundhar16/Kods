import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Decidepage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-10 bg-gradient-to-tr from-blue-100 to-green-300">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => navigate("register")}
          className="px-6 py-3 text-lg font-medium border rounded-md hover:bg-gray-100 transition"
        >
          ➕ Add Users
        </button>

        <button
          onClick={() => navigate("domregister")}
          className="px-6 py-3 text-lg font-medium border rounded-md hover:bg-gray-100 transition"
        >
          🏠 Add DOM Users
        </button>
      </div>

      <div className="w-full max-w-xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Decidepage;
