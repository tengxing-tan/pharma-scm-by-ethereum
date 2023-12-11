'use client'
import { SessionProvider } from "next-auth/react"
import SignedInUser from "./signedin-user"

export default function Username() {
    return (
        <SessionProvider>
            <SignedInUser />
        </SessionProvider>
    )
}