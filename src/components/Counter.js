import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const Dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    Dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    Dispatch({ type: "decrement" });
  };
  const byfive = () => {
    Dispatch({ type: "byfive" });
  };
  const toggleCounterHandler = () => {};
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      <button onClick={incrementHandler}>Increment</button>
      <button onClick={byfive}>increased by five</button>
      <button onClick={decrementHandler}>Decrement</button>

      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
