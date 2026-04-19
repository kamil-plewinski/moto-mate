import { useEffect } from "react";
import { usePopup } from "./usePopup";

export default function Popup() {
  const { isOpen, message, type, closePopup } = usePopup();

  const popupStyles = {
    success: "bg-green-400",
    error: "bg-red-400",
  };

  const style = popupStyles[type];

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      closePopup();
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen, closePopup]);

  if (!isOpen) return null;

  return (
    <div
      className={`${style} fixed top-0 right-0 mt-[4em] mr-[2em] w-72 p-4 text-white`}
    >
      {message}
    </div>
  );
}
