'use client'
import { useSession, signIn } from "next-auth/react"
import { redirect } from "next/navigation"

export default function LoginButton() {
    const { data: session } = useSession()

    if (session) {
        // redirect('/product-catalogue')
        // return (
        //     <>
        //         Signed in as {session.user?.email} <br />
        //         <button onClick={() => signOut()}>Sign out</button>
        //     </>
        // )
    }
    return (
        <div className="p-2">
            <button onClick={() => signIn("email", { email: "root@mail.com", callbackUrl: 'http://localhost:3000/product-catalogue' })} className="text-rose-400 font-semibold underline underline-offset-2 py-1 px-3">
                Supplier site</button>
        </div>
    )
}

