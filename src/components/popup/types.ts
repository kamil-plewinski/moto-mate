export type PopupType = "success" | "error" | "favourite";

export type PopupContextType = {
  isOpen: boolean;
  message: string;
  type: PopupType;
  showPopup: (message: string, type: PopupType) => void;
  closePopup: () => void;
};
