import type { FormatedQuestion, Question } from "store/quiz-context/QuizTypes";

//using Fisher-Yates algorithm to shuffle answers
//returning Question object + answers array
export const shuffleAnswers = (questions: Question[]): FormatedQuestion[] => {
  const formatedQuestions = questions.map((question) => {
    const answers = [...question.incorrectAnswers, question.correctAnswer];
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return { ...question, answers };
  });
  return formatedQuestions;
};
