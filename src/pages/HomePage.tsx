import MyVehicle from "../components/MyVehicle";
import TotalCosts from "../components/TotalCosts";
import ThisMonthCosts from "../components/ThisMonthCosts";
import VehicleOdometer from "../components/VehicleOdometer";
import MobileBottomNav from "../components/MobileBottomNav";

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 m-4 pb-24">
        <MyVehicle />
        <TotalCosts />
        <ThisMonthCosts />
        <VehicleOdometer />
      </div>
      <MobileBottomNav />
    </>
  );
}
