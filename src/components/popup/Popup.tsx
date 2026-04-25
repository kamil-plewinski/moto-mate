import { useEffect } from "react";
import { usePopup } from "./usePopup";
import { Check, CircleAlert } from "lucide-react";

export default function Popup() {
  const { isOpen, message, type, closePopup } = usePopup();

  const popupStyles = {
    success: "bg-[#42cc45]",
    error: "bg-[#ed776a]",
  };

  const style = popupStyles[type];

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      closePopup();
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen, closePopup]);

  return (
    <div role="alert"
      className={`fixed flex items-center top-0 right-0 mt-[4em] mr-[1em] w-72 py-5 px-3 bg-white text-gray-700 rounded-lg overflow-hidden ${isOpen ? "translate-x-[0%] opacity-100" : "translate-x-[120%] opacity-0 pointer-events-none"} transition-all duration-300 ease-in-out z-10`}
    >
      <div className={`${style} p-[.2em] mr-2 rounded-[50%]`}>
        {type === "success" ? (
          <Check color="white" size={22} strokeWidth="2" />
        ) : (
          <CircleAlert color="white" size={22} strokeWidth="2" />
        )}
      </div>
      {message}
      <div className={`${style} absolute bottom-0 left-0 w-full h-1.5`} />
    </div>
  );
}
