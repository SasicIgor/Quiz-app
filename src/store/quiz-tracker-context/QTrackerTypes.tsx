//{currentIndex:number, correctAnswers:Number}

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

export type QTrackerActions = IncreaseCAnswers | IncreaseIndex | SetUserAnswer;

export type QTrackerContextType = {
  state: QTrackerState;
  dispatch: React.Dispatch<QTrackerActions>;
};
