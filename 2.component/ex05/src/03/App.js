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

        };
    }


    componentDidMount() {
        this.intervalid = setInterval(() => {
            
        }, 1);
    }
    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock 
                        hours={'02'}
                        minutes={32}
                        seconds={20}
                        session={'pm'}
                    />
            </div>
        );
    }
}