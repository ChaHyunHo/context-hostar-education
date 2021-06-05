import React, { Component } from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";
import color from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

class SelectColors extends Component {
  static contextType = ColorContext;

  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };

  handleSetSubColor = (color) => {
    this.context.actions.setSubcolor(color);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: "flex" }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
              onClick={() => {
                this.handleSetColor(color);
              }}
              onContextMenu={(e) => {
                e.preventDefault(); // 마우스 오른쪽 버튼 클릭시 메뉴가 뜨는것을 막음
                this.handleSetSubColor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors;
