import { useSession } from "next-auth/react"

export default function SignedInUser() {
    const { data: session } = useSession()
    if (session) {
        return (
            <p>
                Signed in with {session.user?.email}
            </p>
        )
    }

    return <p>Unauthorised user</p>
}