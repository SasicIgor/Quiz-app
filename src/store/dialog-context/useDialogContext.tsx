import { useContext } from "react";
import { DialogContext } from "./DialogContext";

export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) throw new Error("Something went wrong with context.");
  return context;
};
