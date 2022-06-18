import React, { createContext, useMemo, useState } from "react";

export const CounterContext = createContext();

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [counter, setCounter] = useState(0);

  const actions = useMemo(
    () => ({
      increase() {
        setCounter((prev) => prev + 1);
      },
      decrease() {
        setCounter((prev) => prev - 1);
      },
    }),
    []
  );

  const value = useMemo(() => [counter, actions], [counter, actions]);

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default CounterProvider;
