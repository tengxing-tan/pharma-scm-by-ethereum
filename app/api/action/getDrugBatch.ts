import prisma from 'lib/prisma-client'

export async function getDrugBatches() {
    try {
        const data = await prisma.drugBatch.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                drug: {
                    include: {
                        owner: true
                    }
                }
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
                drug: {
                    include: {
                        owner: true,
                        manufacturer: {
                            include: {
                                info: true
                            }
                        }
                    }
                },
            }
        });

        console.log("get drug batch by batch no ok!");
        return data;
    } catch (error) {
        console.error('Error fetching drug batch by batch no:', error);
    }
}

export async function getDrugBatchByDrugId(drugId: number) {
    try {
        const data = await prisma.drugBatch.findMany({
            where: {
                drugId: drugId
            },
            include: {
                drug: true,
                status: true
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        console.log("Get drug batch by drug id ok!")
        return data;
    } catch (error) {
        console.error('Error fetching drug batch by batch no:', error);
    }
}
