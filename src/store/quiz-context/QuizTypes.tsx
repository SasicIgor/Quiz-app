//question type from API
export type Question = {
  category: string;
  correctAnswer: string;
  difficulty: string;
  id: string;
  incorrectAnswers: string[];
  inNiche: boolean;
  regions: string[];
  tags: string[];
  type: string;
  question: QuestionText;
};
type QuestionText = { text: string };

//inactive before we start the quiz, when user picks the quiz
//active while user plays the quiz
//finished when user finish the quiz before taking another one
export type QuizStatus = "inactive" | "active" | "finished";

//state part of the context
export type QuizState = {
  questions: Question[];
  status: QuizStatus;
};

//types of actions for a specific quiz
export enum ActionTypes {
  SET_QUESTIONS = "SET_QUESTIONS",
  CHANGE_STATUS = "CHANGE_STATUS",
}

export type SetQuestions = {
  type: ActionTypes.SET_QUESTIONS;
  payload: Question[];
};

export type ChangeStatus = {
  type: ActionTypes.CHANGE_STATUS;
  payload: QuizStatus;
};

export type QuizActions = SetQuestions | ChangeStatus;

export type QuizContextType = {
  state: QuizState
  dispatch: React.Dispatch<QuizActions>
}

