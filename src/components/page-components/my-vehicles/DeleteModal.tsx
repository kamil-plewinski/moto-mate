import { X } from "lucide-react";

export default function DeleteModal() {
  const buttonClasses =
    "px-4 py-1 min-w-24 rounded-lg cursor-pointer shadow-md transition-colors duration-200";
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div
        role="dialog"
        aria-modal="true"
        className="p-4
  bg-white text-gray-700 rounded-lg text-lg"
      >
        <X
          size={26}
          className="ml-auto cursor-pointer text-gray-500 hover:text-[#D71F1F] transition-colors duration-200 "
        />
        <p className="my-4">Czy na pewno chcesz usunąć ten pojazd?</p>
        <div className="flex flex-row items-center justify-center mt-8 mb-2 gap-6">
          <button
            className={`${buttonClasses} text-white bg-[#D71F1F] hover:bg-[#b71a1a]`}
          >
            Usuń
          </button>
          <button
            className={`${buttonClasses} text-zinc-800 bg-zinc-200 hover:bg-zinc-300 border border-zinc-300`}
          >
            Anuluj
          </button>
        </div>
      </div>
    </div>
  );
}
