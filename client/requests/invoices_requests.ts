import { useMutation } from "react-query";
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

export const makeInvoicePaid = () => {
  return useMutation((id: any) => {
    return api.post("/madeInvoicePaid", null, {
      params: { invoiceId: id },
    });
  });
};
