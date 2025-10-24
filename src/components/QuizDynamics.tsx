import { ActionTypes } from "store/quiz-context/QuizTypes";
import { useQuizContext } from "store/quiz-context/useQuizContext";
import { QTrackerActionTypes } from "store/quiz-tracker-context/QTrackerTypes";
import { useQTrackerContext } from "store/quiz-tracker-context/useQTrackerContext";

const QuizDynamics = () => {
  const { state: qState, dispatch, fetchQuiz } = useQuizContext();

  const { state: tState, dispatch: TDispatch } = useQTrackerContext();
  const { currentIndex, userAnswer } = tState;

  return (
    <div className="flex justify-between text-white">
      <button
        onClick={
          currentIndex + 1 === qState.questions.length
            ? () =>
                dispatch({
                  type: ActionTypes.CHANGE_STATUS,
                  payload: "finished",
                })
            : () => TDispatch({ type: QTrackerActionTypes.INCREASE_INDEX })
        }
        disabled={!userAnswer}
        className={`cursor-pointer rounded py-3 m-2 bg-blue-600 w-2/7 button-hover ${
          !userAnswer && "opacity-0"
        }`}
      >
        {currentIndex + 1 === qState.questions.length ? "Results" : "Next"}
      </button>
      <button
        className={`cursor-pointer rounded py-3 m-2 bg-blue-600 w-2/7 button-hover`}
        onClick={() => fetchQuiz()}
      >
        Retry
      </button>
      <button
        className={`cursor-pointer rounded py-3 m-2 bg-blue-600 w-2/7 button-hover`}
        onClick={() =>
          dispatch({ type: ActionTypes.CHANGE_STATUS, payload: "inactive" })
        }
      >
        Quit
      </button>
    </div>
  );
};

export default QuizDynamics;
