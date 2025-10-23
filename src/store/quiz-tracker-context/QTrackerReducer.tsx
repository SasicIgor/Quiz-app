import {
  QTrackerActionTypes,
  type QTrackerActions,
  type QTrackerState,
} from "./QTrackerTypes";

export const initialTrackerState = {
  currentIndex: 0,
  correctAnswers: 0,
  userAnswer: "",
};

export const trackerReducer = (
  state: QTrackerState,
  action: QTrackerActions
) => {
  switch (action.type) {
    case QTrackerActionTypes.SET_USER_ANSWER: {
      return {
        ...state,
        userAnswer: action.payload,
      };
    }

    case QTrackerActionTypes.INCREASE_INDEX: {
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        userAnswer: "",
      };
    }
    case QTrackerActionTypes.INCREASE_CANSWERS: {
      return { ...state, correctAnswers: state.correctAnswers + 1 };
    }
    default:
      return state;
  }
};
