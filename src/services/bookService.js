import api from "./api";

export const getBooks = async () => {
  const response = await api.get("/api/books");
  return response.data;
};