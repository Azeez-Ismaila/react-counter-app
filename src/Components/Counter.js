import React from "react";
import { Helmet } from "react-helmet-async";
import { UseCounter } from "./UseCounter";
const Counter = () => {
  const { value, setValue, Increment, Decrement, Reset, handleChange } =
    UseCounter();
  return (
    <div className="flex flex-col items-center justify-around gap-8 py-20">
      <Helmet>
        <title>UseCounter</title>
        <meta
          name="description"
          content="A Counter App implemented using a Custom Hook and this makes reusability easier on other components as it would only require importing"
        />
        <link rel="canonical" href="/counter" />
      </Helmet>
      <h1 className="font-bold text-sky-500">Custom Hook Counter App</h1>
      <input
        type="number"
        className=" border-sky-500 border-4 rounded-md"
        onChange={handleChange}
        placeholder="Input a Number..."
        onMouseOut={(e) => (e.target.value = "")}
      />
      <span className=" font-extrabold text-9xl text-sky-500">{value}</span>
      <div className="flex justify-between items-center gap-4">
        <button onClick={Decrement} className="rounded-lg p-3 bg-sky-500 h-">
          Decrement
        </button>
        <button onClick={Reset} className="rounded-lg p-3 bg-sky-500 h-">
          Reset
        </button>
        <button onClick={Increment} className="rounded-lg p-3 bg-sky-500 h-">
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
