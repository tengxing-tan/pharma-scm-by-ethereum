-- AlterTable
ALTER TABLE "Drug" ADD COLUMN     "ownerId" INTEGER;

-- AddForeignKey
ALTER TABLE "Drug" ADD CONSTRAINT "Drug_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Stakeholder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
