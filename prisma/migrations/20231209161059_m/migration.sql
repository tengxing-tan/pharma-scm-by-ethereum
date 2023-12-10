/*
  Warnings:

  - The primary key for the `Importer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Manufacturer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Stakeholder` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Wholesaler` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `Drug` DROP FOREIGN KEY `Drug_manufacturerId_fkey`;

-- DropForeignKey
ALTER TABLE `Drug` DROP FOREIGN KEY `Drug_ownerId_fkey`;

-- DropForeignKey
ALTER TABLE `DrugBatch` DROP FOREIGN KEY `DrugBatch_importerId_fkey`;

-- DropForeignKey
ALTER TABLE `DrugBatch` DROP FOREIGN KEY `DrugBatch_wholesalerId_fkey`;

-- DropForeignKey
ALTER TABLE `Importer` DROP FOREIGN KEY `Importer_stakeholderId_fkey`;

-- DropForeignKey
ALTER TABLE `Manufacturer` DROP FOREIGN KEY `Manufacturer_stakeholderId_fkey`;

-- DropForeignKey
ALTER TABLE `Wholesaler` DROP FOREIGN KEY `Wholesaler_stakeholderId_fkey`;

-- AlterTable
ALTER TABLE `Drug` MODIFY `ownerId` VARCHAR(191) NULL,
    MODIFY `manufacturerId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `DrugBatch` MODIFY `wholesalerId` VARCHAR(191) NULL,
    MODIFY `importerId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Importer` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `stakeholderId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Manufacturer` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `stakeholderId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Stakeholder` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Wholesaler` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `stakeholderId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Drug` ADD CONSTRAINT `Drug_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `Stakeholder`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Drug` ADD CONSTRAINT `Drug_manufacturerId_fkey` FOREIGN KEY (`manufacturerId`) REFERENCES `Manufacturer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DrugBatch` ADD CONSTRAINT `DrugBatch_wholesalerId_fkey` FOREIGN KEY (`wholesalerId`) REFERENCES `Wholesaler`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DrugBatch` ADD CONSTRAINT `DrugBatch_importerId_fkey` FOREIGN KEY (`importerId`) REFERENCES `Importer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Manufacturer` ADD CONSTRAINT `Manufacturer_stakeholderId_fkey` FOREIGN KEY (`stakeholderId`) REFERENCES `Stakeholder`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Importer` ADD CONSTRAINT `Importer_stakeholderId_fkey` FOREIGN KEY (`stakeholderId`) REFERENCES `Stakeholder`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Wholesaler` ADD CONSTRAINT `Wholesaler_stakeholderId_fkey` FOREIGN KEY (`stakeholderId`) REFERENCES `Stakeholder`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Stakeholder`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Stakeholder`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
