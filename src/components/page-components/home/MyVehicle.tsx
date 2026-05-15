import type { VehicleType } from "../my-vehicles/vehicleType";


type MyVehicleProps = {
  activeVehicle: VehicleType | undefined;
};

export default function MyVehicle({ activeVehicle }: MyVehicleProps) {
  if (!activeVehicle) {
    return (
      <div className="custom-background w-full lg:h-full lg:col-[4/_span_1] lg:row-[1/_span_2] ">
        <h2>Mój pojazd</h2>
        <p>Brak aktywnego pojazdu</p>
      </div>
    );
  }

  return (
    <div className="custom-background w-full max-w-130 lg:h-full lg:col-[4/_span_1] lg:row-[1/_span_2] ">
      <h2>Mój pojazd</h2>
      <img
        src={activeVehicle.photo}
        alt={`zdjęcie pojazdu marki ${activeVehicle.brand}`}
        className="w-full object-cover"
      />
      <div className="flex items-center justify-around">
        <p>
          {activeVehicle.brand} | {activeVehicle.model}
        </p>
        <p>{activeVehicle.year} r.</p>
      </div>
    </div>
  );
}
