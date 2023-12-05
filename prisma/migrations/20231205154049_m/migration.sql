/*
  Warnings:

  - You are about to drop the column `toAddress` on the `ProductStatus` table. All the data in the column will be lost.
  - You are about to drop the column `toCountry` on the `ProductStatus` table. All the data in the column will be lost.
  - You are about to drop the column `toWhom` on the `ProductStatus` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductStatus" DROP COLUMN "toAddress",
DROP COLUMN "toCountry",
DROP COLUMN "toWhom",
ADD COLUMN     "company" TEXT;
