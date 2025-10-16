import { useEffect, useState } from "react";
import { fetchQuestion } from "./service/apiService";
import type { Question } from "types";

function App() {
  const [quiz, setQuiz] = useState<Question[]>([]);
  useEffect(() => {
    fetchQuestion<Question[]>("questions?categories=geography").then(setQuiz);
  }, []);
  console.log(quiz);
  return (
    <>
      <h1 className="text-3xl font-bold">Hello world!</h1>
    </>
  );
}

export default App;
