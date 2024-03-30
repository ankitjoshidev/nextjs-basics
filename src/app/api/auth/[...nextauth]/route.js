import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLECLIENT,
      clientSecret: process.env.GOOGLESECRET
    }),
    // ...add more providers here
  ],
  callbacks: {
    callbacks: {
      async redirect(url, baseUrl) {
        return process.env.GOOGLE_RETURN_URL;
      },
    },
    async signIn({ user, account }) {
      debugger
      if(account?.provider == "google"){
        try {
          return true;
        } catch (err) {
          console.log("Error saving user", err);
          return false;
        }
      }

    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };