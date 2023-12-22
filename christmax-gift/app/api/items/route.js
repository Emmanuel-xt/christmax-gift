// pages/api/items.js

import { connectToDB } from "@utils/database";
import Gift from "@models/gifts";

export const POST = async (req) => {
  const { items } = await req.json();

  try {
    console.log("trying to send available items......");
    console.log("recieving data", { items });

    await connectToDB();
    console.log("connected for sending");

    const insertedItems = await Gift.insertMany(items);
    console.log("new items inserted");
    return new Response(JSON.stringify(insertedItems), { status: 201 });
  } catch (error) {
    console.error("Error Inserting items", error);
    return new Response(
      "failed to Insert Items , Internal Server Error",
      error,
      { status: 500 }
    );
  }
};
