import { useDialogContext } from "store/dialog-context/useDialogContext";
import { ActionTypes } from "store/quiz-context/QuizTypes";
import { useQuizContext } from "store/quiz-context/useQuizContext";
import { QTrackerActionTypes } from "store/quiz-tracker-context/QTrackerTypes";
import { useQTrackerContext } from "store/quiz-tracker-context/useQTrackerContext";

const QuizDynamics = () => {
  const { state: qState, dispatch, fetchQuiz } = useQuizContext();

  const { handleDialogOpen } = useDialogContext();

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
        className={`button py-3 m-2 bg-blue-600 w-2/7 button-hover ${
          !userAnswer && "opacity-0"
        }`}
      >
        {currentIndex + 1 === qState.questions.length ? "Results" : "Next"}
      </button>
      <button
        className={`button py-3 m-2 bg-blue-600 w-2/7 button-hover`}
        onClick={() => {
          handleDialogOpen({
            text: "Retry? Really? You are not gonna have the same questions, are you sure?",
            func: () => fetchQuiz(),
          });
        }}
      >
        Retry
      </button>
      <button
        className={`button py-3 m-2 text-black w-2/7 button-hover`}
        onClick={() => {
          handleDialogOpen({
            text: "Quitting? Your mother raised you better!",
            func: () =>
              dispatch({
                type: ActionTypes.CHANGE_STATUS,
                payload: "inactive",
              }),
          });
        }}
      >
        Quit
      </button>
    </div>
  );
};

export default QuizDynamics;
