import React from "react";
import "./index.scss";
class ColorPicker extends React.Component {
  state = {
    activeIndex: 1,
  };
  render() {
    console.log(this.props);

    return (
      <div className="ColorPicker">
        <h1>{this.props.title}</h1>
        <div className="ColorBlock">
          {this.props.options.map(({ label, color }) => {
            return (
              <span
                key={label}
                className="ColorPicker__option"
                style={{ background: color }}
              ></span>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ColorPicker;
// export { default } from "./ColorPicker";
