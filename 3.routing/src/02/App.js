import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState({page: window.location.href.substring(window.location.href.lastIndexOf("/"))}); // 현재 URL에서 마지막 '/' 문자 이후의 문자열
    useEffect(() => {
        const handlePopState = () => {
            setRoute(e.state); // route 상태 업데이트
        };
        window.addEventListener('popstate', handlePopState); // 브라우저의 뒤 or 앞으로 가기 버튼 클릭 시, 발생하는 이벤트
        
        return () => {
            window.removeEventListener('popstate', handlePopState);
        }
    }, []);

    // 페이지 내의 링트가 클릭될 때, 호출되는 함수
    const handleLinkClick = (e) => {
        e.preventDefault(); // 페이지 이동 막기

        const url = e.target.href.substring(e.target.href.lastIndexOf("/")); // 클릭된 링크의 URL ('/'문자 이후의 문자열)
        console.log(url);
        window.history.pushState({page: url}, e.target.text, url); // 웹 브라우저의 히스토리 스택에 새로운 항목을 추가
        setRoute({page: url}); // 클릭된 링크로 route 상태 업데이트
    }

    const router = function () {
        let component = null;
        switch (route.page) {
            case '/':
                component = <Main/>;
                break;
            case '/gallery':
                component = <Gallery/>;
                break;
            case '/guestbook':
                component = <Guestbook/>;
                break;
        }

        return component;
    };

    return (
        <div>
            <ul>
                <li><a href={'/'} onClick={handleLinkClick}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={handleLinkClick}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={handleLinkClick}>[Guestbook]</a></li>
            </ul>
            {
                (() => {
                    switch(route.page) {
                        case '/' :
                            return <Main />;
                        case '/guestbook':
                            return <Guestbook />;
                        case '/gallery':
                            return <Gallery />;
                        default:
                            return null;
                    }
                })()
            }
        </div>
    )
}