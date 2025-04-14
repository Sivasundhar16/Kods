import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    getUser();
  }, [id]);

  if (!user) {
    return (
      <p className="text-center mt-10 text-gray-600">Loading user details...</p>
    );
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-tr from-blue-100 to-green-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full space-y-4 border border-gray-200">
        <h2 className="text-2xl font-bold text-indigo-600 text-center">
          User Details
        </h2>
        <p>
          <span className="font-semibold text-gray-700">First Name:</span>{" "}
          {user.firstName}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Last Name:</span>{" "}
          {user.lastName}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Email:</span>{" "}
          {user.email}
        </p>
        <p>
          <span className="font-semibold text-red-600">Password:</span>{" "}
          {user.password}
        </p>
      </div>
    </div>
  );
};

export default Details;
