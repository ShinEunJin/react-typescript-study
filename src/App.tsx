import ColorBox from "./contextAPI/ColorBox";
import CounterProvider from "./contextAPI/CounterProvider";
import SelectColor from "./contextAPI/SelectColor";

const App = () => {
  return (
    <CounterProvider>
      <SelectColor />
      <ColorBox />
    </CounterProvider>
  );
};

export default App;
