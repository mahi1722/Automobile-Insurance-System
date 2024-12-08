import React, { useState, useEffect } from 'react';

const User = () => {
  const [users, setUsers] = useState([]); // State to hold all users
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' }); // State for adding/updating a user
  const [editUserId, setEditUserId] = useState(null); // State for editing a user

  // Simulated fetching users data
  useEffect(() => {
    const fetchMockUsers = () => {
      const mockUsers = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'ROLE_ADMIN' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'ROLE_CUSTOMER' },
        { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', role: 'ROLE_CUSTOMER' },
      ];
      setUsers(mockUsers);
      setIsLoading(false);
    };

    fetchMockUsers();
  }, []);

  // Template for connecting to the backend
  /*
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);
  */

  // Handle adding or updating a user
  const handleSaveUser = () => {
    if (editUserId) {
      // Update user
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editUserId ? { ...user, ...newUser } : user
        )
      );
    } else {
      // Add new user
      const newId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
      setUsers((prevUsers) => [...prevUsers, { id: newId, ...newUser }]);
    }

    // Reset state
    setNewUser({ name: '', email: '', role: '' });
    setEditUserId(null);
  };

  // Handle editing a user
  const handleEditUser = (user) => {
    setEditUserId(user.id);
    setNewUser({ name: user.name, email: user.email, role: user.role });
  };

  // Handle deleting a user
  const handleDeleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>

      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* User List */}
          <h2 className="text-xl font-semibold mb-4">All Users</h2>
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Role</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.role}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-blue-500 text-white px-4 py-1 rounded mr-2 hover:bg-blue-600"
                      onClick={() => handleEditUser(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add/Edit User Form */}
          <h2 className="text-xl font-semibold mt-6 mb-4">
            {editUserId ? 'Edit User' : 'Add New User'}
          </h2>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="border px-4 py-2 rounded"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="border px-4 py-2 rounded"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <select
              className="border px-4 py-2 rounded"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              <option value="">Select Role</option>
              <option value="ROLE_ADMIN">Admin</option>
              <option value="ROLE_CUSTOMER">Customer</option>
            </select>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={handleSaveUser}
            >
              {editUserId ? 'Update User' : 'Add User'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
