import MyVehicle from "../components/page-components/home/MyVehicle";
import InfoCard from "../components/page-components/home/InfoCard";

type CardConfig = {
  title: string;
  gridArea: string;
};

export default function HomePage() {
  const cards: CardConfig[] = [
    {
      title: "Całkowite koszty",
      gridArea: "lg:col-[1/_span_1] lg:row-[1/_span_1]",
    },
    {
      title: "Koszty w tym miesiącu",
      gridArea: "lg:col-[2/_span_1] lg:row-[1/_span_1]",
    },
    { title: "Przebieg", gridArea: "lg:col-[3/_span_1] lg:row-[1/_span_1]" },
  ];

  const renderedCards = cards.map((card) => {
    return (
      <div key={card.title} className={card.gridArea}>
        <InfoCard cardTitle={card.title} />
      </div>
    );
  });

  return (
    <>
      <div className="w-full h-full pb-24 mt-4 grid gap-4 lg:grid-cols-4 lg:grid-rows-3 lg:mt-0 ">
        <MyVehicle />
        {renderedCards}
      </div>
    </>
  );
}
