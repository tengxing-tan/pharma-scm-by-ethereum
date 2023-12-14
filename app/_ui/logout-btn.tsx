'use client'
import { signOut } from "next-auth/react"

export default function LogoutButton() {
    return (
        <button onClick={() => signOut()} className="px-3 py-2 text-sm font-semibold text-rose-400">
            Logout</button>
    )
}