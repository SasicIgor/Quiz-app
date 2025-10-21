import { useReducer } from "react";
import { QTrackerContext } from "./QTrackerContext";
import { initialTrackerState, trackerReducer } from "./QTrackerReducer";

const QTrackerContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(trackerReducer, initialTrackerState);
  return (
    <QTrackerContext.Provider value={{ state, dispatch }}>
      {children}
    </QTrackerContext.Provider>
  );
};

export default QTrackerContextProvider;
