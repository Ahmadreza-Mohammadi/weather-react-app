function ErrorModal({ modalMessage, setShowModal }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center animate-fadeIn">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
        <p className="text-lg font-semibold mb-4">{modalMessage}</p>
        <button
          onClick={() => setShowModal(false)}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ErrorModal;
