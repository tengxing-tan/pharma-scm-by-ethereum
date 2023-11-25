import z from 'zod';
import prisma from 'lib/prisma-client';

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
        id: id
      }
    });
    console.log("Get drug by id ok!")
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
    });

    console.log("Trace product ok!")

    return data
  } catch (error) {
    console.error('Error fetching registrationNo:', error);
  }
}

