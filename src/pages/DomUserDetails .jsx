import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const DomUserDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/domuser/${id}`);
        setUserDetails(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading user details...</p>;
  }

  if (!userDetails) {
    return <p className="text-center mt-10 text-red-500">User not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-indigo-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">
          {userDetails.hostName}'s Details
        </h2>

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
          {userDetails.password || "N/A"}
        </p>

        <Link
          to="/domhost"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default DomUserDetails;
