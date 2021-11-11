import { ColorConsumer } from "./Color"

const ColorBox = () => {

  interface valueType {
    state: {
      color: string,
      subColor: string
    },
  }

  return (
    <ColorConsumer>
      {(value: valueType) => (
        <div
          style={{ width: 64, height: 64, backgroundColor: value.state.color }}
        ></div>
      )}
    </ColorConsumer>
  )
}

export default ColorBox
