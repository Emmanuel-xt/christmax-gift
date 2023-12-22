import About from "@components/About";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className="landing flex flex-col items-center justify-center gap-10 ">
      <h1 className="text-white text-4xl font-bold">
        Christmax Gift Exchange
      </h1>
      <h3 className="text-2xl text-green-300">Celebrate the Christ Season of Giving</h3>
      <p className="text-xl text-center text-yellow-500">
        Suprise a Friend by sharing Cool Chrismax Wishes or Gifts
      </p>
      <About />
      <h2 className="text-2xl text-white font-bold">🎄 Join the Festive Code Fest Now!</h2>
      <p className="text-green-700">
        You are just a Click Away, Register Now to Get Started{" "}
      </p>
      <button className="bg-yellow-600 rounded-lg px-3 py-1 text-white">
        <Link href='/signin'>Register</Link>
      </button>
    </section>
  );
};

export default Home;
