import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileBottomNav from "../components/MobileBottomNav";

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <MobileBottomNav />
    </>
  );
}
