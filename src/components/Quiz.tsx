import QuizQuestion from "./QuizQuestion";
import QuizDynamics from "./QuizDynamics";
import { useQuizContext } from "store/quiz-context/useQuizContext";
import QuizSetup from "./QuizSetup";
import { useQTrackerContext } from "store/quiz-tracker-context/useQTrackerContext";

const Quiz = () => {
  const { state } = useQuizContext();
  const { state: trakerState } = useQTrackerContext();

  return (
    <div>
      {state.status === "inactive" && <QuizSetup />}
      {state.status === "active" && (
        <>
          <QuizQuestion />
          <QuizDynamics />
        </>
      )}
      {state.status === "finished" && trakerState.correctAnswers}
    </div>
  );
};

export default Quiz;
