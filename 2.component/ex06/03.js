import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrder = Object.assign({}, state.order, {
    receive: '강남구 논현동'
});

// 주의 
// 객체 내의 객체에 대한 참조는 복제된 객체와 원본 객체에서 공유된다.
// updateOrder.payment.method를 변경하면 state.order.payment.method도 동시에 변경되어 같은 값을 가지게 된다.
updateOrder.payment.method = 'Mobile';

console.log(
    state.order,
    updateOrder
);