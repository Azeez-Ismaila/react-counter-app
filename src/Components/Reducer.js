import React, { useReducer } from "react";
import { Helmet } from "react-helmet-async";
import { MdOutlineReplay } from "react-icons/md";
const defaultState = {
  count: 0,
};
const reducer = (state, action, e) => {
  if (action.type === "increase") {
    return { count: state.count + 1 };
  } else if (action.type === "decrease") {
    return { count: state.count - 1 };
  } else if (action.type === "reset") {
    return { count: (state.count = 0) };
  } else if (action.type === "setValue") {
    return { count: (state.count = action.payload) };
  }
};
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleChange = (e) => {
    dispatch({ type: "setValue", payload: parseInt(e.target.value) });
  };
  return (
    <div className="flex flex-col items-center justify-around gap-8 py-20">
      <Helmet>
        <title>UseReducer</title>
        <meta
          name="description"
          content="A Counter App implemented using a UseReducer and this UseReducer makes state management very easy and able to manage multiple states"
        />
        <link rel="canonical" href="/reducer" />
      </Helmet>
      <h1 className="font-bold text-green-600">UseReducer Counter App</h1>
      <input
        type="number"
        placeholder="Input a Number..."
        onChange={handleChange}
        onMouseOut={(e) => (e.target.value = "")}
        className=" border-green-600 border-4 rounded-md"
      />
      <span className=" font-extrabold text-9xl text-green-600">
        {state.count}
      </span>
      <span className="flex gap-1 md:gap-4">
        <button
          onClick={() => dispatch({ type: "decrease" })}
          className="rounded-lg px-10 py-2 bg-green-600 text-white text-4xl"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="rounded-lg px-10 py-2 bg-green-600 text-white text-4xl"
        >
          <MdOutlineReplay />
        </button>
        <button
          onClick={() => dispatch({ type: "increase" })}
          className="rounded-lg px-10 py-2 bg-green-600 text-white text-4xl"
        >
          +
        </button>
        <button></button>
      </span>
    </div>
  );
};

export default Reducer;
