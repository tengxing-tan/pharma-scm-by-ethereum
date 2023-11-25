import prisma from 'lib/prisma-client'

export async function getStakeholders() {
    try {
        const result = await prisma.stakeholder.findMany();
        return result;
    } catch (error) {
        console.error('Error fetching stakeholder:', error);
    }
}
