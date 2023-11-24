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

export async function getRegistrationNo(contract: object) {
  try {
    const data = await contract.getPharmaProduct('demo');
    return data;
  } catch (error) {
    console.error('Error fetching registrationNo:', error);
  }
}
