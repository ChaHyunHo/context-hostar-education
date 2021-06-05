import ColorBox from "./components/ColorBox";
import ColorContext, { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColors";

const App = () => {
  return (
    /* Provider를 사용할때는 반드시 value값을 명시해줘야함. */
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
