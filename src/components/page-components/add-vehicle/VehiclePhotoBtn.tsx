type VehiclePhotoBtnProps = {
  togglePhotoModal: () => void;
};

export default function VehiclePhotoBtn({
  togglePhotoModal,
}: VehiclePhotoBtnProps) {
  return (
    <button
      type="button"
      onClick={togglePhotoModal}
      className="py-3 px-1 w-37 bg-linear-to-br from-zinc-400 to-zinc-100 hover:from-zinc-100 hover:to-zinc-400 text-zinc-800 text-md uppercase font-semibold rounded-md cursor-pointer shadow-md transition-colors duration-300"
    >
      Wyszukaj zdjęcie
    </button>
  );
}
