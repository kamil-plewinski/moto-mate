import SideBar from "../components/SideBar";

export default function AddVehiclePage() {
  //Grid Layout needs refactor on this Page
  return (
    <>
      <div className="grid grid-cols-1 gap-4 m-4 pb-24 lg:grid-cols-5 lg:grid-rows-3 lg:pb-0 lg:mx-0 lg:h-[80vh]">
        <SideBar />
        <h1>Dodaj Pojazd</h1>
      </div>
    </>
  );
}
