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
};
