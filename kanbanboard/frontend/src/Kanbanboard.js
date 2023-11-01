import React from 'react';
import data from './assets/json/data';

function Kanbanboard(props) {
    const cardsTodo = data.filter(card => card.status === 'Todo');
    console.log(cardsTodo);

    return (
        <div>
            Kanbanboard
        </div>
    );
}

export default Kanbanboard;