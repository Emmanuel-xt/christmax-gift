import { connectToDB } from "@utils/database";
import Gift from "@models/gifts";

export const GET = async (request) => {
  console.log("Api call detected");
  try {
    console.log("connecting to db");
    await connectToDB();
    console.log("fetching gifts");
    const gifts = await Gift.find({});
    console.log("Gifts found, now sending them to the frontend");

    // console.log('The gifts are: ', gifts);
    return new Response(JSON.stringify(gifts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to Fetch all Gifts", { status: 500 });
  }
};
