import { Request, Response } from "express";
import { prisma } from "../prisma/prismaClient";

export const getAllInvoices = async (_: Request, res: Response) => {
  try {
    const result = await prisma.$queryRaw`
      SELECT "Invoices"."id", "Invoices"."billToClientName", "Invoices"."invoiceDate", "Invoices"."status", COALESCE(SUM("Items"."price" * "Items"."quantity"), 0) AS "totalPrice"
      FROM "Invoices"
      LEFT JOIN "Items" ON "Items"."invoiceId" = "Invoices"."id"
      GROUP BY "Invoices"."id"
    `;

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

export const getInvoice = async (req: Request, res: Response) => {
  try {
    const { invoiceId } = req.query;

    const result = await prisma.invoices.findMany({
      where: {
        id: invoiceId as string,
      },
      include: {
        item: true,
      },
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

export const getFilterInvoices = async (req: Request, res: Response) => {
  try {
    const { filterBy } = req.query;

    switch (filterBy) {
      case "SAVE": {
        const result = await prisma.$queryRaw`
      SELECT "Invoices"."id", "Invoices"."billToClientName", "Invoices"."invoiceDate", "Invoices"."status", COALESCE(SUM("Items"."price"), 0) AS "totalPrice"
      FROM "Invoices"
      LEFT JOIN "Items" ON "Items"."invoiceId" = "Invoices"."id"
      WHERE "Invoices"."status" = 'SAVE'
      GROUP BY "Invoices"."id"
    `;
        res.status(200).send(result);
        break;
      }
      case "DRAFT": {
        const result = await prisma.$queryRaw`
        SELECT "Invoices"."id", "Invoices"."billToClientName", "Invoices"."invoiceDate", "Invoices"."status", COALESCE(SUM("Items"."price"), 0) AS "totalPrice"
        FROM "Invoices"
        LEFT JOIN "Items" ON "Items"."invoiceId" = "Invoices"."id"
        WHERE "Invoices"."status" = 'DRAFT'
        GROUP BY "Invoices"."id"
      `;
        res.status(200).send(result);
        break;
      }
      case "PENDING": {
        const result = await prisma.$queryRaw`
        SELECT "Invoices"."id", "Invoices"."billToClientName", "Invoices"."invoiceDate", "Invoices"."status", COALESCE(SUM("Items"."price"), 0) AS "totalPrice"
        FROM "Invoices"
        LEFT JOIN "Items" ON "Items"."invoiceId" = "Invoices"."id"
        WHERE "Invoices"."status" = 'PENDING'
        GROUP BY "Invoices"."id"
      `;
        res.status(200).send(result);
        break;
      }
      default:
        res.status(404).send("Invalid filter");
        break;
    }
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};
