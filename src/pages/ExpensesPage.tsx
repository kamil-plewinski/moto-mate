import AddExpense from "../components/page-components/expenses/AddExpense";
import ExpensesHistory from "../components/page-components/expenses/ExpensesHistory";
import VehicleSelector from "../components/page-components/expenses/VehicleSelector";

export default function ExpensesPage() {
  return (
    <>
      <h1>Wydatki</h1>
      <div className="flex flex-col items-center gap-6">
        <VehicleSelector />
        <AddExpense />
        <ExpensesHistory />
      </div>
    </>
  );
}
