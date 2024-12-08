import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Mock data and services (you'll replace with actual backend calls)
const mockPolicies = [
  {
    id: "POL-001",
    vehicleType: "Car",
    status: "Active",
    premium: 5000,
    expiryDate: "2025-01-15",
    vehicleDetails: {
      make: "Toyota",
      model: "Camry",
      registrationNumber: "MH01AB1234",
    },
  },
  {
    id: "POL-002",
    vehicleType: "Motorcycle",
    status: "Pending",
    premium: 2500,
    expiryDate: "2024-12-30",
    vehicleDetails: {
      make: "Honda",
      model: "CB350",
      registrationNumber: "MH02CD5678",
    },
  },
];

const UserDash = () => {
  const [policies, setPolicies] = useState([]);
  const [dashboardStats, setDashboardStats] = useState({
    totalPolicies: 0,
    activePolicies: 0,
    pendingPolicies: 0,
  });

  useEffect(() => {
    // In real implementation, fetch from backend
    setPolicies(mockPolicies);

    // Calculate dashboard stats
    setDashboardStats({
      totalPolicies: mockPolicies.length,
      activePolicies: mockPolicies.filter((p) => p.status === "Active").length,
      pendingPolicies: mockPolicies.filter((p) => p.status === "Pending")
        .length,
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Customer Dashboard</h1>

      {/* Dashboard Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Policies</h2>
          <p className="text-4xl font-bold text-blue-600">
            {dashboardStats.totalPolicies}
          </p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Active Policies</h2>
          <p className="text-4xl font-bold text-green-600">
            {dashboardStats.activePolicies}
          </p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Pending Policies</h2>
          <p className="text-4xl font-bold text-yellow-600">
            {dashboardStats.pendingPolicies}
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            to="/new-policy"
            className="bg-primary-500 text-white p-4 rounded-lg text-center hover:bg-primary-600 transition"
          >
            New Policy
          </Link>
          <Link
            to="/file-claim"
            className="bg-secondary-500 text-white p-4 rounded-lg text-center hover:bg-secondary-600 transition"
          >
            File Claim
          </Link>
          <Link
            to="/edit-profile"
            className="bg-gray-500 text-white p-4 rounded-lg text-center hover:bg-gray-600 transition"
          >
            Edit Profile
          </Link>
          <Link
            to="/documents"
            className="bg-green-500 text-white p-4 rounded-lg text-center hover:bg-green-600 transition"
          >
            Documents
          </Link>
        </div>
      </div>

      {/* Recent Policies */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">My Policies</h2>
        {policies.length === 0 ? (
          <p className="text-gray-600">No policies found</p>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Policy ID</th>
                <th className="p-3 text-left">Vehicle</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Premium</th>
                <th className="p-3 text-left">Expiry Date</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {policies.map((policy) => (
                <tr key={policy.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{policy.id}</td>
                  <td className="p-3">
                    {policy.vehicleDetails.make} {policy.vehicleDetails.model}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        policy.status === "Active"
                          ? "bg-green-200 text-green-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {policy.status}
                    </span>
                  </td>
                  <td className="p-3">₹{policy.premium}</td>
                  <td className="p-3">{policy.expiryDate}</td>
                  <td className="p-3">
                    <Link
                      to={`/policy-details/${policy.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserDash;
