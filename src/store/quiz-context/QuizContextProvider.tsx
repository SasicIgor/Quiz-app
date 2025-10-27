import { useReducer } from "react";

import { fetchQuestions } from "service/apiService";

import { QuizContext } from "./QuizContext";
import { initialState, quizReducer } from "./QuizReducer";
import { ActionTypes, type Question } from "./QuizTypes";
import { useQTrackerContext } from "store/quiz-tracker-context/useQTrackerContext";
import { QTrackerActionTypes } from "store/quiz-tracker-context/QTrackerTypes";

import { shuffleAnswers } from "utils/utils";

const QuizContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const {dispatch: qDispatch}=useQTrackerContext()

  const fetchQuiz = async () => {
    if (!state.category || !state.difficulty) {
      return;
    }
    dispatch({ type: ActionTypes.SET_LOADING });
    try {
      const path = `questions?categories=${state.category}&difficulty=${state.difficulty}`;
      const questions = await fetchQuestions<Question[]>(path);
      const formatedQuestions = shuffleAnswers(questions);

      dispatch({ type: ActionTypes.SET_QUESTIONS, payload: formatedQuestions });
      qDispatch({type: QTrackerActionTypes.RESET_STATE})
      dispatch({ type: ActionTypes.CHANGE_STATUS, payload: "active" });
    } catch (error) {
      console.log(error, "Failed to fetch questions");
      dispatch({ type: ActionTypes.CHANGE_STATUS, payload: "inactive" });
    }
    dispatch({ type: ActionTypes.SET_LOADING });
  };
  return (
    <QuizContext.Provider value={{ state, dispatch, fetchQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
