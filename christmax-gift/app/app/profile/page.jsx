"use client";

import RecipientProfile from "@components/RecipientProfile";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
  return (
    <div className="scro flex flex-col p-4 py-8  justify-center items-center landing h-screen text-white">
      <h1 className="text-3xl">
        Hi{" "}
        <span className="text-yellow-600 font-bold">{session?.user.name}</span>
      </h1>
      <h3 className="text-green-500">Cheers ,You got the following Gift</h3>
      <p className="">Make sure to thank The Senders</p>
      <RecipientProfile />
    </div>
  );
};

export default page;
