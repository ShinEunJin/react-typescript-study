import ColorBox from "./contextAPI/ColorBox"
import { ColorProvider } from "./contextAPI/Color"

const App = () => {
  return (
    <ColorProvider>
      <ColorBox />
    </ColorProvider>
  )
}

export default App