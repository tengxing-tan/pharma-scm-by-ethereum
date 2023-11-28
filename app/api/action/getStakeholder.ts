import prisma from 'lib/prisma-client'

export async function getStakeholders() {
    try {
        const result = await prisma.stakeholder.findMany();
        return result;
    } catch (error) {
        console.error('Error fetching stakeholder:', error);
    }
}

export async function getManufacturers() {
    try {
        const data = await prisma.manufacturer.findMany({
            include: {
                info: true
            }
        })
        return data
    } catch (error) {
        console.error('Error fetching manufacturer:', error);
    }
}
