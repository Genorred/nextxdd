import {AuthOptions} from "next-auth";
import Google from "next-auth/providers/google";
import NextAuth from "next-auth";
const authOptions: AuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        })
    ],
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}