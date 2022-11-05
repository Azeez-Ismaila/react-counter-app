import React from "react";
import { useState } from "react";
export const UseCounter = () => {
  const [value, setValue] = useState(0);
  const Increment = () => {
    setValue(value + 1);
  };
  const Decrement = () => {
    setValue(value - 1);
  };
  const Reset = () => {
    setValue(0);
  };
  const handleChange = (e) => {
    setValue(parseInt(e.target.value));
  };
  return { value, setValue, Increment, Decrement, Reset, handleChange };
};
