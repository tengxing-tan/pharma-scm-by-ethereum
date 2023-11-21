-- CreateEnum
CREATE TYPE "VerifyStatus" AS ENUM ('VERIFIED', 'PENDING', 'REJECTED');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MANUFACTURER', 'IMPORTER', 'WHOLESALER');

-- CreateEnum
CREATE TYPE "ShipmentStatus" AS ENUM ('OUT_FOR_DELIVERY', 'IN_TRANSIT', 'ARRIVED_AT_DESTINATION', 'DELIVERED', 'DELAYED', 'HELD_FOR_INSPECTION', 'RETURNED_OR_REJECTED', 'LOST_OR_DAMAGED');

-- CreateTable
CREATE TABLE "Drug" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "activeIngredient" TEXT NOT NULL,
    "dosageForm" TEXT NOT NULL,
    "consumerMedicineInfo" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Drug_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DrugBatch" (
    "id" SERIAL NOT NULL,
    "drugId" INTEGER NOT NULL,
    "batchNo" TEXT NOT NULL,
    "quantity" INTEGER,
    "manufactureDate" TEXT NOT NULL,
    "expiryDate" TEXT NOT NULL,
    "shipmentId" INTEGER,

    CONSTRAINT "DrugBatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipment" (
    "id" SERIAL NOT NULL,
    "status" "ShipmentStatus" NOT NULL,

    CONSTRAINT "Shipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stakeholder" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "postcode" TEXT,
    "state" TEXT,
    "country" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "status" "VerifyStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stakeholder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DrugBatch_drugId_key" ON "DrugBatch"("drugId");

-- CreateIndex
CREATE UNIQUE INDEX "Stakeholder_name_key" ON "Stakeholder"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Stakeholder_email_key" ON "Stakeholder"("email");

-- AddForeignKey
ALTER TABLE "DrugBatch" ADD CONSTRAINT "DrugBatch_drugId_fkey" FOREIGN KEY ("drugId") REFERENCES "Drug"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DrugBatch" ADD CONSTRAINT "DrugBatch_shipmentId_fkey" FOREIGN KEY ("shipmentId") REFERENCES "Shipment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
