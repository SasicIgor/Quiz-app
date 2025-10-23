import { useEffect, useState } from "react";
import type { FormatedQuestion } from "store/quiz-context/QuizTypes";
import { useQuizContext } from "store/quiz-context/useQuizContext";
import { QTrackerActionTypes } from "store/quiz-tracker-context/QTrackerTypes";
import { useQTrackerContext } from "store/quiz-tracker-context/useQTrackerContext";

const QuizQuestion = () => {
  const [question, setQuestion] = useState<FormatedQuestion>();

  const { state } = useQuizContext();
  const questions = state.questions;

  const { state: TState, dispatch: TDispatch } = useQTrackerContext();
  const { currentIndex, userAnswer } = TState;

  useEffect(() => {
    TDispatch({
      type: QTrackerActionTypes.SET_USER_ANSWER,
      payload: "",
    });
    
    setQuestion(questions[currentIndex]);
  }, [currentIndex]);

  if (!question) {
    return;
  }

  const handleAnswerCheck = (answer: string) => {
    TDispatch({
      type: QTrackerActionTypes.SET_USER_ANSWER,
      payload: answer,
    });

    const isCorrect = answer === question.correctAnswer;
    if (isCorrect) {
      TDispatch({ type: QTrackerActionTypes.INCREASE_CANSWERS });
    }
  };

  const getButtonClass = (answer: string) => {
    if (!userAnswer) return "hover:bg-gray-300";
    if (answer === question.correctAnswer)
      return "bg-green-100 border-green-500";
    if (answer === userAnswer) return "bg-red-100 border-red-500";

    return "opacity-50";
  };

  return (
    <div>
      <h2>{question.question.text}</h2>
      <p>
        Number of questions: {currentIndex + 1}/{questions.length}
      </p>
      <div>
        {question.answers.map((option) => {
          return (
            <button
              key={option}
              onClick={() => handleAnswerCheck(option)}
              disabled={!!userAnswer}
              className={`cursor-pointer p-2 m-2 ${getButtonClass(option)}`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestion;
