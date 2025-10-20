import { createContext } from "react";
import type { QuizContextType } from "./QuizTypes";

export const QuizContext = createContext<QuizContextType | null>(null);
