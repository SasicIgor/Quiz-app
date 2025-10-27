import QuizQuestion from "./QuizQuestion";
import QuizDynamics from "./QuizDynamics";
import QuizSetup from "./QuizSetup";
import QuizResults from "./QuizResults";

import { useQuizContext } from "store/quiz-context/useQuizContext";

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
