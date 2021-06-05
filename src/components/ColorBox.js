import React, { useContext } from "react";
import ColorConsumer from "../contexts/color";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);

  return (
    /* Consumer사이에 중괄호를 열어서 그 안에 함수를 넣어 준형태를 Function as a child, Render Props라고 한다. */
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
