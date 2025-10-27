import QuizQuestion from "./QuizQuestion";
import QuizDynamics from "./QuizDynamics";
import { useQuizContext } from "store/quiz-context/useQuizContext";
import QuizSetup from "./QuizSetup";
import QuizResults from "./QuizResults";

const Quiz = () => {
  const { state } = useQuizContext();

  return (
    <div>
      {state.status === "inactive" && <QuizSetup />}
      {state.status === "active" && (
        <>
          <QuizQuestion />
          <QuizDynamics />
        </>
      )}
      {state.status === "finished" && <QuizResults />}
    </div>
  );
};

export default Quiz;
