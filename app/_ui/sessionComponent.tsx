'use client'
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function SessionComponent(props: { children: React.ReactNode }) {

    const { data: session, status } = useSession()
    if (!session && status === "unauthenticated") {
        redirect('/api/auth/signin')
    }
    if (status === "loading") {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <p className="text-gray-500 text-2xl">
                    Verifying Your Authenticity...
                </p>
            </div>
        )
    }

    return (
        <>
            {props.children}
        </>
    )
}
