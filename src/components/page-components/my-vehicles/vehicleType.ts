import type { ExpenseType, CreateExpenseDto } from "../expenses/expenseType";

export type VehicleType = {
  id: number;
  type: "car" | "motorcycle";
  photo: string;
  brand: string;
  model: string;
  year: number;
  odometer: number;
  engine: string;
  isActive: boolean;
  expenses: ExpenseType[];
};

export type CreateVehicleDto = {
  type: "car" | "motorcycle";
  photo: string;
  brand: string;
  model: string;
  year: number;
  odometer: number;
  engine: string;
  isActive: boolean;
  expenses: CreateExpenseDto[];
};
