import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col gap-0 items-center h-5/6">
      {" "}
      <Player
        src="https://assets4.lottiefiles.com/packages/lf20_suhe7qtm.json"
        loop
        autoplay
        className="h-4/5 md:w-2/5 md:h-2/5"
      />
      <Link to="/" className="rounded-lg px-6 py-3 bg-sky-500 h-">
        Go Back
      </Link>
    </div>
  );
};

export default Error;
