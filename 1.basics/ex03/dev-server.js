const http = require('http');
const path = require('path');
const express = require('express');

const port = 9090;
const application = express() // Express 애플리케이션을 생성
    .use(express.static(path.join(__dirname,'public')))

// HTTP 서버를 생성
// Express 애플리케이션은 이 서버를 처리할 수 있도록 연결된다.
http
    .createServer(application) 
    .on('listening', ()=>{
        console.log(`server starts... ${port}`);
    })
    .listen(port)