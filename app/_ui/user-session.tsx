'use client'
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import LoginButton from 'app/_ui/login-bth'
// import Link from 'next/link'

export default function UserSession({ props }: {
    props: {
        session: Session
    }
}) {

    return (
        <div>
            <SessionProvider session={props.session}>
                <LoginButton />
            </SessionProvider>
        </div>
    )
}
