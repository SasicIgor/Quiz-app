import { TailSpin } from "react-loader-spinner";

import { categories, difficulties } from "store/constants";
import { useQuizContext } from "store/quiz-context/useQuizContext";
import { ActionTypes } from "store/quiz-context/QuizTypes";
import { useDialogContext } from "store/dialog-context/useDialogContext";

const QuizSetup = () => {
  const { state, dispatch, fetchQuiz } = useQuizContext();
  const { handleDialogOpen } = useDialogContext();

  const timerDuration = () => {
    switch (state.difficulty) {
      case "easy": {
        return "2 minutes";
      }
      case "medium": {
        return "1 and a half minute";
      }
      case "hard": {
        return "1 minute";
      }
    }
  };

  return (
    <>
      <div className="h-15 flex items-end">
        <h1 className="md:text-xl">
          Welcome to our new quiz to test your knowledge. Please choose one of
          the categories.
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-3 md:gap-3 pt-3">
        {categories.map((category) => {
          const text = category.replaceAll("_", " ");
          return (
            <button
              key={category}
              className={`button button-hover flex-c flex-col col-span-6 md:col-span-4 h-40 md:h-45 lg:h-55 bg-white ${
                state.category !== "" &&
                state.category !== category &&
                `opacity-60`
              } `}
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
              <p className="h-1/3 flex-c md:text-xl">{text}</p>
            </button>
          );
        })}
      </div>
      <div className="row-start-3 grid grid-cols-12 gap-3 md:gap-5">
        {state.category && (
          <>
            <h2 className="col-span-full pt-5 md:text-xl">
              Choose the difficulty as well, but be aware that it will affect
              questions and time
            </h2>
            {difficulties.map((difficulty) => {
              return (
                <button
                  key={difficulty}
                  className={`button button-hover p-2 col-span-4 md:col-span-2 row-start-2 bg-white ${
                    state.difficulty !== "" &&
                    state.difficulty !== difficulty &&
                    `opacity-60`
                  }`}
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
            className="button button-hover flex-c p-2 col-span-12 md:col-span-6 row-start-3 md:row-start-2 btn-primary"
            onClick={() => {
              handleDialogOpen({
                text: `Ready to start? You will have ${timerDuration()} to answer questions. Good luck!`,
                func: () => fetchQuiz(),
              });
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
