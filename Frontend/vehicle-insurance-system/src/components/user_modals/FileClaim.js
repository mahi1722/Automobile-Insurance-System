import React, { useState } from 'react';
import axios from 'axios';

const FileClaim = () => {
  const [formData, setFormData] = useState({
    claimNumber: '',
    description: '',
    status: 'Pending',
  });
  const [claimSubmitted, setClaimSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/claims', formData);
      setMessage('Claim has been filed successfully!');
      setClaimSubmitted(true);
    } catch (error) {
      setMessage('Error filing claim: ' + error.message);
      console.error('Error submitting claim:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">File a Claim</h1>
      <form
        className="bg-white p-6 rounded-lg shadow-lg space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block font-semibold">Claim Number</label>
          <input
            type="text"
            name="claimNumber"
            value={formData.claimNumber}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Claim Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            required
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Claim
        </button>
      </form>

      {claimSubmitted && (
        <div className="mt-4 bg-green-100 text-green-700 p-4 rounded">
          {message}
        </div>
      )}
    </div>
  );
};

export default FileClaim;
