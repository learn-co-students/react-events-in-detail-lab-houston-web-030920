import React from "react";

export default class DelayedButton extends React.Component {
  otherClick = (event) => {
    event.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(event);
      this.props.delay;
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.otherClick}>Click Me!</button>
      </div>
    );
  }
}
