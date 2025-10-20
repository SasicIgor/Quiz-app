import { useContext } from "react";
import { QuizContext } from "./QuizContext";

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error("Something went wrong with context.");
  return context;
};
