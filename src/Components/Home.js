import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-5 h-auto ">
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="A Counter App implemented using 2 different methods i.e Custom Hook and UseReducer"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <h1 className=" text-4xl">A Basik Counter</h1>
      <Player
        src="https://assets6.lottiefiles.com/packages/lf20_bxfgfdch.json"
        loop
        autoplay
        className="h-4/6 w-3/6 md:w-5/5 md:h-4/5"
      />
      <p className="font-bold text-xl text-center">
        This is a basic counter with functions of increment, decrement, reset,
        setValue and all these were implemented using 2 different methods{" "}
      </p>
      <span className="flex gap-4">
        <Link to="/counter">
          <button className="rounded-lg p-3 bg-sky-500 h-">UseCounter</button>
        </Link>
        <Link to="/reducer">
          <button className="rounded-lg p-3 bg-sky-500 h-">UseReducer</button>
        </Link>
      </span>
    </div>
  );
};

export default Home;
