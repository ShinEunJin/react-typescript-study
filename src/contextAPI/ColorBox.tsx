import { ColorConsumer } from "./Color"

const ColorBox = () => {

  return (
    <ColorConsumer>
      {(value) => (
        <div
          style={{ width: 64, height: 64, backgroundColor: value.state.color }}
        ></div>
      )}
    </ColorConsumer>
  )
}

export default ColorBox
