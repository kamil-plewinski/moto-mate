import { motion } from "motion/react";
import type { VehicleType } from "./vehicleType";
import { X } from "lucide-react";

type VehicleCardProps = {
  vehicle: VehicleType;
  openModal: (id: number) => void;
};

export default function VehicleCard({ vehicle, openModal }: VehicleCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      exit={{ opacity: 0, y: 4, scale: 0.9 }}
      layout
      className="pt-2 pb-4 max-w-75 custom-background border border-black/40 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.35)]  hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-shadow"
    >
      <X
        size={26}
        className="ml-auto mr-2 cursor-pointer text-gray-300 hover:text-[#D71F1F] transition-colors duration-200 "
        onClick={() => openModal(vehicle.id)}
      />

      <img
        src={vehicle.photo}
        alt={`Zdjęcie ${vehicle.brand}`}
        className="mt-2 w-full h-48 object-cover border-b-2 border-[#D71F1F]"
      />
      <div className="mt-5 px-5 leading-7">
        <p className="font-semibold text-xl tracking-wide">
          {vehicle.brand} <span className="text-gray-400 font-normal"> | </span>
          {vehicle.model}
        </p>
        <div className="my-3 h-px w-full bg-white/10"></div>
        <div className="space-y-1 text-[15px] text-gray-200">
          <p>
            <span className="font-semibold text-white">Rok produkcji:</span>{" "}
            {vehicle.year} r.
          </p>
          <p>
            <span className="font-semibold text-white">Przebieg:</span>{" "}
            {vehicle.odometer} km.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
