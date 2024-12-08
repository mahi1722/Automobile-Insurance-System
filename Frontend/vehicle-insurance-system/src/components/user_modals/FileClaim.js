import React, { useState } from 'react';

// Mock data for available policies (to be replaced with API call)
const mockPolicies = [
  { id: 'POL-001', vehicle: 'Toyota Camry', status: 'Active' },
  { id: 'POL-002', vehicle: 'Honda CB350', status: 'Pending' },
];

const FileClaim = () => {
  const [formData, setFormData] = useState({
    policyId: '',
    claimReason: '',
    claimAmount: '',
    incidentDate: '',
  });
  const [claimSubmitted, setClaimSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with an API call to submit the claim details
    console.log('Claim Submitted:', formData);
    setClaimSubmitted(true);
    setTimeout(() => setClaimSubmitted(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">File a Claim</h1>
      <form
        className="bg-white p-6 rounded-lg shadow-lg space-y-4"
        onSubmit={handleSubmit}
      >
        {/* Policy Selection */}
        <div>
          <label className="block font-semibold">Policy</label>
          <select
            name="policyId"
            value={formData.policyId}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            required
          >
            <option value="">Select a Policy</option>
            {mockPolicies.map((policy) => (
              <option key={policy.id} value={policy.id}>
                {policy.id} - {policy.vehicle} ({policy.status})
              </option>
            ))}
          </select>
        </div>

        {/* Claim Details */}
        <div>
          <label className="block font-semibold">Reason for Claim</label>
          <textarea
            name="claimReason"
            value={formData.claimReason}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label className="block font-semibold">Claim Amount (₹)</label>
          <input
            type="number"
            name="claimAmount"
            value={formData.claimAmount}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Incident Date</label>
          <input
            type="date"
            name="incidentDate"
            value={formData.incidentDate}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Claim
        </button>
      </form>

      {/* Success Message */}
      {claimSubmitted && (
        <div className="mt-4 bg-green-100 text-green-700 p-4 rounded">
          Claim has been filed successfully!
        </div>
      )}
    </div>
  );
};

export default FileClaim;
