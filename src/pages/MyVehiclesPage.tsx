import { useState, useEffect } from "react";
import VehicleCard from "../components/page-components/my-vehicles/VehicleCard";
import type { VehicleType } from "../components/page-components/my-vehicles/vehicleType";

export default function MyVehiclesPage() {
  const [vehiclesList, setVehiclesList] = useState<VehicleType[]>([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const res = await fetch("http://localhost:3001/vehicles");
      const data = await res.json();

      setVehiclesList(data);
    };

    fetchVehicles();
  }, []);

  const renderedVehicles = vehiclesList.map((vehicle) => {
    return <VehicleCard key={vehicle.id} vehicle={vehicle} />;
  });

  return (
    <>
      <h1>Moje pojazdy</h1>
      <div className="grid grid-cols-1 gap-4 m-4 mb-0 pb-24 lg:grid-cols-4 lg:grid-rows-2 lg:pb-0 lg:mx-0 lg:h-[80vh]">
        {renderedVehicles}
      </div>
    </>
  );
}
