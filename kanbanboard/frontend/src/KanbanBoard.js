import React from 'react';
import styles from './assets/css/Kanbanboard.css';
import data from './assets/json/data';
import CardList from './CardList';

function Kanbanboard(props) {
    const cardsTodo = data.filter(card => card.status === 'ToDo');
    const cardsDoing = data.filter(card => card.status === 'Doing');
    const cardsDone = data.filter(card => card.status === 'Done');

    return (
        <div className={styles.KanbanBoard}>
            <CardList title={'To do'} cards = {cardsTodo} />
            <CardList title={'Doing'} cards = {cardsDoing} />
            <CardList title={'Done'} cards = {cardsDone} />
        </div>
    );
}

export default Kanbanboard;