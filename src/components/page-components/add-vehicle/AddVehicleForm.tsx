import { X } from "lucide-react";
import { usePopup } from "../../popup/usePopup";
import { createVehicle } from "../../../api/vehicleApi";
import VehiclePhotoBtn from "./VehiclePhotoBtn";
import VehiclePhotoModal from "./VehiclePhotoModal";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { CreateVehicleDto } from "../my-vehicles/vehicleType";
import type { UnsplashImage } from "../../../api/unsplashApi";

type AddVehicleFormProps = {
  vehicleCategory: "car" | "motorcycle";
  closeForm: () => void;
};

const vehicleFormConfig = {
  car: {
    defaultPhoto: "/img/oskaline-car-63930_640.jpg",
    brandPlaceholder: "Podaj markę samochodu",
    modelPlaceholder: "Podaj model samochodu",
    yearPlaceholder: "Podaj rok produkcji samochodu",
    odometerPlaceholder: "Podaj przebieg samochodu w km.",
    enginePlaceholder: "Np. 600 cm3, 1.8T lub 2.0TDI itp.",
  },
  motorcycle: {
    defaultPhoto: "/img/ds_30-mode-4783281_640.jpg",
    brandPlaceholder: "Podaj markę motocykla",
    modelPlaceholder: "Podaj model motocykla",
    yearPlaceholder: "Podaj rok produkcji motocykla",
    odometerPlaceholder: "Podaj przebieg motocykla w km.",
    enginePlaceholder: "Np. 600 cm3, 1.8T lub 2.0TDI itp.",
  },
};

export default function AddVehicleForm({
  closeForm,
  vehicleCategory,
}: AddVehicleFormProps) {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);
  const [pickPhoto, setPickPhoto] = useState<string>("");
  const { showPopup } = usePopup();

  const inputClasses =
    "p-2 w-full border-b border-gray-300/50 focus:outline-none focus:border-[#993434] mb-2";
  const labelClasses = "inline-block mt-2";

  const config = vehicleFormConfig[vehicleCategory];

  const handlePickPhoto = (image: UnsplashImage) => {
    setPickPhoto(image.urls.regular);
    togglePhotoModal();
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const brand = formData.get("brand");
    const model = formData.get("model");
    const year = formData.get("year");
    const odometer = formData.get("odometer");
    const engine = formData.get("engine");

    const newVehicle: CreateVehicleDto = {
      type: vehicleCategory,
      photo: pickPhoto || config.defaultPhoto,
      brand: brand as string,
      model: model as string,
      year: Number(year),
      odometer: Number(odometer),
      engine: engine as string,
      isActive: false,
    };

    try {
      await createVehicle(newVehicle);

      showPopup("Pojazd został dodany!", "success");
      closeForm();
    } catch (err) {
      console.log("Wystąpił błąd", err);
      showPopup("Nie udało się dodać pojazdu.", "error");
    }
  };

  const togglePhotoModal = () => {
    setIsPhotoModalOpen((prev) => !prev);
  };

  return (
    <>
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={submitForm}
        className="relative w-full mx-2 flex flex-col items-center justify-center px-10 py-9 custom-background rounded-xl text-sm shadow-md md:mx-10 md:text-md lg:flex-row-reverse lg:justify-around lg:gap-6 lg:max-w-300 lg:py-30 xl:py-36 xl:px-14"
      >
        <button
          type="button"
          onClick={closeForm}
          className="absolute top-0 right-0 m-3 cursor-pointer md:m-6 "
        >
          <X
            size={34}
            className="text-gray-200 hover:text-[#D71F1F] transition-colors duration-200"
          />
        </button>
        <div className="mt-4 w-full max-w-120 md:max-w-140 lg:max-w-120 h-55 overflow-hidden sm:h-75 md:h-90 lg:mt-0 lg:h-100">
          <img
            id="vehicle-photo"
            src={pickPhoto || config.defaultPhoto}
            alt="Zdjęcie wybranego pojazdu"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="my-5 max-w-120 md:max-w-140 lg:max-w-120 lg:my-0">
          <label htmlFor="brand">Marka:</label>
          <input
            id="brand"
            name="brand"
            type="text"
            placeholder={config.brandPlaceholder}
            className={inputClasses}
            required
          />
          <label htmlFor="model" className={labelClasses}>
            Model:
          </label>
          <input
            id="model"
            name="model"
            type="text"
            placeholder={config.modelPlaceholder}
            className={inputClasses}
            required
          />
          <label htmlFor="year" className={labelClasses}>
            Rok produkcji:
          </label>
          <input
            id="year"
            name="year"
            type="number"
            placeholder={config.yearPlaceholder}
            className={inputClasses}
            required
          />
          <label htmlFor="odometer" className={labelClasses}>
            Przebieg:
          </label>
          <input
            id="odometer"
            name="odometer"
            type="number"
            placeholder={config.odometerPlaceholder}
            className={inputClasses}
            required
          />
          <label className={labelClasses}>Silnik:</label>
          <input
            id="engine"
            name="engine"
            placeholder={config.enginePlaceholder}
            className={inputClasses}
            required
          />
        </div>
        <div className="flex gap-4 items-center justify-center w-full sm:gap-10 md:gap-20 lg:absolute lg:bottom-0 lg:mb-8">
          <VehiclePhotoBtn togglePhotoModal={togglePhotoModal} />
          <button
            type="submit"
            className="py-3 w-37 text-md uppercase font-semibold  rounded-md bg-linear-to-br from-[#993434] to-[#D71F1F] cursor-pointer hover:from-[#D71F1F] hover:to-[#993434] transition-colors duration-300 shadow-md"
          >
            Dodaj
          </button>
        </div>
      </form>
      <AnimatePresence initial={false}>
        {isPhotoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm z-50"
            onClick={togglePhotoModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              role="dialog"
              aria-modal="true"
            >
              <VehiclePhotoModal
                togglePhotoModal={togglePhotoModal}
                handlePickPhoto={handlePickPhoto}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
