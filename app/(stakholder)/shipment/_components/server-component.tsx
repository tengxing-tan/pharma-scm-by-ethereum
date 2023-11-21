'use server'

import { getRegistrationNo } from "app/api/action/getDrug"

export default async function ServerComponent({ contract }: { contract: object }) {
    const data = await getRegistrationNo(contract)

    return <p>testing server component: {String(data)}</p>
}
