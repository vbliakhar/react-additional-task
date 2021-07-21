import React from "react";
import "./index.scss";
class ColorPicker extends React.Component {
  state = {
    activeIndex: 0,
  };
  setActiveIndex = (index) => {
    this.setState({ activeIndex: index });
  };
  render() {
    return (
      <div className="ColorPicker">
        <h1>{this.props.title}</h1>
        <div className="ColorBlock">
          {this.props.options.map(({ label, color }, index) => {
            return (
              <button
                onClick={() => this.setActiveIndex(index)}
                key={label}
                className="ColorPicker__option"
                style={{
                  background: color,
                  border:
                    index === this.state.activeIndex
                      ? "solid 2px black"
                      : "none",
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ColorPicker;
// export { default } from "./ColorPicker";
