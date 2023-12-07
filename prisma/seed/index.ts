import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { stakeholderSeeder } from './stakeholderSeeder'
import { drugSeeder } from './drugSeeder'
import { drugBatchSeeder } from './drugBatchSeeder'

async function main() {
    await stakeholderSeeder(prisma)
    console.log('Stakeholder seeding complete.')

    await drugSeeder(prisma)
    console.log('Drug seeding complete.')

    await drugBatchSeeder(prisma)
    console.log('DrugBatch seeding complete.')
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
