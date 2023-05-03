import api from "./axios_client";

export const getAllInvoices = async () => {
  const data = await api.get("/getAllInvoices");
  return data.data;
};
