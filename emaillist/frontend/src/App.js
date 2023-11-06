import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
// import data from './assets/json/data';

function App() {
    const [emails, setEmails] = useState(null);
    const searchEmail  = (keyword) => {
        // 배열(data)의 각 요소에 대해 필터링 함수(email => ...)를 호출하며, 배열의 각 요소가 email 변수로 전달된다.
        // filter 메소드는 배열의 각 요소에 대해 주어진 조건을 검사하고 조건을 만족하는 요소만 남긴 새로운 배열을 반환한다.
        const newEmails = data.filter(email => email.firstName.indexOf(keyword) !== -1 || email.lastName.indexOf(keyword) !== -1 || email.email.indexOf(keyword) !== -1);
        setEmails(newEmails);
    };

    const addEmail = async (email) => { // 비동기 함수
        try{
            // 서버의 /api 엔드포인트에 POST 요청을 보내고, 비동기적으로 응답을 기다림
            const insertResponse = await fetch('/api', { 
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(email) // JavaScript에서 객체를 JSON 문자열로 변환
            });

            if(!insertResponse.ok) {
                throw new Error(`${insertResponse.status} ${insertResponse.statusText}`)
            }

            const json = await insertResponse.json(); // response에서 JSON 데이터 추출
            
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }

            const newEmails = [...emails, json.data]; // 기존 emails 배열에 새 이메일 데이터 추가
            setEmails(newEmails);
            
        } catch(err) {
            console.error(err);
        }
    }

    const fetchList = async() => {
        try{
            const response = await fetch('/api', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: null
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            const json = await response.json();
            
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }

            console.log(json.data);
            setEmails(json.data);
            
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div id={'App'}>
            <RegisterForm addEmail={addEmail}/>
            <SearchBar searchEmail={searchEmail}/>
            {
                emails === null ?
                null :
                <Emaillist emails={emails}/>
            }
        </div>
    );
}

export {App};