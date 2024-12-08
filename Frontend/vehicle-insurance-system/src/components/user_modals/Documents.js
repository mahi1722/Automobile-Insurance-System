import React, { useState } from 'react';

// Mock existing documents (to simulate fetching from backend)
const mockDocuments = [
  { id: 1, name: 'Driving License', url: 'https://example.com/license.pdf' },
  { id: 2, name: 'Aadhar Card', url: 'https://example.com/aadhar.pdf' },
];

const Documents = () => {
  const [documents, setDocuments] = useState(mockDocuments);
  const [newDocument, setNewDocument] = useState({ name: '', url: '' });
  const [documentAdded, setDocumentAdded] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDocument({ ...newDocument, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new document to the list (replace this with an API call)
    const updatedDocuments = [
      ...documents,
      { id: documents.length + 1, ...newDocument },
    ];
    setDocuments(updatedDocuments);
    setNewDocument({ name: '', url: '' });
    setDocumentAdded(true);

    setTimeout(() => setDocumentAdded(false), 3000); // Reset success message
  };

  const handleDelete = (id) => {
    // Delete document from the list (replace this with an API call)
    const updatedDocuments = documents.filter((doc) => doc.id !== id);
    setDocuments(updatedDocuments);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Documents</h1>

      {/* Document List */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Uploaded Documents</h2>
        {documents.length === 0 ? (
          <p className="text-gray-600">No documents uploaded yet.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border border-gray-300 text-left">#</th>
                <th className="p-3 border border-gray-300 text-left">Name</th>
                <th className="p-3 border border-gray-300 text-left">URL</th>
                <th className="p-3 border border-gray-300 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr key={doc.id} className="hover:bg-gray-50">
                  <td className="p-3 border border-gray-300">{index + 1}</td>
                  <td className="p-3 border border-gray-300">{doc.name}</td>
                  <td className="p-3 border border-gray-300">
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Document
                    </a>
                  </td>
                  <td className="p-3 border border-gray-300">
                    <button
                      onClick={() => handleDelete(doc.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Add New Document */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Upload New Document</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Document Name */}
          <div>
            <label className="block font-semibold">Document Name</label>
            <input
              type="text"
              name="name"
              value={newDocument.name}
              onChange={handleInputChange}
              className="border px-4 py-2 rounded w-full"
              placeholder="e.g., Driving License"
              required
            />
          </div>

          {/* Document URL */}
          <div>
            <label className="block font-semibold">Document URL</label>
            <input
              type="url"
              name="url"
              value={newDocument.url}
              onChange={handleInputChange}
              className="border px-4 py-2 rounded w-full"
              placeholder="e.g., https://example.com/document.pdf"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Upload
          </button>
        </form>

        {/* Success Message */}
        {documentAdded && (
          <div className="mt-4 bg-green-100 text-green-700 p-4 rounded">
            Document uploaded successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default Documents;
