import { connectToDB } from "@_utils/database";
import Gift from "@models/gifts";

export const GET = async (request) => {
  try {
    await connectToDB();
    const gifts = await Gift.find({});

    return new Response(JSON.stringify(gifts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to Fetch all Gifts", { status: 500 });
  }
};
