export type Question = {
  category: string;
  correctAnswer: string;
  difficulty: string;
  id: string;
  incorrectAnswers: string[];
  inNiche: boolean;
  regions: string[];
  tags: string[];
  type: string;
  question: QuestionText;
};

type QuestionText = { text: string };
