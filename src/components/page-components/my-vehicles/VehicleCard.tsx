import type { VehicleType } from "./vehicleType";

type VehicleCardProps = {
  vehicle: VehicleType;
};

export default function VehicleCard({ vehicle } : VehicleCardProps) {
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
