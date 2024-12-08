import React from 'react';
import { useParams, Link } from 'react-router-dom';

const mockPolicies = [
  {
    id: 'POL-001',
    vehicleType: 'Car',
    status: 'Active',
    premium: 5000,
    expiryDate: '2025-01-15',
    vehicleDetails: {
      make: 'Toyota',
      model: 'Camry',
      registrationNumber: 'MH01AB1234'
    }
  },
  {
    id: 'POL-002',
    vehicleType: 'Motorcycle',
    status: 'Pending',
    premium: 2500,
    expiryDate: '2024-12-30',
    vehicleDetails: {
      make: 'Honda',
      model: 'CB350',
      registrationNumber: 'MH02CD5678'
    }
  }
];

const PolicyDetails = () => {
  const { id } = useParams();

  // Find the policy by ID (replace with API call in production)
  const policy = mockPolicies.find((p) => p.id === id);

  if (!policy) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Policy Not Found</h1>
        <p className="mb-6">The requested policy does not exist or has been removed.</p>
        <Link
          to="/customer-dashboard"
          className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition"
        >
          Return to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Policy Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Policy ID: {policy.id}</h2>
        <p><strong>Vehicle Type:</strong> {policy.vehicleType}</p>
        <p><strong>Status:</strong> {policy.status}</p>
        <p><strong>Premium:</strong> ₹{policy.premium}</p>
        <p><strong>Expiry Date:</strong> {policy.expiryDate}</p>
        <h3 className="text-lg font-semibold mt-4">Vehicle Details:</h3>
        <p><strong>Make:</strong> {policy.vehicleDetails.make}</p>
        <p><strong>Model:</strong> {policy.vehicleDetails.model}</p>
        <p><strong>Registration Number:</strong> {policy.vehicleDetails.registrationNumber}</p>
        <div className="mt-6">
          <Link
            to="/customer-dashboard"
            className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PolicyDetails;
