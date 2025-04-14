import React, { useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";

export const Register = ({ setAvalable }) => {
  const navigate = useNavigate();
  const [userdata, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await axios.post("http://localhost:3001/users", userdata);
      console.log(data);

      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });

      setAvalable(true); // Set state & localStorage
      navigate("/admin");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-300 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create User
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            name="firstName"
            value={userdata.firstName}
            onChange={handleChange}
            type="text"
            placeholder="First Name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={userdata.lastName}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="email"
            type="email"
            value={userdata.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={userdata.password}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg py-2 font-semibold hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
        {/* <p className="text-sm text-center text-gray-500 mt-4">
          Already register?
          <a href="/login" className="text-blue-500 hover:underline ml-1">
            Go to Login
          </a>
        </p> */}
      </div>
      <Outlet />
    </div>
  );
};
