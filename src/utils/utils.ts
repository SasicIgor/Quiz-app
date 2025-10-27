import type { FormatedQuestion, Question } from "store/quiz-context/QuizTypes";

//using Fisher-Yates algorithm to shuffle answers
//returning Question object + answers array
export const shuffleAnswers = (questions: Question[]): FormatedQuestion[] => {
  const formatedQuestions = questions.map((question) => {
    const answers = [...question.incorrectAnswers, question.correctAnswer];
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return { ...question, answers };
  });
  return formatedQuestions;
};

//different message depending on the number of correct answers
export const getMessage = (canswers: number) => {
  switch (canswers) {
    case 1:
      return "You got one. Congrats, I guess? Statistically still awful, but hey - not a zero!";
    case 2:
      return "Two right answers - looks like you guessed your way through life and it's still not working";
    case 3:
      return "You're starting to wake up, but it's giving 'barely tried' energy.";
    case 4:
      return "Not bad, not good. You're the human equivalent of a shrug.";
    case 5:
      return "Halfway! Mediocre never looked so confident.";
    case 6:
      return "Okay, that's respectable. You clearly know something... or got lucky.";
    case 7:
      return "Nice! You're finally proving you've got some brain cells in there.";
    case 8:
      return "Now we're cooking. You're dangerously close to know something.";
    case 9:
      return "So close to perfection it's painful. One more and you'd have bragging rights for life.";
    case 10:
      return "Perfect score. You absolute legende. Everyone else should just quit now.";
    default:
      return "This sucks. Like... genuinely terrible. I wouldn't even bother trying again.";
  }
};
