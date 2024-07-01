import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginService } from "@/services/auth.service";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const userData = {
          email: credentials.email,
          password: credentials.password,
        };
        const userInfo = await loginService(userData);

        // Ensure userInfo contains the necessary data
        if (userInfo && userInfo.token) {
          return { ...userInfo, token: userInfo.token };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = nextAuth(authOptions);
export { handler as GET, handler as POST };
