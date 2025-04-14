import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Domhost = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDomUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/domuser");
        setUsers(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching dom users:", error);
        setError("Failed to load DOM users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDomUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.hostName?.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-green-50 to-green-200 p-6">
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
        DOM User Dashboard 🚀
      </h2>

      <div className="mb-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search by Host Name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-indigo-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading DOM users...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">
              No DOM users found.
            </p>
          )}

          {filteredUsers.map((user) => (
            <Link
              key={user._id}
              to={`/domuserdetails/${user.id}`}
              className="block bg-white border border-purple-200 rounded-xl p-5 shadow-md transition-all duration-300 bg-gradient-to-br from-indigo-50 to-purple-100 hover:ring-2 hover:ring-indigo-400"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center text-lg font-bold shadow-inner">
                  {user.hostName && user.hostName.length > 0
                    ? user.hostName[0].toUpperCase()
                    : "?"}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {user.hostName || "Unknown"}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {user.domeName || "No dome name"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Domhost;
