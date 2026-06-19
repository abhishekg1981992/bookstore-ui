import api from "./api";

export const getCart = async () => {
  const response = await api.get("/api/cart");
  return response.data;
};

export const updateCartItem = async (
  id,
  quantity
) => {

  await api.put(`/api/cart/items/${id}`, {
    quantity
  });
};

export const deleteCartItem = async (id) => {

  await api.delete(`/api/cart/items/${id}`);
};