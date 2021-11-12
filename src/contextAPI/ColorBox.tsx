import { ColorConsumer } from "./Color"

const ColorBox = () => {

  return (
    <ColorConsumer>
      {({ state }) => (
        <>
          <div
            style={{ width: 64, height: 64, backgroundColor: state.color }}
          ></div>
          <div
            style={{ width: 32, height: 32, backgroundColor: state.subColor }}
          >
          </div>
        </>
      )}
    </ColorConsumer>
  )
}

export default ColorBox
