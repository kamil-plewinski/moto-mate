import MyVehicle from "../components/page-components/home/MyVehicle";
import InfoCard from "../components/page-components/home/InfoCard";
import MobileBottomNav from "../components/MobileBottomNav";
import SideBar from "../components/SideBar";

type CardConfig = {
  title: string;
  gridArea: string;
};

export default function HomePage() {
  const cards: CardConfig[] = [
    {
      title: "Całkowite koszty",
      gridArea: "lg:col-[2/_span_1] lg:row-[1/_span_1]",
    },
    {
      title: "Koszty w tym miesiącu",
      gridArea: "lg:col-[3/_span_1] lg:row-[1/_span_1]",
    },
    { title: "Przebieg", gridArea: "lg:col-[4/_span_1] lg:row-[1/_span_1]" },
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
      <div className="grid grid-cols-1 gap-4 m-4 pb-24 lg:grid-cols-5 lg:grid-rows-3 lg:pb-0 lg:mx-0 lg:h-[80vh]">
        <SideBar />
        <MyVehicle />
        {renderedCards}
      </div>
      <MobileBottomNav />
    </>
  );
}
