import type { categories, difficulties } from "store/constants";

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

type QuestionAnswers = { answers: string[] };

//question with shuffled answers
export type FormatedQuestion = Question & QuestionAnswers;

//inactive before we start the quiz, when user picks the quiz
//active while user plays the quiz
//finished when user finish the quiz before taking another one
export type QuizStatus = "inactive" | "active" | "finished";
export type Category = typeof categories[number];
export type Difficulty = typeof difficulties[number];

//state part of the context
export type QuizState = {
  questions: FormatedQuestion[];
  status: QuizStatus;
  category: Category | "";
  difficulty: Difficulty | "";
  isLoading: boolean
};

//types of actions for a specific quiz
export enum ActionTypes {
  SET_QUESTIONS = "SET_QUESTIONS",
  CHANGE_STATUS = "CHANGE_STATUS",
  SET_CATEGORY = "SET_CATEGORY",
  SET_DIFFICULTY = "SET_DIFFICULTY",
  SET_LOADING = "SET_LOADING"
}

export type SetQuestions = {
  type: ActionTypes.SET_QUESTIONS;
  payload: FormatedQuestion[];
};

export type ChangeStatus = {
  type: ActionTypes.CHANGE_STATUS;
  payload: QuizStatus;
};
export type SetCategory = {
  type: ActionTypes.SET_CATEGORY;
  payload: Category;
};

export type SetDifficulty = {
  type: ActionTypes.SET_DIFFICULTY;
  payload: Difficulty;
};

export type SetLoading = {
  type: ActionTypes.SET_LOADING
}

export type QuizActions = SetQuestions | ChangeStatus | SetCategory | SetDifficulty | SetLoading;

export type QuizContextType = {
  state: QuizState;
  dispatch: React.Dispatch<QuizActions>;
  fetchQuiz: () => Promise<void>
};
