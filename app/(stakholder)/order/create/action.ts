'use server';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';


export async function createDrugBatch(formData: FormData) {


    const schema = z.object({
        batchNo: z.string().min(1),
        quantity: z.number().min(1),
        manufactureDate: z.string().min(1),
        expiryDate: z.string().min(1),
    });

    try {
        const validatedData = schema.parse({
            batchNo: formData.get('batchNo'),
            quantity: Number(formData.get('quantity')),
            manufactureDate: formData.get('manufactureDate'),
            expiryDate: formData.get('expiryDate'),
        });

        const drug = await prisma.drug.findUnique({
            where: {
                registrationNo: formData.get('registrationNo')
            }
        })

        console.log('Drug: ', drug);

        const result = await prisma.drugBatch.create({
            data: {
                ...validatedData,
                drugId: drug.id
            }
        });

        console.log('Result: ', result);
        // revalidatePath('/');
    } catch (error) {
        console.log('Error: ', error);
    }
}
