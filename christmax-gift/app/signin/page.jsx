"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {signIn, useSession} from 'next-auth/react'

const Signin = () => {
  const router = useRouter();


  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("submitting with values:", { username });
      const response = await signIn('credentials' , {
        username,
        redirect: false,
      })

      if (response.error) {
        console.log('failed to register user' , response.error)
      } else {
        console.log('user registerd succefully');
          router.push("/app");
          // console.log('session is :', session?.user)
      }

      // if (response.ok) {
      //   const data = await response.json();
      //   console.log("User SignUp was Successful");
      // } else {
      //   const errorData = await response.json();
      //   console.error("failed to SignUp", errorData.error);
      // }
    } catch (error) {
      console.error("Error during SignUp", error);
    }
  };

  return (
    <div className="signin flex items-center justify-center p-5">
      <Image src={"/assets/fxmax.png"} width={200} height={200} />

      <div className="flex flex-col gap-5">
        <h1 className="text-white font-bold text-2xl">
          Register now to Participate in the Festive Fun
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            id=""
            placeholder="Input a Cool name"
            className="text-black outline-none rounded p-1 border-4 border-green-700"
          />
          {/* <button type="submit">Register</button> */}
          <button type="submit" className="border">Register</button>
        </form>
        <p className="text-white text-sm font-thin">
          already registed before ?{" "}
          <Link href="./login">
            {" "}
            <span className="font-bold text-green-600">Log In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
