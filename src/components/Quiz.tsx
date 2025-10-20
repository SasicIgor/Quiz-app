import { useQuizContext } from "../store/quiz-context/useQuizContext";

const Quiz = () => {
  const { state } = useQuizContext();
  return (
    <div>
      <p>{state.questions ? "Questions" : "No questions for this criteria"}</p>
    </div>
  );
};

export default Quiz;
