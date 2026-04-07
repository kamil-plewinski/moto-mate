import MobileBottomNav from "../components/MobileBottomNav";
import SideBar from "../components/SideBar";

export default function MyVehiclesPage() {
  return (
    //Grid Layout needs refactor on this Page
    <>
      <div className="grid grid-cols-1 gap-4 m-4 pb-24 lg:grid-cols-5 lg:grid-rows-3 lg:pb-0 lg:mx-0 lg:h-[80vh]">
        <SideBar />
        <h1>Moje pojazdy</h1>
      </div>
      <MobileBottomNav />
    </>
  );
}
