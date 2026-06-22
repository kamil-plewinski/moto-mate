import { useEffect, useState } from "react";
import CarIcon from "../../icons/CarIcon";
import { getVehicles, updateVehicle } from "../../../api/vehicleApi";
import type { VehicleType } from "../my-vehicles/vehicleType";

export default function VehicleSelector() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [vehiclesList, setVehiclesList] = useState<VehicleType[]>([]);
  // const [activeVehicle, setActiveVehicle] = useState<VehicleType>();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data = await getVehicles();

        setVehiclesList(data);
      } catch (err) {
        console.error(err, "Nie udało się pobrać listy pojazdów");
      }
    };

    fetchVehicles();
  }, []);

  const renderedVehiclesList = vehiclesList.map((vehicle) => {
    return (
      <li key={vehicle.id}>
        <button
          onClick={() => setActiveVehicle(vehicle.id, vehicle)}
          className="my-1 cursor-pointer"
        >
          {vehicle.brand} {vehicle.model}
        </button>
      </li>
    );
  });

  const setActiveVehicle = async (id: number, selectedVehicle: VehicleType) => {
    try {
      await Promise.all(
        vehiclesList.map((vehicle) => {
          const isActive = vehicle.id === id;

          return updateVehicle(vehicle.id, isActive);
        }),
      );
      setVehiclesList((prev) => {
        return prev.map((vehicle) => ({
          ...vehicle,
          isActive: vehicle.id === id,
        }));
      });
      toggleDropdown();
    } catch (err) {
      console.error(
        err,
        `nie udało się wybrać ${selectedVehicle.brand} jako aktywnego pojazdu`,
      );
    }
  };

  const showActiveVehicle = vehiclesList.map((vehicle) => {
    if (vehicle.isActive) {
      return (
        <p key={vehicle.id}>
          {vehicle.brand} {vehicle.model}
        </p>
      );
    }
  });

  return (
    <div className="flex items-center gap-4 p-4 w-full h-30 custom-background">
      <div className="inline-block p-2 bg-zinc-800">
        <CarIcon />
      </div>
      <div className="ml-3">
        <h2>Aktualnie wybrany Pojazd</h2>
        {showActiveVehicle}
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
