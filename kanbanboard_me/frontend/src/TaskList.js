import React from 'react';
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
        </div>
    );
}

export default TaskList;