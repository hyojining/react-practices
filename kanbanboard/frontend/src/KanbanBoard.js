import React, { useState, useEffect } from 'react';
import styles from './assets/css/Kanbanboard.css';
import CardList from './CardList';

function Kanbanboard() {
    const [cards, setCards] = useState([]);

    const fetchCards = async() => {
        try{
            const response = await fetch('/api/card', {
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
            setCards(json.data);
            
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchCards();
    }, []);

    const cardsTodo = cards.filter(card => card.status === 'ToDo');
    const cardsDoing = cards.filter(card => card.status === 'Doing');
    const cardsDone = cards.filter(card => card.status === 'Done');

    return (
        <div className={styles.KanbanBoard}>
            <CardList title={'To do'} cards = {cardsTodo} />
            <CardList title={'Doing'} cards = {cardsDoing} />
            <CardList title={'Done'} cards = {cardsDone} />
        </div>
    );
}

export default Kanbanboard;