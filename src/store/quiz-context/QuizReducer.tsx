import { ActionTypes, type QuizActions, type QuizState } from "./QuizTypes";

export const initialState: QuizState = {
  questions: [],
  status: "inactive",
  category: "",
  difficulty: "",
  isLoading: false,
};

export function quizReducer(state: QuizState, action: QuizActions) {
  switch (action.type) {
    case ActionTypes.SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case ActionTypes.CHANGE_STATUS:
      if (action.payload === "inactive") {
        return initialState;
      }
      return {
        ...state,
        status: action.payload,
      };
    case ActionTypes.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case ActionTypes.SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      };
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
}
