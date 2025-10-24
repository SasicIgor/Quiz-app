import { useState } from "react";
import { categories, difficulties } from "../store/constants";
import { useQuizContext } from "../store/quiz-context/useQuizContext";
import { ActionTypes, type Question } from "../store/quiz-context/QuizTypes";
import { fetchQuestions } from "../service/apiService";
import { shuffleAnswers } from "../utils/utils";
import { TailSpin } from "react-loader-spinner";

type QuizSetupType = { category: string; difficulty: string };

const QuizSetup = () => {
  const [quizSetup, setQuizSetup] = useState<QuizSetupType>({
    category: "",
    difficulty: "",
  });
  const [isFetching, setIsFetching] = useState(false);

  const handleFetchQuiz = () => {
    if (!quizSetup.category && !quizSetup.difficulty) {
      return;
    }
    setIsFetching(!isFetching);

    const path = `questions?categories=${quizSetup.category}&difficulty=${quizSetup.difficulty}`;
    fetchQuestions<Question[]>(path)
      .then((value) => {
        const formatedQuestions = shuffleAnswers(value);
        dispatch({
          type: ActionTypes.SET_QUESTIONS,
          payload: formatedQuestions,
        });
      })
      .finally(() => {
        setIsFetching(!isFetching);
        dispatch({
          type: ActionTypes.CHANGE_STATUS,
          payload: "active",
        });
      });
  };

  const { dispatch } = useQuizContext();

  return (
    <div className="grid grid-cols-[minmax(0,auto)_minmax(0,1200px)_minmax(0,auto)] template gap-5">
      <div className="col-start-2 h-20 flex justify-center items-center">
        <h1>
          Welcome to our new quiz to test your knowledge in varius categories.
        </h1>
      </div>
      <div className="col-start-2 grid grid-cols-12 gap-3 md:gap-5">
        {categories.map((category) => {
          const text = category.replaceAll("_", " ");
          return (
            <button
              key={category}
              className={`capitalize rounded border-1 cursor-pointer col-span-6 md:col-span-4 h-40 md:h-45 lg:h-55 flex-c flex-col ${
                quizSetup.category !== "" &&
                quizSetup.category !== category &&
                `opacity-50`
              } button-hover`}
              onClick={() => {
                setQuizSetup((prev) => ({ ...prev, category }));
              }}
            >
              <p className="h-2/3 w-full">
                <img
                  src={`${category}.jpg`}
                  className="w-full h-full object-cover"
                />
              </p>
              <p className="w-full h-1/3 flex-c">{text}</p>
            </button>
          );
        })}
      </div>
      <div className="row-start-3 col-start-2 grid grid-cols-12 gap-3">
        {quizSetup.category && (
          <>
            <h2 className="col-span-full">Choose difficulty</h2>
            {difficulties.map((difficulty) => {
              return (
                <button
                  key={difficulty}
                  className={`capitalize rounded border-1 p-2 cursor-pointer col-span-2 row-start-2 ${
                    quizSetup.difficulty !== "" &&
                    quizSetup.difficulty !== difficulty &&
                    `opacity-50  bg-gray-200`
                  } button-hover`}
                  onClick={() => {
                    setQuizSetup((prev) => ({ ...prev, difficulty }));
                  }}
                >
                  {difficulty}
                </button>
              );
            })}
          </>
        )}
        {quizSetup.category && quizSetup.difficulty && (
          <button
            className="capitalize rounded p-2 cursor-pointer col-span-6 row-start-2 bg-blue-400 flex-c button-hover"
            onClick={() => {
              handleFetchQuiz();
            }}
            disabled={isFetching}
          >
            {isFetching ? (
              <>
                <TailSpin height={24} width={24} color="white" />
              </>
            ) : (
              "Start Quiz"
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizSetup;
