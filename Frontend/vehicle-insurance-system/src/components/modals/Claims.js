import React, { useState, useEffect } from 'react';

const mockClaims = [
  { id: 1, user: 'John Doe', policy: 'Comprehensive Cover', status: 'INITIATED' },
  { id: 2, user: 'Jane Smith', policy: 'Third-Party Liability', status: 'INITIATED' },
  { id: 3, user: 'Mark Lee', policy: 'Own Damage Cover', status: 'APPROVED' },
];

const statusOptions = ['INITIATED', 'UNDER_REVIEW', 'APPROVED', 'REJECTED', 'SETTLED'];

const Claims = () => {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    // Replace mockClaims with an API call to fetch claims
    setClaims(mockClaims);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    // Update the status locally (replace this logic with an API call)
    const updatedClaims = claims.map((claim) =>
      claim.id === id ? { ...claim, status: newStatus } : claim
    );
    setClaims(updatedClaims);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Process Claims</h1>

      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">User</th>
            <th className="px-4 py-2">Policy</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim) => (
            <tr key={claim.id}>
              <td className="px-4 py-2">{claim.user}</td>
              <td className="px-4 py-2">{claim.policy}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded ${
                    claim.status === 'APPROVED'
                      ? 'bg-green-200 text-green-700'
                      : claim.status === 'REJECTED'
                      ? 'bg-red-200 text-red-700'
                      : claim.status === 'SETTLED'
                      ? 'bg-purple-200 text-purple-700'
                      : 'bg-yellow-200 text-yellow-700'
                  }`}
                >
                  {claim.status}
                </span>
              </td>
              <td className="px-4 py-2">
                <select
                  value={claim.status}
                  onChange={(e) => handleStatusChange(claim.id, e.target.value)}
                  className="border rounded-lg px-2 py-1"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Claims;
