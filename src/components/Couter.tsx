import { addCounter } from "../redux/action";
import { useAppDispatch, useAppSelector } from "../utils/reduxHelper";

export default function Counter() {
  // const counter = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch()

  return (
    <div>
      <button onClick={() => dispatch(addCounter(4))}>Add Count</button>
      {/* <h1>{counter}</h1> */}
    </div>
  );
}
