import { useDialogContext } from "store/dialog-context/useDialogContext";

const Dialog = () => {
  const { message, isOpen, handleDialogClose, handleDialogConfirm } =
    useDialogContext();

  if (!isOpen) return null;

  return (
    <dialog
      open={isOpen}
      onClose={handleDialogClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleDialogClose();
        }
      }}
      className="w-full h-dvh absolute z-10 top-0 left-0 bg-black/50 bg-opacity-50 flex-c"
    >
      <div className="flex-c flex-col md:w-1/2 border rounded p-10 m-10 bg-white top-0 opacity-100">
        <p>{message}</p>
        <div className="flex-c p-2 m-2">
          <button
            onClick={handleDialogClose}
            className="btn-secondary button button-hover p-2 m-2"
          >
            Cancel
          </button>
          <button
            onClick={handleDialogConfirm}
            className="btn-primary button button-hover p-2 m-2"
          >
            Okay
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;
