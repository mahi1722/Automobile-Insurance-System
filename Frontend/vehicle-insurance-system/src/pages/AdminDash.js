import React from 'react';
import { Link } from 'react-router-dom';

const AdminDash = () => {
  const mockStats = {
    totalUsers: 250,
    totalPolicies: 500,
    activePolicies: 350,
    pendingClaims: 2,
    totalRevenue: 5000000,
  };

  const mockRecentActivities = [
    { id: 1, type: 'Policy', description: 'New policy created for John Doe', time: '2 hours ago' },
    { id: 2, type: 'Claim', description: 'Claim #456 processed', time: '4 hours ago' },
    { id: 3, type: 'User', description: 'New user registration', time: '6 hours ago' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Dashboard Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-4xl font-bold text-blue-600">{mockStats.totalUsers}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Active Policies</h2>
          <p className="text-4xl font-bold text-green-600">{mockStats.activePolicies}</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Revenue</h2>
          <p className="text-4xl font-bold text-purple-600">₹{mockStats.totalRevenue.toLocaleString()}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            to="/manage-policies"
            className="bg-primary-500 text-white p-4 rounded-lg text-center hover:bg-primary-600 transition"
          >
            Manage Policies
          </Link>
          <Link
            to="/process-claims"
            className="bg-secondary-500 text-white p-4 rounded-lg text-center hover:bg-secondary-600 transition"
          >
            Process Claims
            <span className="ml-2 bg-red-500 text-white rounded-full px-2 text-sm">
              {mockStats.pendingClaims}
            </span>
          </Link>
          <Link
            to="/user-manage"
            className="bg-gray-500 text-white p-4 rounded-lg text-center hover:bg-gray-600 transition"
          >
            User Management
          </Link>
          <Link
            to="/generate-document"
            className="bg-green-500 text-white p-4 rounded-lg text-center hover:bg-green-600 transition"
          >
            Generate Documents
          </Link>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
          {mockRecentActivities.map((activity) => (
            <div
              key={activity.id}
              className="border-b py-3 last:border-b-0 hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold text-primary-600">
                    {activity.type}
                  </span>
                  <p className="text-gray-700">{activity.description}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Policy Statistics */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Policy Overview</h2>
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span>Total Policies</span>
              <span className="font-semibold">{mockStats.totalPolicies}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Active Policies</span>
              <span className="font-semibold text-green-600">
                {mockStats.activePolicies}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Pending Claims</span>
              <span className="font-semibold text-yellow-600">
                {mockStats.pendingClaims}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
