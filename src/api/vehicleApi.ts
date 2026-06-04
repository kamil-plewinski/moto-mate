import { api } from "./api";
import type {
  CreateVehicleDto,
  VehicleType,
} from "../components/page-components/my-vehicles/vehicleType";

export const createVehicle = async (newVehicle: CreateVehicleDto) => {
  const response = await api.post("/vehicles", newVehicle);

  return response.data;
};

export const getVehicles = async (): Promise<VehicleType[]> => {
  const response = await api.get<VehicleType[]>("/vehicles");

  return response.data;
};

export const updateVehicle = async (id: number, isActive: boolean) => {
  const response = await api.patch(`/vehicles/${id}`, {
    isActive,
  });

  return response.data;
};

export const deleteVehicleReq = async (id: number) => {
  const response = await api.delete(`/vehicles/${id}`);

  return response.data;
};
