import { useQuizContext } from "../store/quiz-context/useQuizContext";

const Quiz = () => {
  const { state } = useQuizContext();
  return (
    <div>
      <p>
        {state.questions
          ? `${state.questions[0].question.text}`
          : "No questions for this criteria"}
      </p>
    </div>
  );
};

export default Quiz;
