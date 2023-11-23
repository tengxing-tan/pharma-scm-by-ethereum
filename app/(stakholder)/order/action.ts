'use server';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export async function updateStatus(formData: FormData) {
    const batchId = Number(formData.get('batchId'));

    const schema = z.object({
        trackingNo: z.string().min(1),
        status: z.string().min(1),
    });

    try {
        const validatedData = schema.parse({
            trackingNo: formData.get('trackingNo'),
            status: formData.get('status'),
        });

        const hasTrackingNo = await prisma.shipment.findUnique({
            where: {
                trackingNo: validatedData.trackingNo
            }
        });

        if (hasTrackingNo !== null) {
            await prisma.shipment.update({
                where: {
                    trackingNo: validatedData.trackingNo
                },
                data: {
                    status: validatedData.status
                }
            });
        } else {
            const shipment = await prisma.shipment.create({
                data: {
                    trackingNo: validatedData.trackingNo,
                    status: validatedData.status,
                }
            });

            await prisma.shipment.update({
                where: {
                    id: shipment.id
                },
                data: {
                    drugBatches: {
                        connect: [{ id: batchId }]
                    }
                }
            })
        }
        console.log('Done updating status');
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
