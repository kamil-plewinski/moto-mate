import { useState } from "react";
import CarIcon from "../../icons/CarIcon";
import type { VehicleType } from "../my-vehicles/vehicleType";
import VehicleSelectorChevron from "../../icons/VehicleSelectorChevron";
import { AnimatePresence, motion } from "motion/react";

type VehicleSelectorProps = {
  setActiveVehicle: (id: number, selectedVehicle: VehicleType) => void;
  vehiclesList: VehicleType[];
  activeVehicle: VehicleType | undefined;
};

export default function VehicleSelector({
  vehiclesList,
  setActiveVehicle,
  activeVehicle,
}: VehicleSelectorProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const renderedVehiclesList = vehiclesList.map((vehicle) => {
    const handleVehicleSelect = () => {
      setActiveVehicle(vehicle.id, vehicle);
      toggleDropdown();
    };
    return (
      <li key={vehicle.id} className="mb-1 border-b border-zinc-300/30">
        <button
          onClick={handleVehicleSelect}
          className="my-1 py-1 cursor-pointer hover:text-[#D71F1F] transition-colors duration-200"
        >
          {vehicle.brand} {vehicle.model}
        </button>
      </li>
    );
  });

  return (
    <div className="flex items-center gap-1 px-1 py-6 w-full custom-background rounded-xl shadow-lg sm:px-4 sm:gap-4 md:px-10">
      <div className="inline-block p-2 bg-zinc-800 border border-zinc-700 rounded-lg shadow-md">
        <CarIcon />
      </div>
      <div className="ml-1 sm:ml-3">
        <h2 className="text-zinc-300 uppercase text-sm sm:text-base">
          Aktualnie Wybrany Pojazd
        </h2>
        <p className="mt-1 font-semibold text-lg text-wrap max-w-35 sm:text-xl sm:max-w-100">
          {activeVehicle
            ? `${activeVehicle.brand} ${activeVehicle.model}`
            : "Brak aktywnego pojazdu"}
        </p>
      </div>
      <div className="relative ml-auto">
        <button
          className={`flex items-center gap-2 p-3 bg-zinc-800 text-sm text-nowrap border cursor-pointer shadow-md ${isDropdownOpen ? "border-[rgba(215,31,31,.7)] border-b-0 rounded-t-md" : "border-zinc-700 border-b-0 rounded-md"} transition-all duration-200 sm:text-base`}
          onClick={toggleDropdown}
        >
          Wybierz inny pojazd
          <VehicleSelectorChevron isDropdownOpen={isDropdownOpen} />
        </button>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full w-full px-3 py-2 bg-zinc-800 text-sm rounded-b-md border border-[rgba(215,31,31,.7)] border-t-0 shadow-md z-10 origin-top sm:text-base"
            >
              {renderedVehiclesList}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
