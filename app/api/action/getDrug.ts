import z from 'zod';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getDrugs() {
  try {
    const data = await prisma.drug.findMany();
    return data;
  } catch (error) {
    console.error('Error fetching drugs:', error);
  }
}

export async function getDrugById(id: number) {
  try {
    const data = await prisma.drug.findUnique({
      where: {
        id: 1
      }
    });
    return data;
  } catch (error) {
    console.error('Error fetching drug:', error);
  }
}

export async function getDrugBySearchKey(type: string, searchKey: string) {
  const validatedData = z.object({
    type: z.string(),
    searchKey: z.string().min(1),
  }).parse(Object({ type: type, searchKey: searchKey }));

  let data = null;
  try {
    const queryType = validatedData.type;
    const searchKey = validatedData.searchKey;

    if (queryType === 'regNo') {
      data = await prisma.drug.findMany({
        where: {
          registrationNo: {
            contains: searchKey.toUpperCase()
          }
        }
      });
    }
    if (queryType === 'productName') {
      data = await prisma.drug.findMany({
        where: {
          name: {
            contains: searchKey.toUpperCase()
          }
        }
      });
    }
    if (queryType === 'ingredient') {
      data = await prisma.drug.findMany({
        where: {
          activeIngredient: {
            contains: searchKey.toUpperCase()
          }
        }
      });
    }

    console.log("Trace product ok!")

    return data
  } catch (error) {
    console.error('Error fetching registrationNo:', error);
  }
}

