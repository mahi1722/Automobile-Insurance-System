import React, { useState, useEffect } from 'react';

const mockPolicies = [
  { id: 1, name: 'Comprehensive Cover', premium: 1500, term: '12 months' },
  { id: 2, name: 'Third-Party Liability', premium: 1000, term: '6 months' },
  { id: 3, name: 'Own Damage Cover', premium: 2000, term: '12 months' },
];

const Policies = () => {
  const [policies, setPolicies] = useState([]);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Replace mockPolicies with an API call to fetch policies
    setPolicies(mockPolicies);
  }, []);

  const handleEdit = (policy) => {
    setSelectedPolicy(policy);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this policy?')) {
      setPolicies(policies.filter((policy) => policy.id !== id));
    }
  };

  const handleSave = () => {
    // Save the edited policy (use API call to update in backend)
    const updatedPolicies = policies.map((policy) =>
      policy.id === selectedPolicy.id ? selectedPolicy : policy
    );
    setPolicies(updatedPolicies);
    setShowModal(false);
    setSelectedPolicy(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Manage Policies</h1>

      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Policy Name</th>
            <th className="px-4 py-2">Premium</th>
            <th className="px-4 py-2">Term</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {policies.map((policy) => (
            <tr key={policy.id}>
              <td className="px-4 py-2">{policy.name}</td>
              <td className="px-4 py-2">₹{policy.premium}</td>
              <td className="px-4 py-2">{policy.term}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 mr-2"
                  onClick={() => handleEdit(policy)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDelete(policy.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Policy</h2>
            <label className="block mb-2 font-medium">Policy Name</label>
            <input
              type="text"
              value={selectedPolicy.name}
              onChange={(e) =>
                setSelectedPolicy({ ...selectedPolicy, name: e.target.value })
              }
              className="border rounded-lg px-4 py-2 w-full mb-4"
            />
            <label className="block mb-2 font-medium">Premium</label>
            <input
              type="number"
              value={selectedPolicy.premium}
              onChange={(e) =>
                setSelectedPolicy({
                  ...selectedPolicy,
                  premium: e.target.value,
                })
              }
              className="border rounded-lg px-4 py-2 w-full mb-4"
            />
            <label className="block mb-2 font-medium">Term</label>
            <input
              type="text"
              value={selectedPolicy.term}
              onChange={(e) =>
                setSelectedPolicy({ ...selectedPolicy, term: e.target.value })
              }
              className="border rounded-lg px-4 py-2 w-full mb-4"
            />
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Policies;
