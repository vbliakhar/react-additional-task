import React from "react";
import "./index.scss";
class ColorPicker extends React.Component {
  state = {
    activeIndex: 0,
  };
  setActiveIndex = (index) => {
    this.setState({ activeIndex: index });
  };
  makeOptionsClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];
    if (index === this.state.activeIndex) {
      optionClasses.push("active");
    }
    return optionClasses.join(" ");
  };
  render() {
    const activeOptionLabel = this.props.options[this.state.activeIndex].label;
    return (
      <div className="ColorPicker">
        <h1>{this.props.title}</h1>
        <p>{activeOptionLabel}</p>
        <div className="ColorBlock">
          {this.props.options.map(({ label, color }, index) => {
            return (
              <button
                onClick={() => this.setActiveIndex(index)}
                key={label}
                className={this.makeOptionsClassName(index)}
                style={{
                  background: color,
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
