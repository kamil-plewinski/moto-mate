import { X } from "lucide-react";
import { useRef } from "react";

type VehiclePhotoModalProps = {
  togglePhotoModal: () => void;
};

export default function VehiclePhotoModal({
  togglePhotoModal,
}: VehiclePhotoModalProps) {
  const searchInput = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    console.log(searchInput.current?.value);
  };

  return (
    <div
      className="absolute top-[50%] translate-y-[-50%] p-4 w-[90vw] max-w-225 h-140 bg-zinc-200 text-zinc-800 rounded-xl shadow-md xl:h-150"
      onClick={(e) => e.stopPropagation()}
    >
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
      <div className=" text-lg">
        <p className="text-2xl font-semibold">Wyszukaj zdjęcie</p>
        <div className="mt-6">
          <div className="w-full flex items-center justify-center mt-4 ">
            <input
              type="search"
              placeholder="Wpisz nazwę pojazdu"
              ref={searchInput}
              required
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className="p-3 w-full max-w-100 bg-zinc-300 border border-zinc-400 focus:outline-[#993434] text-zinc-800 rounded-md "
            />
            <button
              type="button"
              onClick={handleSearch}
              className="ml-4 py-2 px-3 w-25 uppercase font-semibold  rounded-md bg-linear-to-br from-[#993434] to-[#D71F1F] cursor-pointer hover:from-[#D71F1F] hover:to-[#993434] transition-colors duration-300 shadow-md text-white"
            >
              Szukaj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
