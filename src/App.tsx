import ColorBox from "./contextAPI/ColorBox"
import { ColorProvider } from "./contextAPI/Color"
import SelectColor from "./contextAPI/SelectColor"

const App = () => {
  return (
    <ColorProvider>
      <SelectColor />
      <ColorBox />
    </ColorProvider>
  )
}

export default App