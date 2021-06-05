import { createContext, useState } from "react";

const ColorContext = createContext({
  state: { color: "black", subcolor: "yellow" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("yellow");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer과 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorContext, ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
