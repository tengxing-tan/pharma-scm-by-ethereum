import prisma from "lib/prisma-client"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const batchNo = searchParams.get('batchNo')
    const stakeholderId = searchParams.get('stakeholderId')

    const result = (batchNo) ? await getDrugBatch(batchNo)
        : (stakeholderId) ? await getStakeholders(stakeholderId)
            : {}

    return new Response(JSON.stringify(result))
}

export async function getDrugBatch(batchNo: string) {
    const result = await prisma.drugBatch.findUnique({
        where: {
            batchNo: batchNo
        },
        include: {
            drug: {
                include: {
                    owner: true,
                    manufacturer: { include: { info: true } }
                }
            },
            activities: true,
        }
    })
    return result
}

export async function getStakeholders(stakeholderId: string) {
    const result = await prisma.stakeholder.findUnique({
        where: {
            id: Number(stakeholderId)
        },
    })
    return result
}
