import MyVehicle from "../components/MyVehicle";
import TotalCosts from "../components/TotalCosts";
import ThisMonthCosts from "../components/ThisMonthCosts";
import VehicleOdometer from "../components/VehicleOdometer";
import MobileBottomNav from "../components/MobileBottomNav";
import SideBar from "../components/SideBar";

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 m-4 pb-24 lg:grid-cols-5 lg:grid-rows-3 lg:pb-0 lg:mx-0 lg:h-[80vh]">
        <SideBar />
        <MyVehicle />
        <TotalCosts />
        <ThisMonthCosts />
        <VehicleOdometer />
      </div>
      <MobileBottomNav />
    </>
  );
}
