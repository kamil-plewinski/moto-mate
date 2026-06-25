import { useState } from "react";
import CarIcon from "../../icons/CarIcon";
import type { VehicleType } from "../my-vehicles/vehicleType";

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
      <li key={vehicle.id}>
        <button onClick={handleVehicleSelect} className="my-1 cursor-pointer">
          {vehicle.brand} {vehicle.model}
        </button>
      </li>
    );
  });

  return (
    <div className="flex items-center gap-4 p-4 w-full h-30 custom-background">
      <div className="inline-block p-2 bg-zinc-800">
        <CarIcon />
      </div>
      <div className="ml-3">
        <h2>Aktualnie wybrany Pojazd</h2>
        <p>
          {activeVehicle
            ? `${activeVehicle.brand} ${activeVehicle.model}`
            : "Brak aktywnego pojazdu"}
        </p>
      </div>
      <div className="relative ml-auto">
        <button className="bg-gray-500 p-2" onClick={toggleDropdown}>
          Wybierz inny pojazd
        </button>
        {isDropdownOpen && (
          <ul className="absolute left-0 top-full bg-gray-400 z-10">
            {renderedVehiclesList}
          </ul>
        )}
      </div>
    </div>
  );
}
