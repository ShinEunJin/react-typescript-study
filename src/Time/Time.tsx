import "./styles.scss";
import { useEffect, useState } from "react";
import useInterval from "./useInterval";

const Time = () => {
  const [count, setCount] = useState(0);
  const [changeState, setChangeState] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setChangeState((prev) => prev + 1)}>change</button>
      <h1>changeState: {changeState}</h1>
    </>
  );
};

export default Time;
