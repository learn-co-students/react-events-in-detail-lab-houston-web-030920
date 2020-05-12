// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoodinatesButton extends Component {
    render() {
        return(
            <button 
                onClick={ e => this.props.onReceiveCoordinates([e.clientX, e.clientY]) }>
            </button>
        )
    }
}