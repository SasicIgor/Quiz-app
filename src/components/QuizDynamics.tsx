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
    <div className="flex justify-between">
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
        className={`button py-3 m-2 btn-primary w-2/7 button-hover ${
          !userAnswer && "opacity-0"
        }`}
      >
        {currentIndex + 1 === qState.questions.length ? "Results" : "Next"}
      </button>
      <button
        className={`button button-hover py-3 m-2 btn-secondary w-2/7`}
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
        className={`button button-hover btn-secondary py-3 m-2 w-2/7`}
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
