import AzureADProvider from "next-auth/providers/azure-ad";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
      authorization: { params: { scope: "openid profile email" } },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/login" },
  callbacks: {
    async jwt({ token, profile, account }) {
      if (profile) {
        const p = profile as Record<string, any>;

        token.email =
          p.email ||
          p.preferred_username ||
          p.userPrincipalName ||
          account?.id_token ||
          token.email;

        token.name = p.name || token.name;
        token.org = p.tenant || p.companyName || null;

        console.log("Azure AD profile:", p);
      }
      return token;
    },

    async session({ session, token }) {
      if (token?.email) {
        session.user = {
          ...session.user,
          email: token.email as string,
          name: token.name as string,
          org: token.org ?? null,
        };
      }
      return session;
    },
  },
};
