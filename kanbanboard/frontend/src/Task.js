import React, {useState} from 'react';
import styles from './assets/css/Task.css';

function Task({no, name, done, updateTaskDone, deleteTask}) {
    return (
        <li className={styles.TaskList__Task}>
            <input type='checkbox' 
                checked={done === 'Y'} 
                onChange={(e) => {
                    updateTaskDone(no, e.target.checked ? 'Y' : 'N');
                }}/>
            {name}
            <a href='#' className={styles.TaskList__Task__remove} onClick={(e) =>{deleteTask(no)}}></a>
        </li>
    );
}

export default Task;