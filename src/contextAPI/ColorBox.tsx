import { ColorConsumer } from "./Color"

interface PropsType {
  state: { color: string, subColor: string },
  actions: { setColor: () => void, setSubColor: () => void }
}

const ColorBox = () => {
  return (
    <ColorConsumer>
      {(value): PropsType => (
        <div
          style={{ width: 64, height: 64, backgroundColor: value.color }}
        ></div>
      )}
    </ColorConsumer>
  )
}

export default ColorBox
