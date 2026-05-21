import type { VehicleType } from "../my-vehicles/vehicleType";

type MyVehicleProps = {
  activeVehicle: VehicleType | undefined;
};

export default function MyVehicle({ activeVehicle }: MyVehicleProps) {
  if (!activeVehicle) {
    return (
      <div className="custom-background p-5 w-full max-w-130 rounded-xl shadow-lg lg:h-full lg:max-h-86 lg:col-[4/_span_1] lg:row-[1/_span_2] xl:max-h-102">
        <h2 className="text-2xl font-semibold tracking-wide lg:text-xl">
          Twój garaż jest pusty?
        </h2>
        <img
          src="/img/jaymantri-parking-deck-438415_1280.jpg"
          alt="Puste miejsca parkingowe w garażu"
          className="mt-5 w-full rounded-xl object-cover"
        />
        <p className="mt-7  text-gray-300">
          Wybierz ulubiony pojazd w panelu „Moje pojazdy”.
        </p>
        <div className="my-4 h-px w-full bg-white/20 lg:w-[90%] lg:mx-auto lg:my-0 lg:mt-4"></div>
      </div>
    );
  }

  return (
    <div className="custom-background p-5 w-full max-w-130 rounded-xl shadow-lg lg:h-full lg:max-h-82 lg:col-[4/_span_1] lg:row-[1/_span_2] xl:max-h-100">
      <h2 className="text-2xl font-semibold tracking-wide lg:text-xl">
        Mój{" "}
        <span>
          {activeVehicle.type === "motorcycle" ? "motocykl" : "samochód"}
        </span>
      </h2>
      <img
        src={activeVehicle.photo}
        alt={`zdjęcie pojazdu marki ${activeVehicle.brand}`}
        className="mt-5 w-full rounded-xl object-cover"
      />
      <div className="flex items-center justify-between flex-wrap mt-7 text-lg">
        <p className="font-semibold">
          {activeVehicle.brand} {activeVehicle.model}
        </p>
        <p className="text-gray-200 ">Rok: {activeVehicle.year}</p>
      </div>
      <div className="my-4 h-px w-full bg-white/20 lg:w-[90%] lg:mx-auto lg:my-0 lg:mt-7"></div>
    </div>
  );
}
