import React from 'react';
import styles from './assets/css/TaskList.css';
import Task from './Task';

function TaskList({tasks}) {
    return (
        <div class='TaskList'>
            <ul>
            {
                tasks.map(task => <Task 
                                        key={task.no}
                                        name={task.name} 
                                        done={task.done}/>)
            }
            </ul>
            <input type='text' placeholder={'태스크 추가'} className={styles.TaskList__add_task}/>
        </div>
    );
}

export default TaskList;