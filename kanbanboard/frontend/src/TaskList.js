import React from 'react';
import styles from './assets/css/TaskList.css';
import Task from './Task';

function TaskList({tasks, addTask, updateTaskDone, deleteTask}) {
    return (
        <div className='TaskList'>
            <ul>
            {
                tasks.map(task => <Task 
                                        key={task.no}
                                        no={task.no}
                                        name={task.name} 
                                        done={task.done}
                                        updateTaskDone={updateTaskDone}
                                        deleteTask={deleteTask}/>)
            }
            </ul>
            <input type='text' 
                placeholder={'태스크 추가'} 
                className={styles.TaskList__add_task} 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addTask(e.target.value);
                        e.target.value = ''; // 입력 필드 비우기
                      }
                }}/>
        </div>
    );
}

export default TaskList;