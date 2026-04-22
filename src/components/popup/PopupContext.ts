import { createContext } from "react";
import type { PopupContextType } from "./types";

export const PopupContext = createContext<PopupContextType | null>(null);
