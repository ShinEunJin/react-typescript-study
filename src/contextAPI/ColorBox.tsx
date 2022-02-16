import { useContext } from "react"

import ColorContext from "./Color"

const ColorBox = () => {

  const { state } = useContext(ColorContext)

  return (
    <>
      <div
        style={{ width: 64, height: 64, backgroundColor: state.color }}
      ></div>
      <div
        style={{ width: 32, height: 32, backgroundColor: state.subColor }}
      >
      </div>
    </>
  )
}

export default ColorBox
