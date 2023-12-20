'use server'

import z from 'zod';
import prisma from 'lib/prisma-client';

// get all drugs without condition
export async function getDrugs() {
  try {
    const data = await prisma.drug.findMany({
      include: {
        owner: true,
        manufacturer: {
          include: {
            info: true
          }
        }
      }
    });
    return data;
  } catch (error) {
    console.error('Error fetching drugs:', error);
  }
}

// get drugs that under registered by a particular user
export async function getDrugsByOwner(email: string) {
  const data = await prisma.drug.findMany({
    where: {
      owner: {
        email: email
      }
    },
  });
  return data;

}

// get particular drug details
// trace batchno / search
export async function getDrugById(id: number) {
  try {
    const data = await prisma.drug.findUnique({
      where: {
        id: id
      },
    });
    console.log("Get drug by id ok!")
    return data;
  } catch (error) {
    console.error('Error fetching drug:', error);
  }
}

// trace
export async function getDrugBySearchKey(type: string, searchKey: string) {
  const validatedData = z.object({
    type: z.string(),
    searchKey: z.string().min(1),
  }).parse(Object({ type: type, searchKey: searchKey }));

  let data = null;
  try {
    const searchKey = validatedData.searchKey.toUpperCase().trim();

    data = await prisma.drug.findMany({
      where: {
        OR: [
          {
            registrationNo: { contains: searchKey }
          },
          {
            name: { contains: searchKey },
          }, {
            activeIngredient: { contains: searchKey }
          }
        ]
      },
      include: {
        owner: true,
        manufacturer: {
          include: {
            info: true
          }
        }
      }
    });

    console.log("Trace product ok!")

    return data
  } catch (error) {
    console.error('Error fetching registrationNo:', error);
  }
}

