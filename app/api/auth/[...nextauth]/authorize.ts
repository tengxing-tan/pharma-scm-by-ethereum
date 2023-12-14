import prisma from "lib/prisma-client";

export async function getUserByEmail(email: string) {
    const data = await prisma.stakeholder.findUnique({
        where: { email: email },
    })

    return data
}