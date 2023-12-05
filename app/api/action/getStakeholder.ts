import prisma from 'lib/prisma-client'

export async function getStakeholders() {
    try {
        const data = await prisma.stakeholder.findMany();
        console.log('Get stakeholders OK!');

        return data;
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
export async function getStakeholdersByRole(role: string) {

    const data = (role === "MANUFACTURER") ? await prisma.manufacturer.findMany({
        include: {
            info: true
        }
    }) : (role === "IMPORTER") ? await prisma.importer.findMany({
        include: {
            info: true
        }
    }) : (role === "WHOLESALER") ? await prisma.wholesaler.findMany({
        include: {
            info: true
        }
    }) : null

    if (!data) {
        console.log("Get stakeholders by role OK!")
    }

    return data
}
