import { connectToDB } from "@utils/database";
import User from "@models/Users";

export const GET = async (request) => {
  try {
    await connectToDB();

    const users = await User.find({});

    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to Fetch all Users", { status: 500 });
  }
};
