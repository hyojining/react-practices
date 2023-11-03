import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: this._getCurrentTime()
        }
    }

    _getCurrentTime() {
        const d = new Date();
        return {
            hours: d.getHours() < 10 ? '0' + d.getHours() : d.getHours(),
            minutes: d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes(),
            seconds: d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds(),
            session: d.getHours() > 12 ? 'pm' : 'am'
        };
    }

    componentDidMount() {
        this.intervalid = setInterval(() => {
            this.setState({
                currentTime: this._getCurrentTime()
            });
        }, 1000);
    }
    
    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
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