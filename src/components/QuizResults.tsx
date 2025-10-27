import { useDialogContext } from "store/dialog-context/useDialogContext";
import { ActionTypes } from "store/quiz-context/QuizTypes";
import { useQuizContext } from "store/quiz-context/useQuizContext";
import { useQTrackerContext } from "store/quiz-tracker-context/useQTrackerContext";

import { getMessage } from "utils/utils";

const QuizResults = () => {
  const { state, dispatch, fetchQuiz } = useQuizContext();
  const { state: tstate } = useQTrackerContext();
  const { handleDialogOpen } = useDialogContext();

  return (
    <div className="flex-c flex-col border rounded mt-2 md:mt-20 py-10 px-2 bg-white">
      <h3 className="text-2xl p-4">Your score:</h3>
      <h1 className="text-4xl p-4">{`${tstate.correctAnswers}/${state.questions.length}`}</h1>
      <p className="text-2xl md:text-3xl p-4 text-center">
        {getMessage(tstate.correctAnswers)}
      </p>
      <div className="w-full md:w-1/2 flex-c">
        <button
          className={`button button-hover py-2 m-2 btn-secondary w-full`}
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
          className={`button button-hover py-2 m-2 btn-primary w-full`}
          onClick={() => {
            handleDialogOpen({
              text: "Yea, I would try a different quiz as well. Good choice, finally.",
              func: () =>
                dispatch({
                  type: ActionTypes.CHANGE_STATUS,
                  payload: "inactive",
                }),
            });
          }}
        >
          New quiz
        </button>
      </div>
    </div>
  );
};

export default QuizResults;
