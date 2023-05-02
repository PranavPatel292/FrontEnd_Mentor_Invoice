/*
  Warnings:

  - Added the required column `status` to the `Invoices` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `paymentTerms` on the `Invoices` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PaymentTerms" AS ENUM ('NEXTDAY', 'INWEEK', 'INFORTNIGHT', 'INMONTH');

-- CreateEnum
CREATE TYPE "Staus" AS ENUM ('DRAFT', 'SAVE');

-- AlterTable
ALTER TABLE "Invoices" ADD COLUMN     "status" "Staus" NOT NULL,
DROP COLUMN "paymentTerms",
ADD COLUMN     "paymentTerms" "PaymentTerms" NOT NULL;
