import React, { Component } from 'react';

class ClockTime extends Component {  

    constructor() {
        super();
        this.state = { time: new Date() };
    }

    componentDidMount() {
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.update);
    }

    render() {
        const { time } = this.state;

        return (
            <span style={{ fontSize: '32px',fontWeight: 'bold' }}>
                {time.toLocaleTimeString()}
            </span>
        );
    }
}  
  
export default ClockTime;