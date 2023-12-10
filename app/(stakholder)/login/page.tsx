'use client'
import Link from 'next/link'

export default function LoginPage() {

    return (
        <div>
            <Link href="/api/auth/signin">Sign in</Link>
        </div>
    )
}