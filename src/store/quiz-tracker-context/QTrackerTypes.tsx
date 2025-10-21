//{currentIndex:number, correctAnswers:Number}

export type QTrackerState = {
  currentIndex: number;
  correctAnswers: number;
};

export enum QTrackerActionTypes {
  INCREASE_INDEX = "CHANGE_INDEX",
  //CANSWERS=correct answers
  INCREASE_CANSWERS = "INCREASE_CORRECT_CANSWERS",
}

export type IncreaseIndex = {
  type: QTrackerActionTypes.INCREASE_INDEX;
};

export type IncreaseCAnswers = {
  type: QTrackerActionTypes.INCREASE_CANSWERS;
};

export type QTrackerActions = IncreaseCAnswers | IncreaseIndex;

export type QTrackerContextType = {
  state: QTrackerState;
  dispatch: React.Dispatch<QTrackerActions>;
};
