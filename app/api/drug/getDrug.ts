'use server';

import prisma from '#/lib/prisma';

export async function getAllDrugs() {
  try {
    const drugs = await prisma.drug.findMany();
    return drugs;
  } catch (error) {
    console.error('Error fetching drugs:', error);
  }
}
