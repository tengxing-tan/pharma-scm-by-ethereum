import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function shipmentSeeder() {

    const STATUS = [
        "OUT_FOR_DELIVERY",
        "IN_TRANSIT",
        "ARRIVED_AT_DESTINATION",
        "DELIVERED",
        "DELAYED",
        "HELD_FOR_INSPECTION",
        "RETURNED_OR_REJECTED",
        "LOST_OR_DAMAGED",
    ]

    try {
        // Seed shipments
        for (let i = 1; i <= 30; i++) {
            const shipment = await prisma.shipment.create({
                data: {
                    trackingNo: `0000${i}`,
                    status: STATUS[i % 8],
                },
            });

            const drugBatches = await prisma.drugBatch.findMany({
                take: 100, // Adjust as needed
            });

            await prisma.shipment.update({
                where: {
                    id: shipment.id,
                },
                data: {
                    drugBatches: {
                        connect: [
                            { id: i }, { id: i + 30 }, { id: i + 60 },
                        ]
                    },
                },
            });
        }
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}
