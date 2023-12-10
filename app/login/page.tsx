'use client'
import LoginButton from "app/_ui/login-bth"
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { redirect } from "next/navigation"

export default function LoginPage({ params }: {
    params: {
        session: Session
    }
}) {
    if (params.session) {
        redirect('/product-catalogue')
    }
    return (
        <div>
            <SessionProvider session={params.session}>
                <LoginButton />
            </SessionProvider>
        </div>
    )
}