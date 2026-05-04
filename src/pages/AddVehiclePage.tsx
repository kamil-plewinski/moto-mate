import { useState } from "react";
import AddVehicleBtn from "../components/page-components/add-vehicle/AddVehicleBtn";
import AddVehicleForm from "../components/page-components/add-vehicle/AddVehicleForm";
import { AnimatePresence, motion } from "motion/react";

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
    <div className="grid grid-cols-1 gap-4 m-4 lg:grid-cols-4 lg:grid-rows-[auto_2fr_2fr] lg:pb-0 lg:mx-0 lg:h-[80vh] overflow-hidden relative">
      <h1 className="text-xl my-4 ml-4 lg:col-span-2 lg:text-3xl">
        Wybierz typ pojazdu
      </h1>
      <div className="grid place-items-center gap-6 md:h-150 lg:grid-cols-2 lg:gap-8 lg:col-span-4 lg:mt-6 xl:px-[5em]">
        <AddVehicleBtn
          name="Dodaj samochód"
          buttonType="car"
          onClick={() => openFormWithType("car")}
        />
        <AddVehicleBtn
          name="Dodaj Motocykl"
          buttonType="motorcycle"
          onClick={() => openFormWithType("motorcycle")}
        />
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
            role="dialog"
            aria-modal="true"
            onClick={closeForm}
          >
            <AddVehicleForm
              vehicleCategory={vehicleCategory}
              closeForm={closeForm}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
