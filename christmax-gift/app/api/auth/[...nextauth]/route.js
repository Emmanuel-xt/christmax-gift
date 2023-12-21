import { connectToDB } from "@_utils/database";
import User from "@models/Users";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Crytpo", type: "text" },
      },

       authorize: async (credentials) => {
        console.log("credentials: ", credentials);
        try {
            await connectToDB();

            console.log("Checking for existing user...");
        
            const existingUser = await User.findOne({ username : credentials.username });
        
            if (existingUser) {
              console.log("User with this Username already exists");
              return new Response("error: User with this Username already exists", {
                status: 400,
              });
            }
        
            console.log("Creating a new user...");
        
            const newUser = await User.create({
              username: credentials.username,
            });
        
            // console.log
            await newUser.save();
        
            console.log("User created successfully", newUser);
        
            return new Response(
              JSON.stringify(newUser),{ status: 201 }
            );
        } catch (error) {
          console.error("Error during signup:", error.message);
        }
        return null;
      },
    }),
  ],

});

export { handler as GET, handler as POST };
