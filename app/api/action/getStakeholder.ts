'use server';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getStakeholders() {
    try {
        const result = await prisma.stakeholder.findMany();
        return result;
    } catch (error) {
        console.error('Error fetching stakeholder:', error);
    }
}
