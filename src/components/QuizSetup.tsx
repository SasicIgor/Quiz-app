import { categories, difficulties } from "../store/constants";
import { useQuizContext } from "../store/quiz-context/useQuizContext";
import { ActionTypes } from "../store/quiz-context/QuizTypes";
import { TailSpin } from "react-loader-spinner";

const QuizSetup = () => {
  const { state, dispatch, fetchQuiz } = useQuizContext();

  return (
    <>
      <div className="h-20 flex-c">
        <h1>
          Welcome to our new quiz to test your knowledge in varius categories.
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-3 md:gap-5">
        {categories.map((category) => {
          const text = category.replaceAll("_", " ");
          return (
            <button
              key={category}
              className={`capitalize rounded border-1 cursor-pointer col-span-6 md:col-span-4 h-40 md:h-45 lg:h-55 flex-c flex-col ${
                state.category !== "" &&
                state.category !== category &&
                `opacity-50`
              } button-hover`}
              onClick={() => {
                dispatch({ type: ActionTypes.SET_CATEGORY, payload: category });
              }}
            >
              <p className="h-2/3 w-full">
                <img
                  src={`${category}.jpg`}
                  className="w-full h-full object-cover"
                />
              </p>
              <p className="h-1/3 flex-c">{text}</p>
            </button>
          );
        })}
      </div>
      <div className="row-start-3 grid grid-cols-12 gap-3 md:gap-5">
        {state.category && (
          <>
            <h2 className="col-span-full">Choose difficulty</h2>
            {difficulties.map((difficulty) => {
              return (
                <button
                  key={difficulty}
                  className={`capitalize rounded border-1 p-2 cursor-pointer col-span-2 row-start-2 ${
                    state.difficulty !== "" &&
                    state.difficulty !== difficulty &&
                    `opacity-50  bg-gray-200`
                  } button-hover`}
                  onClick={() => {
                    dispatch({
                      type: ActionTypes.SET_DIFFICULTY,
                      payload: difficulty,
                    });
                  }}
                >
                  {difficulty}
                </button>
              );
            })}
          </>
        )}
        {state.category && state.difficulty && (
          <button
            className="capitalize rounded p-2 cursor-pointer col-span-6 row-start-2 bg-blue-400 flex-c button-hover"
            onClick={() => {
              fetchQuiz();
            }}
            disabled={state.isLoading}
          >
            {state.isLoading ? (
              <>
                <TailSpin height={24} width={24} color="white" />
              </>
            ) : (
              "Start Quiz"
            )}
          </button>
        )}
      </div>
    </>
  );
};

export default QuizSetup;
