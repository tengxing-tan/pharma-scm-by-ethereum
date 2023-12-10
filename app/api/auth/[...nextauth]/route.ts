import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from "lib/prisma-client";

const handler = NextAuth({
    pages: {
        signIn: '/login',
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
    ],
    // secret: process.env.SECRET,
    // callbacks: {
    //     session({ session, token, user }) {
    //         return session // The return type will match the one returned in `useSession()`
    //     },
    // },

    // maybe at login page, write these 2 line
    // import { useSession } from "next-auth/react"
    // const { data: session } = useSession()
})

export { handler as GET, handler as POST }
