import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-screen w-60 bg-gradient-to-b from-blue-600 to-blue-300  text-white p-6 flex flex-col gap-4 shadow-xl justify-center">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <NavLink
        to="/register"
        className="hover:bg-blue-700 px-4 py-2 rounded-md transition"
      >
        Create User
      </NavLink>
      <NavLink
        to="/admin"
        className="hover:bg-blue-700 px-4 py-2 rounded-md transition"
      >
        All User
      </NavLink>
      <NavLink
        to="/domhost"
        className="hover:bg-blue-700 px-4 py-2 rounded-md transition"
      >
        Dome Host
      </NavLink>
      <NavLink
        className="hover:bg-blue-700 px-4 py-2 rounded-md transition"
        to="/"
      >
        Logout
      </NavLink>
    </div>
  );
};

export default Navbar;
