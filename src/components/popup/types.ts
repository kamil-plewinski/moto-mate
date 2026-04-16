export type PopupType = "success" | "error";

export type PopupContextType = {
  isOpen: boolean;
  message: string;
  type: PopupType;
  showPopup: (message: string, type: PopupType) => void;
  hidePopup: () => void;
};

