import React, { useState } from 'react';
import { X } from 'lucide-react';

const FileClaim = () => {
  const [formData, setFormData] = useState({
    claimNumber: '',
    description: '',
    claimAmount: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open modal on successful submission
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form after closing modal
    setFormData({
      claimNumber: '',
      description: '',
      claimAmount: '',
    });
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
          <label className="block font-semibold">Claim Amount (₹)</label>
          <input
            type="number"
            name="claimAmount"
            value={formData.claimAmount}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            min="0"
            step="0.01"
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Claim Filed Successfully!</h2>
              <p className="mb-4">Your claim has been submitted with the following details:</p>
              <div className="bg-gray-100 p-4 rounded-md text-left">
                <p><strong>Claim Number:</strong> {formData.claimNumber}</p>
                <p><strong>Description:</strong> {formData.description}</p>
                <p><strong>Claim Amount:</strong> ₹{parseFloat(formData.claimAmount).toFixed(2)}</p>
              </div>
              <button 
                onClick={closeModal}
                className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileClaim;