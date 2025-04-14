import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const DomUserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/domuser/${id}`);
        setUserDetails(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError("Failed to load user details. Please try again later.");

        // If 404 error, redirect to domhost after a short delay
        if (error.response?.status === 404) {
          setTimeout(() => navigate("/domhost"), 3000);
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchUserDetails();
    } else {
      setError("Invalid user ID");
      setLoading(false);
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-r from-purple-50 to-indigo-100 p-6 flex justify-center items-center">
        <p className="text-center text-indigo-700">Loading user details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-r from-purple-50 to-indigo-100 p-6 flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-md">
          <p className="text-center text-red-500 mb-4">{error}</p>
          <div className="text-center">
            <Link
              to="/domhost"
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Return to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!userDetails) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-r from-purple-50 to-indigo-100 p-6  flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-md">
          <p className="text-center text-red-500 mb-4">User not found.</p>
          <div className="text-center">
            <Link
              to="/domhost"
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Return to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-purple-50 to-indigo-100 p-6 flex justify-center items-center">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
          {userDetails.hostName}'s Details
        </h2>

        <div className="space-y-2">
          <p>
            <span className="font-semibold">Host Name:</span>{" "}
            {userDetails.hostName || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Dome Name:</span>{" "}
            {userDetails.domeName || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Password:</span>{" "}
            {userDetails.password ? "••••••••" : "N/A"}
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            to="/domhost"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DomUserDetails;
