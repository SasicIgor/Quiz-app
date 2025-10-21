import { useQuizContext } from "./store/quiz-context/useQuizContext";
import QuizSetup from "./components/QuizSetup";
import Quiz from "./components/Quiz";
import { useQTrackerContext } from "./store/quiz-tracker-context/useQTrackerContext";

function App() {
  const { state } = useQuizContext();
  const { state: trakerState } = useQTrackerContext();
  return (
    <>
      <h1 className="text-3xl font-bold"></h1>
      {state.status === "inactive" && <QuizSetup />}
      {state.status === "active" && <Quiz />}
      {state.status === "finished" && trakerState.correctAnswers}
    </>
  );
}

export default App;
