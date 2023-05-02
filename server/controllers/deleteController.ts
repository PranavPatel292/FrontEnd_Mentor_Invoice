import { Request, Response } from "express";
import { prisma } from "../prisma/prismaClient";

export const deleteInvoice = async (req: Request, res: Response) => {
  try {
    const { invoiceId } = req.query;

    await prisma.invoices.delete({
      where: { id: invoiceId as string },
    });

    res.status(200).send("Invoice deleted successfully");
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};
