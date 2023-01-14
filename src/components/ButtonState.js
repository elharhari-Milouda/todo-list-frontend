import React from "react";

class ButtonState extends React.Component {
  state = {
    buttonValue: "Initial Value",
  };

  handleButtonClick = () => {
    this.setState({ buttonValue: "New Value" });
  };

  render() {
    return (
      <button onClick={this.handleButtonClick}>{this.state.buttonValue}</button>
    );
  }
}
export default ButtonState;
