import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import MobileBottomNav from "../components/MobileBottomNav";
import Popup from "../components/popup/Popup";
import { motion } from "motion/react";
import SideBar from "../components/SideBar";

export default function Root() {
  const location = useLocation();

  return (
    <>
      <Header />

      <div className="grid grid-cols-1 gap-2 lg:grid-cols-[clamp(180px,17vw,280px)_1fr] lg:grid-rows-1 lg:m-4 lg:gap-4 lg:pb-0 lg:mx-0 lg:h-[80vh]">
        <SideBar />
        <main className="relative h-full">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 6, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="h-full"
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
      <Popup />
      <MobileBottomNav />
    </>
  );
}
