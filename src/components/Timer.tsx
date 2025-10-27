import { useEffect, useState } from "react";
import { ActionTypes } from "store/quiz-context/QuizTypes";
import { useQuizContext } from "store/quiz-context/useQuizContext";

const Timer = () => {
  const { state, dispatch } = useQuizContext();

  const getTime = () => {
    switch (state.difficulty) {
      case "easy":
        return 120;
      case "medium":
        return 90;
      case "hard":
        return 60;
      default:
        return 0;
    }
  };
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setTime(getTime());
  }, [state.questions]);

  useEffect(() => {
    if (time <= 0)
      return dispatch({ type: ActionTypes.CHANGE_STATUS, payload: "finished" });
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <p>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</p>
    </div>
  );
};

export default Timer;
