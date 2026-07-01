import { useState, useEffect } from "react";
import { getVehicles, updateVehicle } from "../api/vehicleApi";
import { usePopup } from "../components/popup/usePopup";
import AddExpense from "../components/page-components/expenses/AddExpense";
import ExpensesHistory from "../components/page-components/expenses/ExpensesHistory";
import VehicleSelector from "../components/page-components/expenses/VehicleSelector";
import type { VehicleType } from "../components/page-components/my-vehicles/vehicleType";
import { addNewExpense } from "../api/vehicleApi";
import type { CreateExpenseDto } from "../components/page-components/expenses/expenseType";

export default function ExpensesPage() {
  const [vehiclesList, setVehiclesList] = useState<VehicleType[]>([]);

  const { showPopup } = usePopup();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data = await getVehicles();

        setVehiclesList(data);
      } catch (err) {
        console.error(err, "Nie udało się pobrać listy pojazdów");
      }
    };

    fetchVehicles();
  }, []);

  const setActiveVehicle = async (id: number, selectedVehicle: VehicleType) => {
    try {
      await Promise.all(
        vehiclesList.map((vehicle) => {
          const isActive = vehicle.id === id;

          return updateVehicle(vehicle.id, isActive);
        }),
      );
      setVehiclesList((prev) => {
        return prev.map((vehicle) => ({
          ...vehicle,
          isActive: vehicle.id === id,
        }));
      });
      showPopup(
        `Aktywny pojazd został zmieniony na ${selectedVehicle.brand} ${selectedVehicle.model}.`,
        "favourite",
      );
    } catch (err) {
      showPopup(
        "Wystąpił błąd. Nie udało się wybrać aktywnego pojazdu.",
        "error",
      );
      console.error(
        err,
        `Nie udało się ustawić ${selectedVehicle.brand} jako aktywny pojazd`,
      );
    }
  };

  const activeVehicle: VehicleType | undefined = vehiclesList.find(
    (vehicle) => vehicle.isActive === true,
  );

  const handleAddExpense = async (newExpense: CreateExpenseDto) => {
    if (!activeVehicle) {
      return;
    }

    const vehicleId = activeVehicle.id;
    const expenses = activeVehicle.expenses;

    try {
      await addNewExpense(vehicleId, expenses, newExpense);
    } catch (err) {
      console.log("Nie udało się dodać wydatku", err);
    }

    setVehiclesList((prev) => {
      return prev.map((vehicle) => {
        if (vehicle.id === activeVehicle.id) {
          return {
            ...vehicle,
            expenses: [...vehicle.expenses, newExpense],
          };
        }
        return vehicle;
      });
    });

    console.log(
      "Stara lista Wydatków:",
      expenses,
      "Dodano wydatek dla pojazdu:",
      activeVehicle.brand,
      "Nowy wydatek to:",
      newExpense,
      "Najświeższa lista wydatków:",
      expenses,
    );
  };

  return (
    <>
      <h1>Wydatki</h1>
      <div className="flex flex-col items-center gap-6 pb-26">
        <VehicleSelector
          vehiclesList={vehiclesList}
          setActiveVehicle={setActiveVehicle}
          activeVehicle={activeVehicle}
        />
        <AddExpense handleAddExpense={handleAddExpense} />
        <ExpensesHistory />
      </div>
    </>
  );
}
