import React from 'react';

function App() {    
    // const App = React.createElement('div', null, 'Hello World');
    // return App;
    return (
        <div>
            <h1>01</h1>
            <p>특징1: HTML과의 차이점</p>

            {/*
                1. 속성은 Cammel Case
            */}
            <input type='text' maxLength='10' />
            
            {/*
                2. Element 꼭 닫는다.
            */}
            <br/>
            <hr/>
            <img src=''/>

            {/*
                3. JSX Element의 속성 이름은 DOM API와 일치한다.
                <h4 id='title' class='header'>타이틀</h4> -> HTML
                document.getElementById('title').className = 'header'; -> DOM API
            */}
            <h4 id='title' className='header'>타이틀</h4>
        </div>
    );
}

export {App};