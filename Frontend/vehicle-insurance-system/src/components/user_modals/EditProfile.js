import React, { useState, useEffect } from 'react';

// Mock user data (to be replaced with data fetched from the backend)
const mockUserData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  dob: '1990-01-01',
  aadhar: '1234-5678-9101',
  pan: 'ABCDE1234F',
};

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    aadhar: '',
    pan: '',
  });
  const [profileUpdated, setProfileUpdated] = useState(false);

  // Load user data (simulate fetch)
  useEffect(() => {
    // Simulate API call to fetch user details
    setFormData(mockUserData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with an API call to update user profile
    console.log('Profile Updated:', formData);
    setProfileUpdated(true);
    setTimeout(() => setProfileUpdated(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>
      <form
        className="bg-white p-6 rounded-lg shadow-lg space-y-4"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div>
          <label className="block font-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>

        {/* Email */}
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

        {/* Date of Birth */}
        <div>
          <label className="block font-semibold">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>

        {/* Aadhar Number */}
        <div>
          <label className="block font-semibold">Aadhar Number</label>
          <input
            type="text"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>

        {/* PAN Number */}
        <div>
          <label className="block font-semibold">PAN Number</label>
          <input
            type="text"
            name="pan"
            value={formData.pan}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Profile
        </button>
      </form>

      {/* Success Message */}
      {profileUpdated && (
        <div className="mt-4 bg-green-100 text-green-700 p-4 rounded">
          Profile updated successfully!
        </div>
      )}
    </div>
  );
};

export default EditProfile;
