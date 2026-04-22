import { useContext } from "react";
import { PopupContext } from "./PopupContext";

export function usePopup() {
  const context = useContext(PopupContext);

  if (!context) {
    throw new Error("hook must be used inside Provider!");
  }

  return context;
}
