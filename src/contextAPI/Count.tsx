import { useCounterState } from "../hooks/useCounterState";

const Count = () => {
  const [counter] = useCounterState();

  return <div>{counter}</div>;
};

export default Count;
