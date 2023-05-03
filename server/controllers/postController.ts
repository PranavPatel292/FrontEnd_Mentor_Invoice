import { Request, Response } from "express";
import { prisma } from "../prisma/prismaClient";

// TODO: use validation before creating a new invoice
const createInvoice = async (data: any) => {
  try {
    const {
      billFromStreetAddress,
      billFromCity,
      billFromPostcode,
      billFromCountry,
      billToStreetAddress,
      billToCity,
      billToPostcode,
      billToCountry,
      billToClientName,
      billToClientEmail,
      invoiceDate,
      paymentTerms,
      projectDescription,
      status,
      items,
    } = data;

    prisma.$transaction(async () => {
      const invoice = await prisma.invoices.create({
        data: {
          billFromStreetAddress,
          billFromCity,
          billFromPostcode,
          billFromCountry,
          billToStreetAddress,
          billToCity,
          billToPostcode,
          billToCountry,
          billToClientName,
          billToClientEmail,
          invoiceDate,
          paymentTerms,
          projectDescription,
          status,
        },
      });

      if (!invoice) {
        return false;
      }

      for (const item of items) {
        await prisma.items.create({
          data: {
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            invoiceId: invoice.id,
          },
        });
      }
    });

    return true;
  } catch (error) {
    return false;
  }
};

export const saveInvoice = async (req: Request, res: Response) => {
  const data = { ...req.body, status: "PENDING" };

  const isInvoiceSaved = createInvoice(data);

  if (!isInvoiceSaved) {
    res.status(500).send("Something went wrong");
  }
  res.status(200).send("Invoice saved");
};

export const draftInvoice = async (req: Request, res: Response) => {
  const data = { ...req.body, status: "DRAFT" };

  const isInvoiceSaved = createInvoice(data);

  if (!isInvoiceSaved) {
    res.status(500).send("Something went wrong");
  }
  res.status(200).send("Invoice saved");
};
