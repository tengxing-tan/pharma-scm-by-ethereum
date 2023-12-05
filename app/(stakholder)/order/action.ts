'use server';

import { PrismaClient, Process, Role } from '@prisma/client'
const prisma = new PrismaClient()
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export async function getDrugBatch(id: number) {
    const data = await prisma.drugBatch.findUnique({
        where: {
            id: id
        }
    })

    return data
}

export async function updateDrugBatch(formData: FormData) {
    const batchId = Number(formData.get('batchId'));
    const existingBatch = await getDrugBatch(batchId);
    const batchNo = existingBatch?.batchNo;

    const action = new String(formData.get('action'));
    let valid = '0'
    let result = null;



    if (action === 'update basic details') {
        const basicData = basicScheme.parse({
            quantity: formData.get('quantity'),
            manufactureDate: formData.get('manufactureDate'),
            expiryDate: formData.get('expiryDate'),
        })
        try {
            result = await prisma.drugBatch.update({
                where: {
                    id: batchId
                },
                data: {
                    ...basicData
                }
            });
        } catch (error) {
            console.log('Error: ', error)
            valid = 'updateError'
        }
        valid = 'updateOk'
        redirect(`/order/${batchNo}?updated=${valid}`);
    }

    if (action === 'update shipment process') {
        const productStatusData = productStatusSchema.parse({
            date: formData.get('date'),
            description: formData.get('description'),
            company: formData.get('company'),
            address: formData.get('address'),
            country: formData.get('country'),
        });

        result = await prisma.productStatus.create({
            data: {
                drugBatchId: batchId,
                stage: formData.get('stage'),
                process: formData.get('process'),
                ...productStatusData,
            },
        });
        valid = 'updateProductStatusOk'
        redirect(`/order/${batchNo}?updated=${valid}`);
    }

    if (action === 'delete') {
        try {
            await deleteDrugBatch(batchId)
        } catch (error) {
            console.log('Error: ', error)
            valid = 'deleteError'
        }
        valid = 'deleteOk'
        redirect(`/order`);
    }


    console.log('Done updating drug batch');
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

const basicScheme = z.object({
    quantity: z.number().min(1),
    manufactureDate: z.string().min(1),
    expiryDate: z.string().min(1),
});

const productStatusSchema = z.object({
    date: z.date(),
    description: z.string(),
    company: z.string(),
    address: z.string(),
    country: z.string(),
})

const stakeholderSchema = z.object({
    importer: z.string().min(1),
    wholesaler: z.string().min(1),
})
