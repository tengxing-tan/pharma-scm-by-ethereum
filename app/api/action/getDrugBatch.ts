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

export async function getDrugBatchesByOwner(email: string) {
    try {
        const data = await prisma.drugBatch.findMany({
            where: {
                drug: {
                    owner: { email: email }
                },
            },
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

// order/[batchNo]/page.tsx
export async function getDrugBatchByBatchNo(batchNo: string) {

    const data = await prisma.drugBatch.findUnique({
        where: { batchNo: batchNo },
    });

    if (!data) {
        console.log(`no drug batch found! (by batch no) at ${new Date().toLocaleString()}`);
    }

    console.log(`get drug batch by batch no ok! at ${new Date().toLocaleString()}`);
    return data;
}

export async function getDrugBatchByDrugId(drugId: number) {
    try {
        const data = await prisma.drugBatch.findMany({
            where: {
                drugId: drugId
            },
            include: {
                drug: true,
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
