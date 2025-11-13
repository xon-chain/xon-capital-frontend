import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      org?: string | null; // ✅ Add custom field
    };
  }

  interface User {
    org?: string | null; // ✅ Also add to User type
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    org?: string | null; // ✅ Add to token type
  }
}
