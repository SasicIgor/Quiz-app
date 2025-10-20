import { ActionTypes, type QuizActions, type QuizState } from "./QuizTypes";

export const initialState: QuizState = {
  questions: [],
  status: "inactive",
};

export function quizReducer(state: QuizState, action: QuizActions) {
  switch (action.type) {
    case ActionTypes.SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case ActionTypes.CHANGE_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
}
