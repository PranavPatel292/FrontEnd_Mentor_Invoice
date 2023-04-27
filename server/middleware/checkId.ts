import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { prisma } from "../prisma/prismaClient";

const schema = yup.object().shape({
  invoiceId: yup.string().required(),
});

// check if the requested id exists or not;
export const validateInvoiceId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const invoiceId = req.query["id"] as string;

    try {
      await schema.validate(invoiceId);
    } catch (error) {
      // bad request
      res.status(400).send("Invoice id required");
      return;
    }

    const result = await prisma.invoices.findFirst({
      where: {
        id: invoiceId,
      },
    });

    if (!result) {
      // not found error
      res.status(404).send("Invoice id not found");
    }

    next();
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};
