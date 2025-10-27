import DialogProvider from "store/dialog-context/DialogContextProvider";
import QuizContextProvider from "store/quiz-context/QuizContextProvider";
import QTrackerContextProvider from "store/quiz-tracker-context/QTrackerContextProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <DialogProvider>
      <QTrackerContextProvider>
        <QuizContextProvider>{children}</QuizContextProvider>
      </QTrackerContextProvider>
    </DialogProvider>
  );
};

export default Providers;
