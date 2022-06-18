import { useContext } from "react";

import ColorContext from "./Color";
import Count from "./Count";

const ColorBox = () => {
  const { state } = useContext(ColorContext);

  return (
    <>
      <div
        style={{
          width: 64,
          height: 64,
          backgroundColor: state.color,
        }}
      ></div>
      <div
        style={{
          width: 32,
          height: 32,
          backgroundColor: state.subColor,
        }}
      ></div>
      <Count />
    </>
  );
};

export default ColorBox;
