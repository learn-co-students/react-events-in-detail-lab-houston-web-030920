import React from 'react';

export default class CoordinateBUtton extends React.Component {

  handleClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render(){
    return (
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }
}
