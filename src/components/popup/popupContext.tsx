import { createContext, useState } from "react";
import type { PopupType, PopupContextType } from "./types";

export const PopupContext = createContext<PopupContextType | null>(null);

export default function PopupProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<PopupType>("success");

  const showPopup = (message: string, type: PopupType) => {
    setMessage(message);
    setType(type);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <PopupContext.Provider
      value={{
        isOpen,
        message,
        type,
        showPopup,
        closePopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}
