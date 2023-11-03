import React, {Component} from 'react';
import './assets/scss/App.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    // 스크롤 이벤트 핸들러
    onScroll() {
        // this는 여기에서 정의되지 않았으므로 메서드를 호출한 컨텍스트(주로 이벤트 핸들러 자체)에 바인딩 되어야 한다.
        console.log(this.outterRef.scrollTop, this.outterRef.clientHeight, this.innerRef.clientHeight);      
    }

    render() {
        return (
            <div
                ref={ (ref) => this.outterRef = ref } // 외부 div 요소에 ref 설정
                className={'App'}
                onScroll={this.onScroll.bind(this)}>
                <div
                    ref={ (ref) => this.innerRef = ref } // 내부 div 요소에 ref 설정
                >
                    <ul>
                        {Array.from({length: 100}, (_, i) => i + 1).map(i =>
                            <li key={i}>
                                {`아이템 ${i} 입니다.`}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}