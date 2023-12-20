'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Login = ({ onRegister }) => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
      if (response.ok) {
        alert("User Registered Succefully!");
        onRegister(username);
      } else {
        const errorData = await response.json();
        console.error(`Registration failed: ${errorData.error}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="signin flex items-center justify-center p-5">
      <Image src={"/assets/fxmax.png"} width={200} height={200} />

      <div className="flex flex-col gap-5">
        <h1 className="text-white font-bold text-2xl">
          Log in now to continue the Fun
        </h1>
        <form action="" onSubmit={handleRegister}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            id=""
            placeholder="Input your Username"
            className="text-black outline-none rounded p-1 border border-4 border-green-700"
          />
          <button type="submit">Login</button>
        </form>
        <p className="text-white text-sm font-thin">
          have'nt Registered yet ?{" "}
          <Link href="./signin">
            {" "}
            <span className="font-bold text-green-600">Register Now</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
