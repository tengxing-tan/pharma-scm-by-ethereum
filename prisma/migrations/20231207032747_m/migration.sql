-- CreateTable
CREATE TABLE `Drug` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `registrationNo` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `activeIngredient` VARCHAR(191) NOT NULL,
    `dosageForm` VARCHAR(191) NOT NULL,
    `consumerMedicineInfo` VARCHAR(191) NULL,
    `ownerId` INTEGER NULL,
    `manufacturerId` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Drug_registrationNo_key`(`registrationNo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DrugBatch` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `drugId` INTEGER NOT NULL,
    `batchNo` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NULL,
    `manufactureDate` VARCHAR(191) NOT NULL,
    `expiryDate` VARCHAR(191) NOT NULL,
    `wholesalerId` INTEGER NULL,
    `importerId` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `DrugBatch_batchNo_key`(`batchNo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductStatus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `drugBatchId` INTEGER NOT NULL,
    `stage` ENUM('SUPPLIER', 'MANUFACTURER', 'IMPORTER', 'WHOLESALER') NOT NULL,
    `process` ENUM('UNDERWENT_MIXING_ENCAPSULATION', 'LABELLING_PACKAGING', 'READY_TO_SHIP', 'SHIPPED', 'STORE_IN_WAREHOUSE', 'DELIVERED', 'REJECTED', 'RETURNED') NOT NULL,
    `description` VARCHAR(191) NULL,
    `date` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Manufacturer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stakeholderId` INTEGER NOT NULL,

    UNIQUE INDEX `Manufacturer_stakeholderId_key`(`stakeholderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Importer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stakeholderId` INTEGER NOT NULL,

    UNIQUE INDEX `Importer_stakeholderId_key`(`stakeholderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Wholesaler` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stakeholderId` INTEGER NOT NULL,

    UNIQUE INDEX `Wholesaler_stakeholderId_key`(`stakeholderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stakeholder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phoneNo` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `postcode` VARCHAR(191) NULL,
    `state` VARCHAR(191) NULL,
    `country` VARCHAR(191) NOT NULL,
    `role` ENUM('SUPPLIER', 'MANUFACTURER', 'IMPORTER', 'WHOLESALER') NOT NULL,
    `status` ENUM('VERIFIED', 'PENDING', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Stakeholder_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Drug` ADD CONSTRAINT `Drug_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `Stakeholder`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Drug` ADD CONSTRAINT `Drug_manufacturerId_fkey` FOREIGN KEY (`manufacturerId`) REFERENCES `Manufacturer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DrugBatch` ADD CONSTRAINT `DrugBatch_drugId_fkey` FOREIGN KEY (`drugId`) REFERENCES `Drug`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DrugBatch` ADD CONSTRAINT `DrugBatch_wholesalerId_fkey` FOREIGN KEY (`wholesalerId`) REFERENCES `Wholesaler`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DrugBatch` ADD CONSTRAINT `DrugBatch_importerId_fkey` FOREIGN KEY (`importerId`) REFERENCES `Importer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductStatus` ADD CONSTRAINT `ProductStatus_drugBatchId_fkey` FOREIGN KEY (`drugBatchId`) REFERENCES `DrugBatch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Manufacturer` ADD CONSTRAINT `Manufacturer_stakeholderId_fkey` FOREIGN KEY (`stakeholderId`) REFERENCES `Stakeholder`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Importer` ADD CONSTRAINT `Importer_stakeholderId_fkey` FOREIGN KEY (`stakeholderId`) REFERENCES `Stakeholder`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Wholesaler` ADD CONSTRAINT `Wholesaler_stakeholderId_fkey` FOREIGN KEY (`stakeholderId`) REFERENCES `Stakeholder`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
