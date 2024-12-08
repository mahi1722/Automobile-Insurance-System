import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    user_id: '',
    name: '',
    email: 'john.doe@example.com', // Default email for fetching profile
    address: '',
    dob: '',
    aadhar_no: '',
    pan_no: '',
  });
  const [profileUpdated, setProfileUpdated] = useState(false);
  const [error, setError] = useState(null);

  // Load user data from backend
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/user/profile?email=${formData.email}`);
        setFormData(response.data);
      } catch (err) {
        setError('Failed to fetch user profile');
        console.error('Error fetching profile:', err);
      }
    };

    fetchUserProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:8080/api/user/profile', formData);
      setFormData(response.data);
      setProfileUpdated(true);
      setError(null);
      setTimeout(() => setProfileUpdated(false), 3000);
    } catch (err) {
      setError('Failed to update profile');
      console.error('Error updating profile:', err);
      setProfileUpdated(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>
      {error && (
        <div className="mb-4 bg-red-100 text-red-700 p-4 rounded">
          {error}
        </div>
      )}
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

        {/* Email (read-only) */}
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="border px-4 py-2 rounded w-full bg-gray-100"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block font-semibold">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
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
            name="dateOfBirth"
            value={formData.dateOfBirth}
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
            name="aadharNo"
            value={formData.aadharNo}
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
            name="panNo"
            value={formData.panNo}
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