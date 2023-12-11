'use client'

import LoginButton from "app/_ui/login-bth"
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"

export default function LoginComponent({ session }: {
    session: Session
}) {
    return (
        <SessionProvider session={session}>
            <LoginButton />
        </SessionProvider>
    )
}