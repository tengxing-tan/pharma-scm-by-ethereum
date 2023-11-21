'use server';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getAllDrugs() {
  try {
    const data = await prisma.drug.findMany();

    return {
      props: { data },
      revalidate: 60, // Optional: re-generate every 60 seconds
    };
  } catch (error) {
    console.log('Error: ', error);
  }
}
