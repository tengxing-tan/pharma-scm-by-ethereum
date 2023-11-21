import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { stakeholderSeeder } from './stakeholderSeeder'
import { drugSeeder } from './drugSeeder'
import { shipmentSeeder } from './shipmentSeeder'
import { drugBatchSeeder } from './drugBatchSeeder'

async function main() {
    const stakeholders = await stakeholderSeeder()
    console.log('Stakeholder seeding complete.')

    const drugs = await drugSeeder()
    console.log('Drug seeding complete.')

    const drugBatches = await drugBatchSeeder()
    console.log('DrugBatch seeding complete.')


    const shipments = await shipmentSeeder()
    console.log('Shipment seeding complete.')
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
