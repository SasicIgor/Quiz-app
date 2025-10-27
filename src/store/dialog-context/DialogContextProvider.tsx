import { useState } from "react";
import { DialogContext } from "./DialogContext";
import type { DialogButtonAction, HandleDialogType } from "./DialogTypes";

const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState<null | string>(null);
  const [action, setAction] = useState<undefined | DialogButtonAction>(
    undefined
  );
  //update states when user opens the dialog
  const handleDialogOpen = ({ text, func }: HandleDialogType) => {
    setMessage(text);
    setAction(() => func);
    toggleDialog();
  };

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };
  //clear the states when user close the dialog
  const handleDialogClose = () => {
    toggleDialog();
    setMessage(null);
    setAction(undefined);
  };

  const handleDialogConfirm = () => {
    if (action) {
      action();
    }
    handleDialogClose();
  };
  
  return (
    <DialogContext.Provider
      value={{
        isOpen,
        toggleDialog,
        message,
        handleDialogOpen,
        action,
        handleDialogClose,
        handleDialogConfirm,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};
export default DialogProvider;
