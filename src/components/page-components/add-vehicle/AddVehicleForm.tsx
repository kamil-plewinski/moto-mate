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
    "p-2 max-w-120 border-b border-gray-300/50 focus:outline-none focus:border-red-400";

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
    <div
      onClick={closeForm}
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-10"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={submitForm}
        className="relative w-full top-0 left-0 mx-2 flex flex-col gap-3 p-10 bg-gray-500 lg:max-w-350"
      >
        <button
          type="button"
          onClick={closeForm}
          className="absolute top-0 right-0 m-5 cursor-pointer"
        >
          <X size={36} />
        </button>
        <img
          id="vehicle-photo"
          src={config.defaultPhoto}
          alt="Zdjęcie wybranego pojazdu"
          className="mx-auto w-full max-w-100 md:max-w-110 lg:mr-14 lg:absolute lg:right-0 lg:top-[50%] lg:translate-y-[-50%] lg:max-w-110 xl:max-w-130"
        />
        <label htmlFor="brand" className="mt-8">
          Marka:
        </label>
        <input
          id="brand"
          name="brand"
          type="text"
          placeholder={config.brandPlaceholder}
          className={inputClasses}
          required
        />
        <label htmlFor="model" className="mt-2">
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
        <label htmlFor="year" className="mt-2">
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
        <label htmlFor="odometer" className="mt-2">
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
        <button
          type="submit"
          className="py-2 mt-10 mx-auto w-40 text-lg bg-blue-300 cursor-pointer"
        >
          Dodaj
        </button>
      </form>
    </div>
  );
}
