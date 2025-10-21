import {
  QTrackerActionTypes,
  type QTrackerActions,
  type QTrackerState,
} from "./QTrackerTypes";

export const initialTrackerState = {
  currentIndex: 0,
  correctAnswers: 0,
};

export const trackerReducer = (
  state: QTrackerState,
  action: QTrackerActions
) => {
  switch (action.type) {
    case QTrackerActionTypes.INCREASE_INDEX: {
      return { ...state, currentIndex: state.currentIndex + 1 };
    }
    case QTrackerActionTypes.INCREASE_CANSWERS: {
      return { ...state, correctAnswers: state.correctAnswers + 1 };
    }
    default:
      return state;
  }
};
