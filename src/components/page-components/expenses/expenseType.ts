export type CreateExpenseDto = {
  name: string;
  category: string;
  cost: number;
  date: string;
  odometer: number;
};

export type ExpenseType = {
  id: number;
  name: string;
  category: string;
  cost: number;
  date: string;
  odometer: number;
};
