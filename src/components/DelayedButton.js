import React, { Component } from "react";

// Code DelayedButton Component Here
export default class DelayedButton extends Component{

    onDelayed = event => {
        event.persist();
        window.setTimeout(() => {
            this.props.onDelayedClick(event);
        },
        this.props.delay
        );
    };

    render(){
        return(
            <button onClick={this.onDelayed}>DelayedButton</button>
        )
    }
}