import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [ticks, setTicks] = useState(0);

    useEffect(() => {
        const intervalid = setInterval(() => {
            setCurrentTime(new Date());
            setTicks((ticks) => ticks + 1);
        }, 1000);
        return (() => clearInterval(intervalid))
    }, []);
    
    return (
            <Clock
                message={`ex04: ticks ${ticks}`}
                hours={currentTime.getHours() < 10 ? '0' + currentTime.getHours() : currentTime.getHours()}
                minutes={currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes()}
                seconds={currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds()}/>
    );
}