import type { VehicleType } from "./vehicleType";

export default function VehicleCard({ vehicle }: { vehicle: VehicleType }) {
  return (
    <div className="bg-gray-400 rounded-md">
      <p>{vehicle.type}</p>
      <p>{vehicle.brand}</p>
      <p>{vehicle.model}</p>
      <p>{vehicle.year} r.</p>
      <p>{vehicle.odometer} km.</p>
    </div>
  );
}
