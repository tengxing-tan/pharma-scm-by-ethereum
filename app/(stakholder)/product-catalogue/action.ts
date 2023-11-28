import prisma from 'lib/prisma-client'
import { z } from 'zod';

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

export async function createNewProduct(formData: FormData) {
  const scheme = z.object({
    name: z.string().min(1), //String(IbuprofenProducts[index]['name']).toUpperCase(),
    registrationNo: z.string().min(1), //String(IbuprofenProducts[index]['registrationNo']),
    activeIngredient: z.string().min(1),  //'IBUPROFEN',
    dosageForm: z.string().min(1), //String(dosageForms[index % 8]),
    // orderId
    // manufacturerId: 1
  });

  try {
    const validatedData = scheme.parse({
      name: formData.get('name'),
      registrationNo: formData.get('registrationNo'),
      activeIngredient: formData.get('activeIngredient'),
      dosageForm: formData.get('dosageForm'),
    });

    const ownerId = 4
    const manufacturerId = Number(formData.get('manufacturer.name'))
    console.log("Manufacturer id: ", manufacturerId)
    // if ()
    //   const data = await prisma.drug.create({
    //     data: {
    //       ...validatedData,
    //       ownerId: ownerId,
    //       manufacturerId: Number(formData.get('manufacturerId')),
    //     }
    //   });

    // return data
    return Response.json({ message: 'look good' })
  } catch (error) {
    console.log('Error: ', error);
  }
}
