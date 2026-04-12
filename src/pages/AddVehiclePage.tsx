import { useState } from "react";
import AddVehicleBtn from "../components/page-components/add-vehicle/AddVehicleBtn";
import AddVehicleForm from "../components/page-components/add-vehicle/AddVehicleForm";
import SideBar from "../components/SideBar";

type VehicleTypes = "car" | "motorcycle";

export default function AddVehiclePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [vehicleCategory, setVehicleCategory] = useState<VehicleTypes>("car");

  const openFormWithType = (category: VehicleTypes) => {
    setVehicleCategory(category);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="grid grid-cols-1 gap-4 m-4 pb-24 lg:grid-cols-5 lg:grid-rows-[auto_2fr_2fr] lg:pb-0 lg:mx-0 lg:h-[80vh] overflow-hidden relative">
      <SideBar />
      <h1 className="text-xl my-4 ml-4 lg:col-span-2 lg:text-3xl">
        Dodaj swój pojazd
      </h1>
      <div className="grid place-items-center h-110 md:h-150 lg:grid-cols-2 lg:gap-8 lg:col-span-4 lg:mt-6 xl:px-[4em]">
        <AddVehicleBtn
          name="Dodaj samochód"
          onClick={() => openFormWithType("car")}
        />
        <AddVehicleBtn
          name="Dodaj Motocykl"
          onClick={() => openFormWithType("motorcycle")}
        />
      </div>
      {isFormOpen && (
        <AddVehicleForm
          vehicleCategory={vehicleCategory}
          closeForm={closeForm}
        />
      )}
    </div>
  );
}
