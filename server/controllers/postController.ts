import { Request, Response } from "express";
import { prisma } from "../prisma/prismaClient";

// TODO: use validation before creating a new invoice
export const createInvoice = async (req: Request, res: Response) => {
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
    } = req.body;

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
        res.status(500).send("Something went wrong");
        return;
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

    res.status(200).send("Created a new invoice");
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};
