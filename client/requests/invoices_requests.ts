import api from "./axios_client";

export const getAllInvoices = async () => {
  const data = await api.get("/getAllInvoices");
  return data.data;
};

export const getInvoice = async (id: any) => {
  const data = await api.get("/getInvoice", {
    params: {
      invoiceId: id,
    },
  });
  return data.data[0];
};
