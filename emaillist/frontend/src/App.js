import React, {useState} from 'react';
import './assets/scss/App.scss';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import data from './assets/json/data';

function App() {
    const [emails, setEmails] = useState(data);
    const searchEmail  = (keyword) => {
        // 배열(data)의 각 요소에 대해 필터링 함수(email => ...)를 호출하며, 배열의 각 요소가 email 변수로 전달된다.
        // filter 메소드는 배열의 각 요소에 대해 주어진 조건을 검사하고 조건을 만족하는 요소만 남긴 새로운 배열을 반환한다.
        const newEmails = data.filter(email => email.firstName.indexOf(keyword) !== -1 || email.lastName.indexOf(keyword) !== -1 || email.email.indexOf(keyword) !== -1);
        setEmails(newEmails);
    };

    return (
        <div id={'App'}>
            <RegisterForm />
            <SearchBar searchEmail={searchEmail}/>
            <Emaillist emails={emails}/>
        </div>
    );
}

export {App};