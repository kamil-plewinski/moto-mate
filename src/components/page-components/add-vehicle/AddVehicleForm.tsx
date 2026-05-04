import { X } from "lucide-react";
import { usePopup } from "../../popup/usePopup";

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
  },
  motorcycle: {
    defaultPhoto: "/img/ds_30-mode-4783281_640.jpg",
    brandPlaceholder: "Podaj markę motocykla",
    modelPlaceholder: "Podaj model motocykla",
    yearPlaceholder: "Podaj rok produkcji motocykla",
    odometerPlaceholder: "Podaj przebieg motocykla w km.",
  },
};

export default function AddVehicleForm({
  closeForm,
  vehicleCategory,
}: AddVehicleFormProps) {
  const { showPopup } = usePopup();

  const inputClasses =
    "p-2 w-full border-b border-gray-300/50 focus:outline-none focus:border-[#993434] mb-2";
  const labelClasses = "inline-block mt-2";

  const config = vehicleFormConfig[vehicleCategory];

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const brand = formData.get("brand");
    const model = formData.get("model");
    const year = formData.get("year");
    const odometer = formData.get("odometer");

    const newVehicle = {
      type: vehicleCategory,
      photo: config.defaultPhoto,
      brand: brand as string,
      model: model as string,
      year: Number(year),
      odometer: Number(odometer),
    };

    try {
      const res = await fetch("http://localhost:3001/vehicles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newVehicle),
      });

      if (!res.ok) {
        throw new Error("Nie udało się dodać pojazdu");
      }

      showPopup("Pojazd został dodany!", "success");
      closeForm();
    } catch (err) {
      console.log("Wystąpił błąd", err);
      showPopup("Ups, coś poszło nie tak.", "error");
    }
  };

  return (
    <form
      onClick={(e) => e.stopPropagation()}
      onSubmit={submitForm}
      className="relative w-full mx-2 flex flex-col items-center justify-center px-10 py-12 custom-background rounded-xl text-sm shadow-md md:mx-10 md:text-md lg:flex-row-reverse lg:justify-around lg:gap-6 lg:max-w-300 lg:py-30 xl:py-36 xl:px-14"
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
      <div>
        <img
          id="vehicle-photo"
          src={config.defaultPhoto}
          alt="Zdjęcie wybranego pojazdu"
          className="mt-4 w-full max-w-100 shadow-md rounded-md md:max-w-120 lg:mt-0"
        />
      </div>
      <div className="my-10 max-w-120 md:max-w-140 lg:max-w-120 lg:my-0">
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
      </div>
      <button
        type="submit"
        className="py-2 mx-auto w-40 text-lg rounded-md bg-linear-to-br from-[#993434] to-[#D71F1F] cursor-pointer hover:from-[#D71F1F] hover:to-[#993434] transition-colors duration-300 shadow-md lg:absolute lg:bottom-0 lg:left-[50%] lg:translate-x-[-50%] lg:mb-8"
      >
        Dodaj
      </button>
    </form>
  );
}
