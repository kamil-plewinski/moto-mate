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

  const renderedVehicles = vehiclesList.map((vehicle) => {
    return <VehicleCard key={vehicle.id} vehicle={vehicle} />;
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
    <>
      <h1>Moje pojazdy</h1>
      <div className="grid grid-cols-1 gap-4 m-4 mb-0 pb-24 lg:grid-cols-4 lg:grid-rows-2 lg:pb-0 lg:mx-0 lg:h-[80vh]">
        {content}
      </div>
    </>
  );
}
