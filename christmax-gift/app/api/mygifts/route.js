import { connectToDB } from "@utils/database";
import SentGift from "@models/sentGift";

export const GET = async (request) => {
  // const {data : session } = useSession()
  try {
    await connectToDB();

    const myGifts = await SentGift.find({});
    console.log(myGifts);

    return new Response(JSON.stringify(myGifts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to Fetch all my Gifts", { status: 500 });
  }
};
