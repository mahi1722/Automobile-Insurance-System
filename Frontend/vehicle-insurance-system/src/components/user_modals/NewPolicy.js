import React, { useState } from 'react';

const NewPolicy = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vehicleMake: '',
    vehicleModel: '',
    registrationNumber: '',
    coverageType: '',
  });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8080/api/policy/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Policy Created:", data);
        setQuoteSubmitted(true);
        setTimeout(() => setQuoteSubmitted(false), 3000); // Reset after 3 seconds
      } else {
        // Handle errors with a fallback for empty response bodies
        const errorText = await response.text();
        try {
          const errorData = JSON.parse(errorText);
          console.error("Error:", errorData);
          alert(errorData.message || "Failed to submit policy. Please try again.");
        } catch (e) {
          console.error("Error:", errorText);
          alert("An unexpected error occurred. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the policy.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">New Policy</h1>
      <form
        className="bg-white p-6 rounded-lg shadow-lg space-y-4"
        onSubmit={handleSubmit}
      >
        {/* Personal Details */}
        <div>
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>

        {/* Vehicle Details */}
        <h2 className="text-xl font-bold mt-6">Vehicle Details</h2>
        <div>
          <label className="block font-semibold">Make</label>
          <input
            type="text"
            name="vehicleMake"
            value={formData.vehicleMake}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Model</label>
          <input
            type="text"
            name="vehicleModel"
            value={formData.vehicleModel}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Registration Number</label>
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Coverage Type</label>
          <select
            name="coverageType"
            value={formData.coverageType}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            required
          >
            <option value="">Select Coverage</option>
            <option value="Comprehensive">Comprehensive</option>
            <option value="Third-Party">Third-Party</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {/* Success Message */}
      {quoteSubmitted && (
        <div className="mt-4 bg-green-100 text-green-700 p-4 rounded">
          Quote has been filed successfully!
        </div>
      )}
    </div>
  );
};

export default NewPolicy;
