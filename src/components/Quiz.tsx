import { useQTrackerContext } from "../store/quiz-tracker-context/useQTrackerContext";
import { useQuizContext } from "../store/quiz-context/useQuizContext";
import { useEffect, useState } from "react";
import {
  ActionTypes,
  type FormatedQuestion,
} from "../store/quiz-context/QuizTypes";
import { QTrackerActionTypes } from "../store/quiz-tracker-context/QTrackerTypes";

const Quiz = () => {
  const [question, setQuestion] = useState<FormatedQuestion>();
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const { state, dispatch } = useQuizContext();
  const questions = state.questions;

  const { state: TState, dispatch: TDispatch } = useQTrackerContext();
  const { currentIndex } = TState;

  useEffect(() => {
    setSelectedAnswer("");
    setQuestion(questions[currentIndex]);
  }, [currentIndex]);

  if (!question) {
    return;
  }

  const handleAnswerCheck = (answer: string) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === question.correctAnswer;
    if (isCorrect) {
      TDispatch({ type: QTrackerActionTypes.INCREASE_CANSWERS });
    }
  };

  const handleResults = () => {
    dispatch({ type: ActionTypes.CHANGE_STATUS, payload: "finished" });
  };

  const getButtonClass = (answer: string) => {
    if (!selectedAnswer) return "hover:bg-gray-300";
    if (answer === question.correctAnswer)
      return "bg-green-100 border-green-500";
    if (answer === selectedAnswer) return "bg-red-100 border-red-500";

    return "opacity-50";
  };

  return (
    <div>
      <h2>{question.question.text}</h2>
      <div>
        {question.answers.map((option) => {
          return (
            <button
              key={option}
              onClick={() => handleAnswerCheck(option)}
              disabled={!!selectedAnswer}
              className={`cursor-pointer p-2 m-2 ${getButtonClass(option)}`}
            >
              {option}
            </button>
          );
        })}
      </div>
      <div>
        <p>
          Number of questions: {currentIndex + 1}/{questions.length}
        </p>
        <button
          onClick={
            currentIndex + 1 === questions.length
              ? handleResults
              : () => TDispatch({ type: QTrackerActionTypes.INCREASE_INDEX })
          }
          disabled={!selectedAnswer}
          className={`cursor-pointer p-2 m-2 bg-blue-600 ${
            !selectedAnswer && "opacity-50"
          }`}
        >
          {currentIndex + 1 === questions.length ? "Results" : "Next question"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
