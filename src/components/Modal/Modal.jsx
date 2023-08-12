import React, { useState } from "react";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [supplier, setSupplier] = useState("");

  if (!isOpen) {
    return null;
  }

  const handleSubmit = () => {
    const newItem = {
      imageUrl,
      name,
      description,
      price,
      supplier,
    };
    onSubmit(newItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Add New Item</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Add similar fields for description, price, and supplier */}
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
