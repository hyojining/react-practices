import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState("/");
    
    useEffect(() => { 
        // 컴포넌트가 마운트될 때 handlerHashChange함수를 해시 변경 이벤트에 등록
        window.addEventListener('hashchange', handlerHashChange);
        
        return () => {
            window.removeEventListener('hashchange', handlerHashChange);
        }
    }, []);

    const handlerHashChange = () => {
        console.log(window.location.hash);

        // 현재 URL의 해시 부분에서 첫 번째 문자인 '#' 제거하여 실제 경로를 추출
        setRoute(window.location.hash.substring(1));
    }

    return (() => { // route 값에 따라 컴포넌트 렌더링
        switch(route) {
            case '/' :
                return <Main />;
            case '/guestbook':
                return <Guestbook />;
            case '/gallery':
                return <Gallery />;
            default:
                return null;
        }
    })();
}