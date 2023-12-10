import { useSession, signIn, signOut } from "next-auth/react"
import { redirect } from "next/navigation"

export default function LoginButton() {
    const { data: session } = useSession()

    if (session) {
        redirect('/product-catalogue')
        // return (
        //     <>
        //         Signed in as {session.user?.email} <br />
        //         <button onClick={() => signOut()}>Sign out</button>
        //     </>
        // )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn("email")}>Sign in</button>
        </>
    )
}

