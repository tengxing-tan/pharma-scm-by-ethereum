import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function drugBatchSeeder() {

    try {
        // Seed drugBatchs
        for (let i = 1; i <= 100; i++) {
            await prisma.drugBatch.create({
                data: {
                    drugId: i % 22 + 1,
                    batchNo: new Date().toISOString().substring(0, 10).split('-').join('').concat(i.toString()),
                    quantity: Math.floor(Math.random() * 1000) + 1, // Random quantity
                    manufactureDate: `01/${i % 12 + 1}/22`, // Random MM/YY format
                    expiryDate: `01/${(i + 6) % 12 + 1}/23`, // Random MM/YY format
                    wholesalerId: 1,
                    importerId: 1,
                    status: {
                        create: {
                            stage: Role.IMPORTER,
                            process: Process.UNDERWENT_MIXING_ENCAPSULATION,
                            date: new Date().toISOString().substring(0, 10),
                            country: 'Malaysia',
                            address: 'Pekan, Pahang',
                            toWhom: 'RANBAXY (INDONESIA) SDN. BHD.',
                            toCountry: 'Indonesia',
                            toAddress: 'Jakarta'
                        }
                    }
                },
            });
        }
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

enum Role {
    SUPPLIER = "SUPPLIER",
    MANUFACTURER = "MANUFACTURER",
    IMPORTER = "IMPORTER",
    WHOLESALER = "WHOLESALER",
}

enum Process {
    // manufacturing & packaging
    UNDERWENT_MIXING_ENCAPSULATION = "UNDERWENT_MIXING_ENCAPSULATION",
    LABELLING_PACKAGING = "LABELLING_PACKAGING",
    // importer / warehousing
    READY_TO_SHIP = "READY_TO_SHIP",
    SHIPPED = "SHIPPED",
    STORE_IN_WAREHOUSE = "STORE_IN_WAREHOUSE",
    DELIVERED = "DELIVERED",
    REJECTED = "REJECTED",
    RETURNED = "RETURNED",
}
