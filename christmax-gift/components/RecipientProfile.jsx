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
    <div>
      <h1>My Gifts {session?.user.name} </h1>
      <ul>
        {recievedGifts.map((gift) => (
          <li key={gift._id}>
            {`Gift from ${gift.senderName} to ${gift.recipientUserName}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipientProfile;
