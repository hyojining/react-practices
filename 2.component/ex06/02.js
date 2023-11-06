import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

let updateOrder1 = state.order;
updateOrder1.receive = '강남구 서초구...';

console.log(state.order, updateOrder1, state.order === updateOrder1);
console.log("=================================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrder2 = Object.assign({}, state.order, {receive: '강남구 서초구...'}); // 객체를 병합 또는 복사하기 위한 메서드
console.log(state.order, updateOrder2, state.order === updateOrder2);