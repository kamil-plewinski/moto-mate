import { useState, useEffect } from "react";
import VehicleCard from "../components/page-components/my-vehicles/VehicleCard";
import type { VehicleType } from "../components/page-components/my-vehicles/vehicleType";
import { usePopup } from "../components/popup/usePopup";
import DeleteModal from "../components/page-components/my-vehicles/DeleteModal";
import {
  getVehicles,
  updateVehicle,
  deleteVehicleReq,
} from "../api/vehicleApi";

export default function MyVehiclesPage() {
  const [vehiclesList, setVehiclesList] = useState<VehicleType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vehicleToDelete, setVehicleToDelete] = useState<number | null>(null);

  const { showPopup } = usePopup();

  const fetchVehicles = async () => {
    try {
      const data = await getVehicles();

      setVehiclesList(data);
    } catch (err) {
      setIsError(true);
      console.error("wystąpił błąd", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetchVehicles();
  }, []);

  const openModal = (id: number) => {
    setVehicleToDelete(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const setActiveVehicle = async (id: number, selectedVehicle: VehicleType) => {
    try {
      await Promise.all(
        vehiclesList.map(async (vehicle) => {
          const isActive = vehicle.id === id;

          return updateVehicle(vehicle.id, isActive);
        }),
      );

      showPopup(
        `Pojazd ${selectedVehicle.brand} ${selectedVehicle.model} został wybrany jako ulubiony.`,
        "favourite",
      );

      await fetchVehicles();
    } catch (err) {
      console.error("Wystąpił błąd", err);
      showPopup(
        "Wystąpił błąd. Nie udało się wybrać ulubionego pojazdu.",
        "error",
      );
    }
  };

  const deleteVehicle = async (id: number) => {
    try {
      await deleteVehicleReq(id);

      closeModal();
      showPopup("Pojazd został usunięty.", "success");
      setVehiclesList((prev) => {
        return prev.filter((vehicle) => vehicle.id !== id);
      });
    } catch (err) {
      console.error("Wystąpił błąd", err);
      showPopup("Wystąpił błąd. Nie udało się usunąć pojazdu", "error");
    }
  };

  const renderedVehicles = vehiclesList.map((vehicle) => {
    return (
      <VehicleCard
        key={vehicle.id}
        vehicle={vehicle}
        openModal={openModal}
        setActiveVehicle={setActiveVehicle}
      />
    );
  });

  let content;

  if (isLoading) {
    content = <p>Wczytywanie listy pojazdów...</p>;
  } else if (isError) {
    content = <p>Wystąpił błąd. Nie udało się wczytać listy pojazdów.</p>;
  } else if (vehiclesList.length === 0) {
    content = <p>Nie dodano jeszcze żadnego pojazdu.</p>;
  } else {
    content = renderedVehicles;
  }

  return (
    <div className="overflow-y-hidden">
      <h1 className="text-2xl my-6 lg:my-2">Moje pojazdy</h1>
      {isModalOpen && vehicleToDelete !== null && (
        <DeleteModal
          closeModal={closeModal}
          vehicleToDelete={vehicleToDelete}
          deleteVehicle={deleteVehicle}
        />
      )}
      <div className="flex flex-col items-center justify-center gap-x-6 gap-y-10 m-2 mb-0 pb-24 md:flex-row lg:items-start lg:justify-start md:flex-wrap lg:pb-14 lg:pt-4 lg:h-[80vh] lg:overflow-y-auto">
        {content}
      </div>
    </div>
  );
}
