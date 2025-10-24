import { useQuizContext } from "./store/quiz-context/useQuizContext";
import QuizSetup from "./components/QuizSetup";
import Quiz from "./components/Quiz";
import { useQTrackerContext } from "./store/quiz-tracker-context/useQTrackerContext";

function App() {
  const { state } = useQuizContext();
  const { state: trakerState } = useQTrackerContext();
  return (
    <div className="grid grid-cols-[minmax(0,auto)_minmax(0,1200px)_minmax(0,auto)] gap-5">
      <div className="col-start-2">
        {state.status === "inactive" && <QuizSetup />}
        {state.status === "active" && <Quiz />}
        {state.status === "finished" && trakerState.correctAnswers}
      </div>
    </div>
  );
}

export default App;
