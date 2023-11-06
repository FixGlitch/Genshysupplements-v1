const ConfirmationDialog = ({ action, onConfirm, onCancel }) => {
    const handleConfirm = () => {
      onConfirm();
    };
  
    const handleCancel = () => {
      onCancel();
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-black p-4 rounded-none shadow-md">
          <p>are you sure you want to {action}?</p>
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleConfirm}
              className="bg-green-500 text-white px-4 py-2 rounded-none mr-2"
            >
              Confirm
            </button>
            <button
              onClick={handleCancel}
              className="bg-red-500 text-white px-4 py-2 rounded-none"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConfirmationDialog;