import React, {useState} from 'react';
import styles from './assets/css/Task.css';

function Task({name, done}) {
    const [isdone, setDone] = useState(done);

    return (
        <li className={styles.TaskList__Task}>
            <input type='checkbox' checked={isdone} onChange={() => setDone(!isdone)}/>
            {name}
            <a href='#' className={styles.TaskList__Task__remove}></a>
        </li>
    );
}

export default Task;