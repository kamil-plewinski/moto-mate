import WalletIcon from "../../icons/WalletIcon";
import { Plus } from "lucide-react";

export default function AddExpense() {
  return (
    <div className="p-4 w-full custom-background md:px-10">
      <div className="flex items-center gap-4 mt-3">
        <WalletIcon />
        <h2 className="font-semibold text-lg sm:text-xl">Dodaj nowy wydatek</h2>
      </div>
      <div className="my-6 h-px w-full bg-white/30"></div>
      <form className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        <div>
          <label htmlFor="expense-name">Nazwa Wydatku</label> <br />
          <input
            type="text"
            id="expense-name"
            name="expense-name"
            placeholder="np. Naprawa / OC"
            required
            className="border border-gray-300 w-full max-w-60"
          />
        </div>
        <div>
          <label htmlFor="category">Kategoria</label> <br />
          <select
            id="category"
            name="category"
            className="border border-gray-300 bg-gray-400 w-full max-w-60"
          >
            <option value="service-repair">Serwis / Naprawa</option>
            <option value="parts">Części zamienne</option>
            <option value="fluids">Płyny eksploatacyjne</option>
            <option value="insurance">Ubezpieczenie</option>
            <option value="other">Inne koszty</option>
          </select>
        </div>
        <div>
          <label htmlFor="cost">Koszt (PLN)</label> <br />
          <input
            type="number"
            id="cost"
            name="cost"
            placeholder="0,00 ,-"
            required
            className="border border-gray-300 w-full max-w-60"
          />
        </div>
        <div>
          <label htmlFor="date">Data</label> <br />
          <input
            type="date"
            id="date"
            name="date"
            required
            className="border border-gray-300 w-full max-w-60"
          />
        </div>
        <div>
          <label htmlFor="recent-odometer">Aktualny przebieg</label> <br />
          <input
            type="number"
            id="recent-odometer"
            name="recent-odometer"
            placeholder="np. 128000 km"
            required
            className="border border-gray-300 w-full max-w-60"
          />
        </div>
        <div className="my-6 h-px w-full col-span-full bg-white/30"></div>
        <button
          type="submit"
          className="col-span-full flex items-center justify-center gap-1 ml-auto font-semibold bg-red-500 py-2 px-8 cursor-pointer"
        >
          <Plus />
          Dodaj wydatek
        </button>
      </form>
    </div>
  );
}
