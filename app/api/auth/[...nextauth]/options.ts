import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "./authorize";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "stakeholder-login",
            name: "email",
            async authorize(credentials) {
                const user = await getUserByEmail(String(credentials?.email))
                return user
            },
            credentials: {
                email: { label: "Email", type: "text ", placeholder: "" },
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, credentials }) {
            console.log("It is async signIn() with user id: ", user.id)
            return true
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.

            return session
        }
    }
}