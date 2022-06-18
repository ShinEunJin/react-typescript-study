import { useContext } from "react";
import { CounterContext } from "../contextAPI/CounterProvider";

export const useCounterState = () => {
  const value: any = useContext(CounterContext);
  if (value === undefined) {
    throw new Error("useCounterState should be used within CounterProvider");
  }
  return value;
};
