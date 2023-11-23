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
                },
            });
        }
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}
