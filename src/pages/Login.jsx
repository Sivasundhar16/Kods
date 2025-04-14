import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAvalable }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    Username: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin");
    setAvalable(true);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-200 flex justify-center items-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl px-10 py-12 w-full max-w-sm transform hover:scale-105 transition duration-300">
        <h1 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">
          Admin Login
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              name="Username"
              value={data.Username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="Password"
              value={data.Password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-2 bg-indigo-500 text-white font-semibold py-3 rounded-xl hover:bg-indigo-600 active:scale-95 transition-all"
          >
            Login
          </button>
        </form>
        {/* <p className="text-sm text-center text-gray-500 mt-6">
          New User?{" "}
          <a
            href="/register"
            className="text-indigo-500 font-medium hover:underline"
          >
            Go to Register
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Login;
