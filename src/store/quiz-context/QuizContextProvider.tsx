import { useReducer } from "react";
import { QuizContext } from "./QuizContext";
import { initialState, quizReducer } from "./QuizReducer";

const QuizContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
