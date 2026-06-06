import { X } from "lucide-react";

type VehiclePhotoModalProps = {
  togglePhotoModal: () => void;
};

export default function VehiclePhotoModal({
  togglePhotoModal,
}: VehiclePhotoModalProps) {
  return (
    <div className="absolute top-[50%] translate-y-[-50%] w-90 h-126 bg-zinc-200">
      <button
        type="button"
        onClick={togglePhotoModal}
        className="absolute top-0 right-0 m-3 cursor-pointer"
      >
        <X
          size={34}
          className="text-zinc-800 hover:text-[#D71F1F] transition-colors duration-200 mr-1"
        />
      </button>
    </div>
  );
}
