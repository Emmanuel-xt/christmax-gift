// import { connectToDB } from "@_utils/database";
// import User from "@models/Users";

// export const POST = async (request) => {
//   console.log("Connecting to the database...");

//   const { username} = await request.json();

//   try {
//     console.log("recievind data", { username});
//     console.log("Connecting to the database...");

//     await connectToDB();

//     console.log("Checking for existing user...");

//     const existingUser = await User.findOne({ username : credentials });

//     if (existingUser) {
//       console.log("User with this Username already exists");
//       return new Response("error: User with this Username already exists", {
//         status: 400,
//       });
//     }

//     console.log("Creating a new user...");

//     const newUser = await User.create({
//       username: username,
//     });

//     // console.log
//     await newUser.save();

//     console.log("User created successfully", newUser);

//     return new Response(
//       JSON.stringify(newUser),{ status: 201 }
//     );
//   } catch (error) {
//     console.error("Error during signup:", error.message);
//     return new Response("error : Internal Server e", { status: 500 });
//   }
// };