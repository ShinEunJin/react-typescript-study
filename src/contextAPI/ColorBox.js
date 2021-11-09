import ColorContext from "./color"

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{ width: 64, height: 64, backgroundColor: value.color }}
        ></div>
      )}
    </ColorContext.Consumer>
  )
}

export default ColorBox
