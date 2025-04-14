import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

      setAvalable(true);
      navigate("/admin");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full flex justify-center ">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create New User
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={userdata.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={userdata.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={userdata.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userdata.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
