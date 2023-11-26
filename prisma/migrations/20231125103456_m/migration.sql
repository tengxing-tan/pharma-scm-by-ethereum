/*
  Warnings:

  - You are about to drop the column `shipmentId` on the `DrugBatch` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `DrugBatch` table. All the data in the column will be lost.
  - You are about to drop the `Shipment` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Process" AS ENUM ('UNDERWENT_MIXING_ENCAPSULATION', 'LABELLING_PACKAGING', 'READY_TO_SHIP', 'SHIPPED', 'STORE_IN_WAREHOUSE', 'DELIVERED', 'REJECTED', 'RETURNED');

-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'SUPPLIER';

-- DropForeignKey
ALTER TABLE "DrugBatch" DROP CONSTRAINT "DrugBatch_shipmentId_fkey";

-- DropIndex
DROP INDEX "Stakeholder_name_key";

-- AlterTable
ALTER TABLE "Drug" ADD COLUMN     "manufacturerId" INTEGER;

-- AlterTable
ALTER TABLE "DrugBatch" DROP COLUMN "shipmentId",
DROP COLUMN "updated_at",
ADD COLUMN     "importerId" INTEGER,
ADD COLUMN     "wholesalerId" INTEGER;

-- AlterTable
ALTER TABLE "Stakeholder" ALTER COLUMN "phoneNo" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL;

-- DropTable
DROP TABLE "Shipment";

-- DropEnum
DROP TYPE "ShipmentStatus";

-- CreateTable
CREATE TABLE "ProductStatus" (
    "id" SERIAL NOT NULL,
    "drugBatchId" INTEGER NOT NULL,
    "stage" "Role" NOT NULL,
    "process" "Process" NOT NULL,
    "date" TEXT NOT NULL,
    "description" TEXT,
    "address" TEXT,
    "country" TEXT,

    CONSTRAINT "ProductStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manufacturer" (
    "id" SERIAL NOT NULL,
    "stakeholderId" INTEGER NOT NULL,

    CONSTRAINT "Manufacturer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Importer" (
    "id" SERIAL NOT NULL,
    "stakeholderId" INTEGER NOT NULL,

    CONSTRAINT "Importer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wholesaler" (
    "id" SERIAL NOT NULL,
    "stakeholderId" INTEGER NOT NULL,

    CONSTRAINT "Wholesaler_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Manufacturer_stakeholderId_key" ON "Manufacturer"("stakeholderId");

-- CreateIndex
CREATE UNIQUE INDEX "Importer_stakeholderId_key" ON "Importer"("stakeholderId");

-- CreateIndex
CREATE UNIQUE INDEX "Wholesaler_stakeholderId_key" ON "Wholesaler"("stakeholderId");

-- AddForeignKey
ALTER TABLE "Drug" ADD CONSTRAINT "Drug_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DrugBatch" ADD CONSTRAINT "DrugBatch_wholesalerId_fkey" FOREIGN KEY ("wholesalerId") REFERENCES "Wholesaler"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DrugBatch" ADD CONSTRAINT "DrugBatch_importerId_fkey" FOREIGN KEY ("importerId") REFERENCES "Importer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductStatus" ADD CONSTRAINT "ProductStatus_drugBatchId_fkey" FOREIGN KEY ("drugBatchId") REFERENCES "DrugBatch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Manufacturer" ADD CONSTRAINT "Manufacturer_stakeholderId_fkey" FOREIGN KEY ("stakeholderId") REFERENCES "Stakeholder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Importer" ADD CONSTRAINT "Importer_stakeholderId_fkey" FOREIGN KEY ("stakeholderId") REFERENCES "Stakeholder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wholesaler" ADD CONSTRAINT "Wholesaler_stakeholderId_fkey" FOREIGN KEY ("stakeholderId") REFERENCES "Stakeholder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
