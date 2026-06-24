import { useEffect, useState } from "react";
import CarIcon from "../../icons/CarIcon";
import { getVehicles, updateVehicle } from "../../../api/vehicleApi";
import type { VehicleType } from "../my-vehicles/vehicleType";
import { usePopup } from "../../popup/usePopup";

export default function VehicleSelector() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [vehiclesList, setVehiclesList] = useState<VehicleType[]>([]);

  const { showPopup } = usePopup();

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
      showPopup(
        `Aktywny pojazd został zmieniony na ${selectedVehicle.brand} ${selectedVehicle.model}.`,
        "favourite",
      );
    } catch (err) {
      showPopup(
        "Wystąpił błąd. Nie udało się wybrać aktywnego pojazdu.",
        "error",
      );
      console.error(
        err,
        `Nie udało się ustawić ${selectedVehicle.brand} jako aktywny pojazd`,
      );
    }
  };

  const activeVehicle: VehicleType | undefined = vehiclesList.find(
    (vehicle) => vehicle.isActive === true,
  );

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
