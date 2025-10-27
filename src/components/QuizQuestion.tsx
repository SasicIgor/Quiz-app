import { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";

import type { FormatedQuestion } from "store/quiz-context/QuizTypes";
import { useQuizContext } from "store/quiz-context/useQuizContext";
import { QTrackerActionTypes } from "store/quiz-tracker-context/QTrackerTypes";
import { useQTrackerContext } from "store/quiz-tracker-context/useQTrackerContext";

import Timer from "./Timer";

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
  }, [currentIndex, questions]);

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
    if (!userAnswer) return "hover:bg-gray-300 rounded";
    if (answer === question.correctAnswer)
      return "bg-green-100 border rounded border-green-500";
    if (answer === userAnswer)
      return "bg-red-100 border rounded border-red-500";

    return "border rounded opacity-50";
  };

  return (
    <div className="flex-c flex-col border rounded mt-2 md:mt-20 py-10 px-2 relative bg-white">
      <p className="absolute top-2 left-3">
        Q: {currentIndex + 1}/{questions.length}
      </p>
      <p className="absolute top-2 right-3">
        <Timer />
      </p>
      <h2 className="w-full md:w-1/3 font-semibold relative text-xl min-h-[110px]">
        {question.question.text}
      </h2>

      <div className="flex-c flex-col w-full md:w-1/3">
        {question.answers.map((option) => {
          const icon =
            question.correctAnswer === option ? (
              <FaRegCheckCircle className="text-green-600" />
            ) : (
              <TbXboxXFilled className="text-red-600" />
            );
          return (
            <button
              key={option}
              onClick={() => handleAnswerCheck(option)}
              disabled={!!userAnswer}
              className={`cursor-pointer border rounded p-5 m-3 w-full text-left flex justify-between items-center bg-white ${getButtonClass(
                option
              )}`}
            >
              <span>{option}</span>
              {/* if user answer, display correct answer icon always and in case user answered incorrecty */}
              {!!userAnswer &&
                (question.correctAnswer === option || option === userAnswer) &&
                icon}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestion;
