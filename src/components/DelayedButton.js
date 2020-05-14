// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component{


    // Event Pooling:
    //   the properties of the event only exist while 
    //   the callback is active. Adding async to the mix, 
    //   or storing the event for future use, will fail.
    handleClick = (event) => {
        //remove the synthetic event form the pool
        //and allow references to the event to be
        //made by the user code
        
        event.persist()
        //this.props.delay = setTimeout()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render() {
        return (
            <button onClick={this.handleClick}></button>
        )
    }
}