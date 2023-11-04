'use server';

import prisma from '#/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export async function createStakeholder(formData: FormData) {
  const schema = z.object({
    name: z.string().min(1),
    phoneNo: z.string().min(1),
    email: z.string().min(1),
    address: z.string().min(1),
    postcode: z.string(),
    state: z.string(),
    country: z.string().min(1),
    role: z.string().min(1),
    publicKey: z.string().min(1),
  });

  try {
    const validatedData = schema.parse({
      name: formData.get('name'),
      phoneNo: formData.get('phoneNo'),
      email: formData.get('email'),
      address: formData.get('address'),
      postcode: formData.get('postcode'),
      state: formData.get('state'),
      country: formData.get('country'),
      role: formData.get('role'),
      publicKey: formData.get('publicKey'),
    });

    const result = await prisma.stakeholder.create({
      data: validatedData,
    });

    console.log('Result: ', result);
    revalidatePath('/');
  } catch (error) {
    console.log('Error: ', error);
    redirect('/register');
  }
}
