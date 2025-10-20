import { useState } from "react";
import { categories, difficulties } from "../store/constants";
import { useQuizContext } from "../store/quiz-context/useQuizContext";
import { ActionTypes, type Question } from "../store/quiz-context/QuizTypes";
import { fetchQuestions } from "../service/apiService";

type QuizSetupType = { category: string; difficulty: string };

const QuizSetup = () => {
  const [quizSetup, setQuizSetup] = useState<QuizSetupType>({
    category: "",
    difficulty: "",
  });

  const handleFetchQuiz = () => {
    if (!quizSetup.category && !quizSetup.difficulty) {
      return;
    }

    const path = `questions?categories=${quizSetup.category}&difficulty=${quizSetup.difficulty}`;
    fetchQuestions<Question[]>(path)
      .then((value) =>
        dispatch({
          type: ActionTypes.SET_QUESTIONS,
          payload: value,
        })
      )
      .finally(() =>
        dispatch({
          type: ActionTypes.CHANGE_STATUS,
          payload: "active",
        })
      );
  };

  const { dispatch } = useQuizContext();

  return (
    <div className="flex justify-center space-x-3">
      {!quizSetup.category &&
        categories.map((category) => {
          const text = category.replaceAll("_", " ");
          return (
            <button
              key={category}
              className="capitalize border-2 p-1 cursor-pointer flex-wrap"
              onClick={() => {
                setQuizSetup((prev) => ({ ...prev, category }));
              }}
            >
              {text}
            </button>
          );
        })}
      {quizSetup.category &&
        difficulties.map((difficulty) => {
          return (
            <button
              key={difficulty}
              className="capitalize border-2 p-1 cursor-pointer flex-wrap"
              onClick={() => {
                setQuizSetup((prev) => ({ ...prev, difficulty }));
                handleFetchQuiz();
              }}
            >
              {difficulty}
            </button>
          );
        })}
    </div>
  );
};

export default QuizSetup;
