import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getShipments() {
    try {
        const data = await prisma.shipment.findMany();
        return data;
    } catch (error) {
        console.error('Error fetching shipment:', error);
    }
}