
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      userId: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}