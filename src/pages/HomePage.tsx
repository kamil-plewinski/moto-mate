import { useEffect, useState } from "react";
import MyVehicle from "../components/page-components/home/MyVehicle";
import InfoCard from "../components/page-components/home/InfoCard";
import type { VehicleType } from "../components/page-components/my-vehicles/vehicleType";

type CardConfig = {
  title: string;
  content: number | string | undefined;
  gridArea: string;
};

export default function HomePage() {
  const [vehicles, setVehicles] = useState<VehicleType[]>([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await fetch("http://localhost:3001/vehicles");

        if (!res.ok) {
          throw new Error("Błąd wczytywania danych.");
        }

        const data = await res.json();

        setVehicles(data);
      } catch (err) {
        console.error("Wystąpił błąd", err);
      }
    };

    fetchVehicles();
  }, []);

  const activeVehicle = vehicles.find((vehicle) => {
    return vehicle.isActive === true;
  });

  const cards: CardConfig[] = [
    {
      title: "Całkowite koszty",
      content: "",
      gridArea: "lg:col-[1/_span_1] lg:row-[1/_span_1]",
    },
    {
      title: "Koszty w tym miesiącu",
      content: "",
      gridArea: "lg:col-[2/_span_1] lg:row-[1/_span_1]",
    },
    {
      title: "Przebieg",
      content: activeVehicle?.odometer + " km.",
      gridArea: "lg:col-[3/_span_1] lg:row-[1/_span_1]",
    },
  ];

  const renderedCards = cards.map((card) => {
    return (
      <div key={card.title} className={card.gridArea}>
        <InfoCard cardTitle={card.title} content={card.content} />
      </div>
    );
  });

  return (
    <>
      <div className="w-full h-full pb-24 mt-4 grid justify-center gap-4 lg:grid-cols-4 lg:grid-rows-3 lg:mt-0 ">
        <MyVehicle activeVehicle={activeVehicle} />
        {renderedCards}
      </div>
    </>
  );
}
