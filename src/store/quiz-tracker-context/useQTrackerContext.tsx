import { useContext } from "react";
import { QTrackerContext } from "./QTrackerContext";

export const useQTrackerContext = () => {
  const TContext = useContext(QTrackerContext);
  if (!TContext) throw new Error("Error with a context");
  return TContext;
};
