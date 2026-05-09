import { useState, useEffect } from "react";
import VehicleCard from "../components/page-components/my-vehicles/VehicleCard";
import type { VehicleType } from "../components/page-components/my-vehicles/vehicleType";

export default function MyVehiclesPage() {
  const [vehiclesList, setVehiclesList] = useState<VehicleType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const fetchVehicles = async () => {
      try {
        const res = await fetch("http://localhost:3001/vehicles");

        if (!res.ok) {
          throw new Error("Błąd wczytywania pojazdów");
        }

        const data = await res.json();
        setVehiclesList(data);
      } catch (err) {
        setIsError(true);
        console.log("wystąpił błąd", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVehicles();
  }, []);

  const deleteVehicle = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:3001/vehicles/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Nie udało się usunąć pojazdu");
      }

      setVehiclesList((prev) => {
        return prev.filter((vehicle) => vehicle.id !== id);
      });
    } catch (err) {
      console.log("Wystąpił błąd", err);
    }
  };

  const renderedVehicles = vehiclesList.map((vehicle) => {
    return (
      <VehicleCard
        key={vehicle.id}
        vehicle={vehicle}
        deleteVehicle={deleteVehicle}
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
      <h1 className="text-2xl my-6 md:my-0">Moje pojazdy</h1>
      <div className="flex flex-col items-center justify-center gap-x-6 gap-y-10 m-2 mb-0 pb-24 md:flex-row md:items-start md:justify-start md:flex-wrap lg:pb-14 lg:pt-4 lg:h-[80vh] lg:overflow-y-auto">
        {content}
      </div>
    </div>
  );
}
