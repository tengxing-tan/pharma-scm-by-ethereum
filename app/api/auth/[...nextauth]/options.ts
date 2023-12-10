import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "stakeholder-login",
            name: "Stakeholder Account",
            async authorize(credentials, req) {
                const user = {
                    id: "user-id",
                    email: credentials?.email
                }
                return user
            },
            credentials: {
                email: { label: "Email", type: "text ", placeholder: "" },
            },
        }),
    ],
}