import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Value of - {count}</h1>
      <button
        className="m-10 text-2xl bg-black text-white p-5"
        onClick={() => (count < 1 ? "" : setCount(count - 1))}
      >
        Decrease
      </button>
      <button className="m-10 text-2xl bg-black text-white p-5">Reset</button>
      <button
        className="m-10 text-2xl bg-black text-white p-5"
        onClick={() => (count > 9 ? "" : setCount(count + 1))}
      >
        Increase
      </button>
    </>
  );
};

export default Counter;
