import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: this._getCurrentTime(),
            ticks: 0
        }
    }

    _getCurrentTime() {
        const d = new Date();
        const hours = d.getHours();
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();

        return {
            hours: ('0' + (hours > 12 ? hours-12 : hours)).slice(-2),
            minutes: ('0' + minutes).slice(-2),
            seconds: ('0' + seconds).slice(-2),
            session: hours > 12 ? 'pm' : 'am'
        };
    }

    componentDidMount() {
        this.intervalid = setInterval(() => {
            this.setState({
                currentTime: this._getCurrentTime(),
                ticks: this.state.ticks + 1
            });
        }, 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05: ticks {this.state.ticks}</h2>
                    <Clock 
                        hours={this.state.currentTime.hours}
                        minutes={this.state.currentTime.minutes}
                        seconds={this.state.currentTime.seconds}
                        session={this.state.currentTime.session}
                    />
            </div>
        );
    }
}