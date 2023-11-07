import React, {useState} from 'react';
import styles from './assets/css/Card.css'
import TaskList from './TaskList';

function Card({title, description, tasks}) {
    const [details, setDetails] = useState(false);
    return (
        <div className={styles.Card}>
            <div className={`${styles.Card__Title} ${details ? styles.Card__Title__open : ''}`}
                onClick={() => setDetails(!details)}>{title}</div>

            {details ? 
                <div className={styles.Card__Details} >
                    {description}
                    <TaskList tasks={tasks}/>
                </div> :
                null
            }
        </div>
    );
}

export default Card;