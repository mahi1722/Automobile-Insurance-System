import React, { useState, useEffect } from 'react';

const mockClaimDetails = {
  claimId: 'CLM12345',
  user: 'John Doe',
  policy: 'Comprehensive Cover',
  claimAmount: '₹50,000',
  status: 'APPROVED',
  dateFiled: '2024-12-01',
  description: 'Claim for accidental damage to the vehicle.',
  contact: 'john.doe@example.com',
};

const GenerateDocument = () => {
  const [claimDetails, setClaimDetails] = useState({});

  useEffect(() => {
    // Replace mockClaimDetails with API call to fetch claim details
    setClaimDetails(mockClaimDetails);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Generate Document</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Claim Details</h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-medium">Claim ID</label>
            <p className="border rounded-lg px-4 py-2 bg-gray-50">{claimDetails.claimId}</p>
          </div>
          <div>
            <label className="block font-medium">User</label>
            <p className="border rounded-lg px-4 py-2 bg-gray-50">{claimDetails.user}</p>
          </div>
          <div>
            <label className="block font-medium">Policy</label>
            <p className="border rounded-lg px-4 py-2 bg-gray-50">{claimDetails.policy}</p>
          </div>
          <div>
            <label className="block font-medium">Claim Amount</label>
            <p className="border rounded-lg px-4 py-2 bg-gray-50">{claimDetails.claimAmount}</p>
          </div>
          <div>
            <label className="block font-medium">Status</label>
            <p className="border rounded-lg px-4 py-2 bg-gray-50">{claimDetails.status}</p>
          </div>
          <div>
            <label className="block font-medium">Date Filed</label>
            <p className="border rounded-lg px-4 py-2 bg-gray-50">{claimDetails.dateFiled}</p>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium">Description</label>
          <p className="border rounded-lg px-4 py-2 bg-gray-50">{claimDetails.description}</p>
        </div>

        <div className="mb-4">
          <label className="block font-medium">Contact</label>
          <p className="border rounded-lg px-4 py-2 bg-gray-50">{claimDetails.contact}</p>
        </div>

        <button
          onClick={handlePrint}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mt-4"
        >
          Print Document
        </button>
      </div>
    </div>
  );
};

export default GenerateDocument;
