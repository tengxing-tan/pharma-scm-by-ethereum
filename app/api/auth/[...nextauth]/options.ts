import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "./authorize";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "stakeholder-login",
            name: "Stakeholder Account",
            async authorize(credentials) {
                const user = await getUserByEmail(String(credentials?.email))
                return user
            },
            credentials: {
                email: { label: "Email", type: "text ", placeholder: "" },
            },
        }),
    ],
}