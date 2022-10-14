import { useEffect, useRef } from "react";

type CallbackType = () => void;

type DelayType = number;

const useInterval = (callback: CallbackType, delay: DelayType) => {
  const savedCallback = useRef<CallbackType | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(() => {
        if (savedCallback.current) savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
