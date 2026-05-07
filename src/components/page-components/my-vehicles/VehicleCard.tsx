import type { VehicleType } from "./vehicleType";
import { X } from "lucide-react";

type VehicleCardProps = {
  vehicle: VehicleType;
  deleteVehicle: (id: number) => void;
};

export default function VehicleCard({
  vehicle,
  deleteVehicle,
}: VehicleCardProps) {
  return (
    <div className="bg-gray-400 rounded-md">
      <X
        size={26}
        className="cursor-pointer hover:text-[#D71F1F] transition-colors duration-200 "
        onClick={() => {
          deleteVehicle(vehicle.id);
        }}
      />
      <p>{vehicle.type}</p>
      <p>{vehicle.brand}</p>
      <p>{vehicle.model}</p>
      <p>{vehicle.year} r.</p>
      <p>{vehicle.odometer} km.</p>
    </div>
  );
}
