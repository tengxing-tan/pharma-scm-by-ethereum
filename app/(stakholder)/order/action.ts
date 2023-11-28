'use server';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export async function updateDrugBatch(formData: FormData) {
    const batchId = Number(formData.get('batchId'));

    const scheme = z.object({
        batchNo: z.string().min(1),
        quantity: z.number().min(1),
        manufactureDate: z.string().min(1),
        expiryDate: z.string().min(1),
    });

    try {
        const validatedData = scheme.parse({
            batchNo: formData.get('batchNo'),
            quantity: Number(formData.get('quantity')),
            manufactureDate: formData.get('manufactureDate'),
            expiryDate: formData.get('expiryDate'),
        });

        await prisma.drugBatch.update({
            where: {
                id: batchId
            },
            data: {
                ...validatedData
            }
        });

        console.log('Done updating drug batch');
        redirect('/');
    } catch (error) {
        console.log('Error: ', error);
    }
}

export async function createDrugBatch(formData: FormData) {


    const schema = z.object({
        batchNo: z.string().min(1),
        quantity: z.number().min(1),
        manufactureDate: z.string().min(1),
        expiryDate: z.string().min(1),
    });
    const regNoSchema = z.string().min(5);

    try {
        const validatedData = schema.parse({
            batchNo: formData.get('batchNo'),
            quantity: Number(formData.get('quantity')),
            manufactureDate: formData.get('manufactureDate'),
            expiryDate: formData.get('expiryDate'),
        });

        const registrationNo = regNoSchema.parse(formData.get('registrationNo'))

        const drug = await prisma.drug.findUnique({
            where: {
                registrationNo: registrationNo
            }
        })

        // console.log('Drug: ', drug);
        const drugId = drug?.id;

        const result = await prisma.drugBatch.create({
            data: {
                ...validatedData,
                drugId: drugId,
            }
        });

        console.log('Result: ', result);
        revalidatePath('/');
    } catch (error) {
        console.log('Error: ', error);
    }
}
