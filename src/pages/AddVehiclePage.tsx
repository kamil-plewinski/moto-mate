import AddVehicleBtn from "../components/page-components/add-vehicle/AddVehicleBtn";
import SideBar from "../components/SideBar";

export default function AddVehiclePage() {
  return (
    <div className="grid grid-cols-1 gap-4 m-4 pb-24 lg:grid-cols-5 lg:grid-rows-[auto_2fr_2fr] lg:pb-0 lg:mx-0 lg:h-[80vh]">
      <SideBar />
      <h1 className="text-xl my-4 ml-4 lg:col-span-2 lg:text-3xl">
        Dodaj swój pojazd
      </h1>
      <div className="grid place-items-center h-110 md:h-150 lg:grid-cols-2 lg:gap-8 lg:col-span-4 lg:mt-6 xl:px-[4em]">
        <AddVehicleBtn name="Dodaj samochód" />
        <AddVehicleBtn name="Dodaj Motocykl" />
      </div>
    </div>
  );
}
