import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getDrugBatches() {
    try {
        const data = await prisma.drugBatch.findMany({
            orderBy: {
                updatedAt: 'desc'
            },
            include: {
                drug: true
            },
        });
        return data;
    } catch (error) {
        console.error('Error fetching drug batches:', error);
    }
}

export async function getDrugBatchByBatchNo(batchNo: string) {
    try {
        const data = await prisma.drugBatch.findUnique({
            where: {
                batchNo: batchNo
            },
            include: {
                drug: true,
                shipment: true
            }
        });

        // console.log("get drug batch by batch no: ", data);
        return data;
    } catch (error) {
        console.error('Error fetching drug batch by batch no:', error);
    }
}

