// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = (event) => {
        const increasedThing = this.state.timesClicked += 1
        this.setState({
            timesClicked: increasedThing
        })
    }
    
    render() {
        console.log(this.state.timesClicked)
        return <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    }
}