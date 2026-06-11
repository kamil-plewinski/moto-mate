import { X } from "lucide-react";
import { useRef, useState } from "react";
import axios from "axios";
import { usePopup } from "../../popup/usePopup";

type VehiclePhotoModalProps = {
  togglePhotoModal: () => void;
};

export type UnsplashImage = {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
  };
};

export default function VehiclePhotoModal({
  togglePhotoModal,
}: VehiclePhotoModalProps) {
  const searchInput = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const API_URL = "https://api.unsplash.com/search/photos";
  const IMAGES_PER_PAGE = 8;

  const { showPopup } = usePopup();
  const modalBtnsClass =
    "uppercase font-semibold  rounded-md bg-linear-to-br from-[#993434] to-[#D71F1F] cursor-pointer hover:from-[#D71F1F] hover:to-[#993434] transition-colors duration-300 shadow-md text-white";

  const fetchImages = async (currentPage: number) => {
    try {
      if (searchInput.current?.value) {
        const response = await axios.get(
          `${API_URL}?query=${searchInput.current?.value}&page=${currentPage}&per_page=${IMAGES_PER_PAGE}&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`,
        );

        setImages(response.data.results);
        setTotalPages(response.data.total_pages);
        return response.data;
      }
    } catch (error) {
      showPopup(
        "Nie udało się pobrać obrazów. Spróbuj ponownie później",
        "error",
      );
      console.log("Nie udało się pobrać obrazów", error);
    }
  };

  const renderedImages = images.map((image) => {
    return (
      <img
        key={image.id}
        src={image.urls.small}
        alt={image.alt_description ?? ""}
        className=""
      />
    );
  });

  const handleSearch = () => {
    setPage(1);
    fetchImages(1);
  };

  const handleNextPage = () => {
    const nextPage = page + 1;

    setPage(nextPage);
    fetchImages(nextPage);
  };

  const handlePrevPage = () => {
    const prevPage = page - 1;

    setPage(prevPage);
    fetchImages(prevPage);
  };

  return (
    <div
      className="absolute top-[50%] translate-y-[-50%] p-4 w-[90vw] max-w-225 h-150 bg-zinc-200 text-zinc-800 rounded-xl shadow-md xl:h-150 overflow-clip"
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
          <div className="w-full flex items-center justify-center mt-4">
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
              className={`ml-4 py-2 px-3 w-25 ${modalBtnsClass}`}
            >
              Szukaj
            </button>
          </div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 px-4 mb-4 w-full h-105  overflow-y-auto">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap">
          {renderedImages}
        </div>
        <div className="fixed bottom-2 left-[50%] translate-x-[-50%] flex gap-20 mb-4">
          {page > 1 && (
            <button
              className={`p-2 w-20 ${modalBtnsClass}`}
              onClick={handlePrevPage}
            >
              Wstecz
            </button>
          )}
          {page < totalPages && (
            <button
              className={`p-2 w-20 ${modalBtnsClass}`}
              onClick={handleNextPage}
            >
              Dalej
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
