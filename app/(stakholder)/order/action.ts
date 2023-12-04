'use server';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export async function updateDrugBatch(formData: FormData) {
    const batchId = Number(formData.get('batchId'));
    let valid = '0'

    const scheme = z.object({
        quantity: z.number().min(1),
        manufactureDate: z.string().min(1),
        expiryDate: z.string().min(1),
    });

    const validatedData = scheme.parse({
        quantity: Number(formData.get('quantity')),
        manufactureDate: formData.get('manufactureDate'),
        expiryDate: formData.get('expiryDate'),
    })

    const result = await prisma.drugBatch.update({
        where: {
            id: batchId
        },
        data: {
            ...validatedData
        }
    });

    console.log('Done updating drug batch');
    valid = 'ok'

    redirect(`/order/${result.batchNo}?updated=${valid}`, "replace");
}

export async function deleteDrugBatch(batchId: number) {
    try {
        await prisma.productStatus.deleteMany({
            where: {
                drugBatchId: batchId
            }
        })
        await prisma.drugBatch.delete({
            where: {
                id: batchId
            },
        });
        console.log("Delete drug batch ok!")
    } catch (error) {
        console.log('Error: ', error);
    }
    redirect(`/ order`);
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
    } catch (error) {
        console.log('Error: ', error);
    }
    revalidatePath('/');
}
