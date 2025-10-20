import { useQuizContext } from "./store/quiz-context/useQuizContext";
import QuizSetup from "./components/QuizSetup";
import Quiz from "./components/Quiz";

function App() {
  const { state } = useQuizContext();
  return (
    <>
      <h1 className="text-3xl font-bold"></h1>
      {state.status === "inactive" && <QuizSetup />}
      {state.status === "active" && <Quiz />}
      <p>{state.status}</p>
    </>
  );
}

export default App;
