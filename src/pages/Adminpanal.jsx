import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-green-50 to-green-200 p-6">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
        User Directory
      </h2>

      <div className="mb-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-indigo-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No users found.
          </p>
        )}

        {filteredUsers.map((user) => (
          <Link
            key={user.id}
            to={`/details/${user.id}`}
            className="block bg-white border border-indigo-100 rounded-xl p-5 shadow-md transition-all duration-300 bg-gradient-to-tr from-blue-50 to-blue-200 hover:ring-2 hover:ring-indigo-400"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center text-lg font-bold shadow-inner">
                {user.firstName[0]}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {user.firstName} {user.lastName}
                </h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserList;
