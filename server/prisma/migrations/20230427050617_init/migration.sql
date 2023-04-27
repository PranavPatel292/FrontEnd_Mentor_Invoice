-- CreateTable
CREATE TABLE "Invoices" (
    "id" TEXT NOT NULL,
    "billFromStreetAddress" TEXT NOT NULL,
    "billFromCity" TEXT NOT NULL,
    "billFromPostcode" TEXT NOT NULL,
    "billFromCountry" TEXT NOT NULL,
    "billToStreetAddress" TEXT NOT NULL,
    "billToCity" TEXT NOT NULL,
    "billToPostcode" TEXT NOT NULL,
    "billToCountry" TEXT NOT NULL,
    "billToClientName" TEXT NOT NULL,
    "billToClientEmail" TEXT NOT NULL,
    "invoiceDate" TIMESTAMP(3) NOT NULL,
    "paymentTerms" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,

    CONSTRAINT "Invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Items" (
    "id" TEXT NOT NULL,
    "invoiceId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoices"("id") ON DELETE CASCADE ON UPDATE CASCADE;
