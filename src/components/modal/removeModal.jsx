import React from 'react';

function RemoveModal({ show, onClose, onConfirm, cityName }) {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-md">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-xl font-bold mb-4">Delete City</h2>
        <p>Are you sure you want to remove {cityName} from your favorites?</p>
        <div className="mt-6 flex justify-end gap-4">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-red-700"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="bg-blue-300 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default RemoveModal;
