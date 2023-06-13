import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: "143974070759-5t4jg5lv6ksfssq5jtcrlkbtouvbf6ul.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ],
    secret: "01a0c710afc4e7c73bbde02592faee27"
}

export default NextAuth(authOptions)