import { ActionTypes } from "store/quiz-context/QuizTypes";
import { useQuizContext } from "store/quiz-context/useQuizContext";
import { QTrackerActionTypes } from "store/quiz-tracker-context/QTrackerTypes";
import { useQTrackerContext } from "store/quiz-tracker-context/useQTrackerContext";

const QuizDynamics = () => {
  const { state: qState, dispatch } = useQuizContext();

  const { state: tState, dispatch: TDispatch } = useQTrackerContext();
  const { currentIndex, userAnswer } = tState;

  return (
    <div>
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
        className={`cursor-pointer p-2 m-2 bg-blue-600 ${
          !userAnswer && "opacity-50"
        }`}
      >
        {currentIndex + 1 === qState.questions.length
          ? "Results"
          : "Next question"}
      </button>
    </div>
  );
};

export default QuizDynamics;
