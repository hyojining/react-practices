import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

// 첫 번째 방법: 직접 배열을 변경
const updateOrderProducts1 = state.order.products;
updateOrderProducts1.push({
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount: 1
});

console.log(state.order.products, updateOrderProducts1, state.order.products === updateOrderProducts1);
console.log("=====================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

// 두 번째 방법: concat 메서드를 사용하여 새 배열 생성
const updateOrderProducts2 = state.order.products.concat({
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount: 1
})

console.log(state.order.products, updateOrderProducts2, state.order.products === updateOrderProducts2);
console.log("=====================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

// 세 번째 방법: 스프레드 연산자를 사용하여 새 배열 생성
const updateOrderProducts3 = [...state.order.products, {
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount: 1 
}];

console.log(state.order.products, updateOrderProducts3, state.order.products === updateOrderProducts3);
console.log("=====================================");