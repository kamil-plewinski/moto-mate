import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileBottomNav from "../components/MobileBottomNav";
import Popup from "../components/popup/Popup";

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Popup />
      <MobileBottomNav />
    </>
  );
}
