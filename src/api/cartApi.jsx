import axios from "axios";

const cartApi = axios.create({
  baseURL: "https://shopmop.herokuapp.com",
});
export const getCart = async () => {
  const response = await cartApi.get("/cart");
  return response.data;
};
export const addProduct = async (product) => {
  return await cartApi.post("/cart", product);
};

export const deleteProduct = async ({ id }) => {
  return await cartApi.delete(`/cart/${id}`, id);
};

export default cartApi;
