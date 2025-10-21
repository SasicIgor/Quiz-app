import { useQTrackerContext } from "../store/quiz-tracker-context/useQTrackerContext";
import { useQuizContext } from "../store/quiz-context/useQuizContext";

const Quiz = () => {
  const { state } = useQuizContext();
  const questions = state.questions;

  const { state: TState } = useQTrackerContext();
  const { currentIndex, correctAnswers } = TState;
  return (
    <div>
      <p>
        {state.questions
          ? `${state.questions[currentIndex].question.text}`
          : "No questions for this criteria"}
      </p>
    </div>
  );
};

export default Quiz;
