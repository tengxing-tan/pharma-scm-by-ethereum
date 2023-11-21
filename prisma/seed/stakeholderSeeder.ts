import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function stakeholderSeeder() {

    try {
        const ROLE = ["MANUFACTURER", "IMPORTER", "WHOLESALER"]
        const STATUS = ["PENDING", "VERIFIED", "REJECTED"]

        // Seed Stakeholders
        await prisma.stakeholder.createMany({
            data: Array.from({ length: 30 }, (_, index) => ({
                name: `Stakeholder ${index + 1}`,
                phoneNo: `010902342${index + 1}`,
                email: `user${index + 1}@example.com`,
                address: `Address ${index + 1}`,
                postcode: `Postcode ${index + 1}`,
                state: `State ${index + 1}`,
                country: `Country ${index + 1}`,
                role: ROLE[index % 3],
                status: STATUS[index % 3],
            })),
        });

    } catch (error) {
        console.error('Error seeding database:', error);
    }
}
