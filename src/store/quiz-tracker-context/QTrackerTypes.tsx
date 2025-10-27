export type QTrackerState = {
  currentIndex: number;
  correctAnswers: number;
  userAnswer: string;
};

export enum QTrackerActionTypes {
  INCREASE_INDEX = "CHANGE_INDEX",
  //CANSWERS=correct answers
  INCREASE_CANSWERS = "INCREASE_CORRECT_CANSWERS",
  SET_USER_ANSWER = "SET_USER_ANSWER",
  RESET_STATE = "RESET_STATE",
}

export type IncreaseIndex = {
  type: QTrackerActionTypes.INCREASE_INDEX;
};

export type IncreaseCAnswers = {
  type: QTrackerActionTypes.INCREASE_CANSWERS;
};

export type SetUserAnswer = {
  type: QTrackerActionTypes.SET_USER_ANSWER;
  payload: string;
};

export type ResetState = {
  type: QTrackerActionTypes.RESET_STATE;
};

export type QTrackerActions =
  | IncreaseCAnswers
  | IncreaseIndex
  | SetUserAnswer
  | ResetState;

export type QTrackerContextType = {
  state: QTrackerState;
  dispatch: React.Dispatch<QTrackerActions>;
};
