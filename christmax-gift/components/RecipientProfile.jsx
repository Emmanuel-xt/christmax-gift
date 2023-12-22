"use client";

// import SentGift from "@models/sentGift";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const RecipientProfile = () => {
  const [recievedGifts, setrecievedGifts] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchMyGifts = async () => {
      const response = await fetch("/api/mygifts");
      const data = await response.json();
      const filteredGifts = data.filter(gift => gift.recipientId === session?.user.id)
      console.log("Returned data are:", response);
      console.log("Returned data are:", data);
      setrecievedGifts(filteredGifts);
    };

    fetchMyGifts();
  }, [session]);
  return (
    <div className=" flex flex-col justify-center items-center">
      
        {recievedGifts.map((gift) => (
          <div className="flex flex-col gap-3 justify-center items-center border rounded p-2 mt-2 w-[70%]" key={gift._id}>
            <p className="text-green-400 font-bold">{gift.senderName} sent you a {gift.GiftTitle}</p>

            <p className="text-center">{gift.Gift}</p>
          </div>
        ))}
    </div>
  );
};

export default RecipientProfile;
