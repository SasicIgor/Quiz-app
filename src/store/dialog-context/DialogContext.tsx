import { createContext } from "react";
import type { DialogContextType } from "./DialogTypes";

export const DialogContext = createContext<DialogContextType | null>(null);
