import { useState } from "react";

export default function Count(props) {
  const [count, setCount] = useState(10);
  const [value, setValue] = useState({});

  const minusFn = () => {
    const newCount = count - 1;
    setCount(newCount);
    setValue("hello");
  };

  const addFn = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <h1>
      <button onClick={minusFn}>-</button>
      {count}
      <button onClick={addFn}>+</button>
    </h1>
  );
}
