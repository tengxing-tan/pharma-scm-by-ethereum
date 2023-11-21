/*
  Warnings:

  - A unique constraint covering the columns `[registrationNo]` on the table `Drug` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[batchNo]` on the table `DrugBatch` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[trackingNo]` on the table `Shipment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `registrationNo` to the `Drug` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trackingNo` to the `Shipment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Drug" ADD COLUMN     "registrationNo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Shipment" ADD COLUMN     "trackingNo" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Drug_registrationNo_key" ON "Drug"("registrationNo");

-- CreateIndex
CREATE UNIQUE INDEX "DrugBatch_batchNo_key" ON "DrugBatch"("batchNo");

-- CreateIndex
CREATE UNIQUE INDEX "Shipment_trackingNo_key" ON "Shipment"("trackingNo");
