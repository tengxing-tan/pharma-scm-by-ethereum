import { PrismaClient } from '@prisma/client'
import { map } from 'zod';
const prisma = new PrismaClient()

export async function getShipments() {
    try {
        const data = await prisma.shipment.findMany({
            include: {
                drugBatches: true,
            }
        });
        return data;
    } catch (error) {
        console.error('Error fetching shipment:', error);
    }
}

export async function getShipmentByTrackingNo(trackingNo: string) {
    try {
        const data = await prisma.shipment.findUnique({
            where: {
                trackingNo: trackingNo
            },
            include: {
                drugBatches: {
                    include: {
                        drug: true
                    }
                }
            },
        });

        return data;
    } catch (error) {
        console.error('Error fetching shipment:', error);
    }
}
