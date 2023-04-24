import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./App.css";

const sum = (count) => {
  console.log("render sum");
  return count + 1;
};

function App() {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(1);
  const h1Ref = useRef();
  console.log("render parent");

  const handleClick = useCallback(() => {}, []);
  const sumData = useMemo(() => sum(count1), [count1]);
  return (
    <div action="">
      {count}-------------- sumCOunt1: {sumData}
      <button onClick={() => setCount(count + 1)}> add</button>
      <h1 className="header" ref={h1Ref}>
        My Todo-s
      </h1>
      <Child count={count1} handleClick={handleClick} />
    </div>
  );
}

export default App;
// hook

const Child = React.memo(() => {
  console.log("render Child");
  return <div>....</div>;
});

//useMemo va useCallback
