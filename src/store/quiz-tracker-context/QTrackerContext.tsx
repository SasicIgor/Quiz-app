import { createContext } from "react";
import type { QTrackerContextType } from "./QTrackerTypes";

export const QTrackerContext = createContext<QTrackerContextType | null>(null);
