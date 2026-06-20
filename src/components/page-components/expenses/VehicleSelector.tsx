import { useState } from "react";
import CarIcon from "../../icons/CarIcon";

export default function VehicleSelector() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 p-4 w-full h-30 custom-background">
      <div className="inline-block p-2 bg-zinc-800">
        <CarIcon />
      </div>
      <div className="ml-3">
        <h2>Aktualnie wybrany Pojazd</h2>
        <p>"Nazwa Pojazdu"</p>
      </div>
      <div className="relative ml-auto">
        <button className="bg-gray-500 p-2" onClick={toggleDropdown}>
          "Aktualnie wybrany Pojazd"
        </button>
        {isDropdownOpen && (
          <ul className="absolute left-0 top-full bg-gray-400 z-10">
            <li>Audi A4</li>
            <li>Honda CBR 1000 RR</li>
            <li>Peugeot 308</li>
          </ul>
        )}
      </div>
    </div>
  );
}
