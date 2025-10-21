import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import QuizContextProvider from "./store/quiz-context/QuizContextProvider.tsx";
import QTrackerContextProvider from "./store/quiz-tracker-context/QTrackerContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QTrackerContextProvider>
      <QuizContextProvider>
        <App />
      </QuizContextProvider>
    </QTrackerContextProvider>
  </StrictMode>
);
