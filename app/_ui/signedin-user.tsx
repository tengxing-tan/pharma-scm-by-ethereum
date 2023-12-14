// 'use client'
import { useSession } from "next-auth/react"

export default function SignedInUser() {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return (
            <p>
                Loading...
            </p>
        )
    }
    if (session && status === "authenticated") {
        return (
            <p>
                Signed in as {session.user?.email}
            </p>
        )
    }
}
