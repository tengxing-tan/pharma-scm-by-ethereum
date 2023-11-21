'use client'

export const dynamic = "force-dynamic"



async function getRegistrationNo(contract: any) {
    const data = await contract.getPharmaProduct()
    return data
}

// {
//     children,
// }: {
//     children: React.ReactNode
// }


