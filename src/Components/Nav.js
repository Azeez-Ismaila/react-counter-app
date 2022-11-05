import React from "react";
import { Link } from "react-router-dom";
import { FaStopwatch } from "react-icons/fa";

function Nav() {
  return (
    <div className="grid grid-cols-6 bg-emerald-800 p-3 text-white gap-8">
      <Link
        to="/"
        className="col-span-3 text-start mx-auto flex items-center gap-3"
      >
        Counter <FaStopwatch size={25} />
      </Link>
      <Link to="/counter">Counter</Link>
      <Link to="/reducer">Reducer</Link>
    </div>
  );
}

export default Nav;
