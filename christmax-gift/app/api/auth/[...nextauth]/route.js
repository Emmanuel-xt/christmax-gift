import { connectToDB } from "@utils/database";
import User from "@models/Users";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Crytpo", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        console.log("credentials: ", credentials);
        try {
          await connectToDB();

          console.log("Checking for existing user...");

          const existingUser = await User.findOne({
            username: credentials.username,
          });

          if (existingUser) {
            console.log("User with this Username already exists");
            return new Response(
              "error: User with this Username already exists",
              {
                status: 400,
              }
            );
          }

          console.log("Creating a new user...");

          const newUser = await User.create({
            username: credentials.username,
          });

          // console.log
          await newUser.save();

          console.log("User created successfully", newUser);

          return newUser;
        } catch (error) {
          console.error("Error during signup:", error.message);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }) {
      // console.log(
      //   "JWT CALLBACK",
      //   "token=",
      //   token,
      //   "user=",
      //   user,
      //   "session=",
      //   session , 'JWT PART ENDED ---------------'
      // );
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.username,
        };
      }
      return token;
    },
    async session({ token, user, session }) {
      // console.log(
      //   "SESSION CALLBACK",
      //   "token=",
      //   token,
      //   "user=",
      //   user,
      //   "session=",
      //   session
      // );
      return {
        ...session,
        user: {
          id: token.id,
          name: token.name,
        },
      };
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
