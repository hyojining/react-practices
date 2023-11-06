import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [currentTime, setCurrentTime] = useState(_getCurrentTime());
    const [ticks, setTicks] = useState(0);

    function _getCurrentTime() {
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

    useEffect(() => {
        const intervalid = setInterval(() => {
            setCurrentTime(_getCurrentTime());
            setTicks((ticks) => ticks + 1);
        }, 1000);
        return (() => clearInterval(intervalid))
    }, []);
    
    return (
        <>
        {
            ticks % 10 === 0 ?
            null :
            <Clock
                message={`ex05-Component LifeCycle: ${ticks}`}
                hours={currentTime.hours}
                minutes={currentTime.minutes}
                seconds={currentTime.seconds}/>
        }
        </>
    );
}