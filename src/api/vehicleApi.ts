import axios from "axios";
import type {
  CreateVehicleDto,
  VehicleType,
} from "../components/page-components/my-vehicles/vehicleType";

export const createVehicle = async (newVehicle: CreateVehicleDto) => {
  const response = await axios.post(
    "http://localhost:3001/vehicles",
    newVehicle,
  );

  return response.data;
};

export const getVehicles = async (): Promise<VehicleType[]> => {
  const response = await axios.get<VehicleType[]>(
    "http://localhost:3001/vehicles",
  );

  return response.data;
};

export const updateVehicle = async (id: number, isActive: boolean) => {
  const response = await axios.patch(`http://localhost:3001/vehicles/${id}`, {
    isActive,
  });

  return response.data;
};

export const deleteVehicleReq = async (id: number) => {
  const response = await axios.delete(`http://localhost:3001/vehicles/${id}`);

  return response.data;
};
