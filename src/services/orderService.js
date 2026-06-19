import api from "./api";

export const checkout = async () => {
  const response = await api.post("/api/orders");
  return response.data;
};