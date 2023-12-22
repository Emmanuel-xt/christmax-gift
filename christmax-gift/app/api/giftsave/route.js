import { connectToDB } from "@utils/database";
import SentGift from "@models/sentGift";

export const POST = async (req) => {
  const { payload } = await req.json();

  try {
    console.log("Receiving gift payload", payload);
    console.log("Connecting to db to send gift payload", payload);

    await connectToDB();

    console.log("Db connected to send gift payload", payload);

    const newGift = await SentGift.create({
      senderId: payload.senderId,
      senderName: payload.senderName,
      recipientId: payload.recipientId,
      recipientUserName: payload.recipientUserName,
      GiftId: payload.GiftId,
      GiftTitle: payload.GiftTitle,
      Gift: payload.Gift,
    });

    console.log("Gift saved to Database Successfully", newGift);

    return new Response(JSON.stringify(newGift), { status: 201 });
  } catch (error) {
    console.error("Error Saving Sent Gift", error);
    return new Response(error, { status: 500 });
  }
};
