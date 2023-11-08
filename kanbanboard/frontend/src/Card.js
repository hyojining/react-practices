import React, {useState} from 'react';
import styles from './assets/css/Card.css'
import TaskList from './TaskList';
import update from 'react-addons-update';

function Card({no, title, description}) {
    const [details, setDetails] = useState(false);
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async() => {
        try{
            const response = await fetch(`/api/task?cardNo=${no}`, {
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
            setTasks(json.data);
            
        } catch(err) {
            console.error(err);
        }
    }

    const addTask = async (name) => {
        try{
            const newTask = {
                no: null,
                name: name,
                done: 'N',
                cardNo: no
            };

            const response = await fetch('/api/task', { 
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newTask)
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            const json = await response.json();
            
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }

            console.log("addTask: ", json.data);
            setTasks([json.data, ...tasks]);
            
        } catch(err) {
            console.error(err);
        }
    }

    const updateTaskDone = async (taskNo, done) => {
        try{

            const response = await fetch(`/api/task/${taskNo}`, { 
                method: 'put',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                },
                body: `done=${done}`
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            const json = await response.json();
            
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }

            console.log("updateTaskDone: ", json.data);
            const updatedIndex = tasks.findIndex(task => task.no === json.data.no);
            const updatedTasks = update(tasks, {
                [updatedIndex]:{
                    done:{
                        $set: json.data.done
                    }
                }
            });
            setTasks(updatedTasks);
            
        } catch(err) {
            console.error(err);
        }
    }

    const deleteTask = async (taskNo) => {
        try{

            const response = await fetch(`/api/task/${taskNo}`, { 
                method: 'delete',
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

            console.log("deleteTask: ", json.data);
            const deletedTasks = tasks.filter(task => task.no !== json.data);
            setTasks(deletedTasks);
            
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div className={styles.Card}>
            <div className={`${styles.Card__Title} ${details ? styles.Card__Title__open : ''}`}
                onClick={() => {
                    fetchTasks(no);
                    setDetails(!details);
                }}>
                {title}
            </div>

            {details ? 
                <div className={styles.Card__Details} >
                    {description}
                    <TaskList tasks={tasks} addTask={addTask} updateTaskDone={updateTaskDone} deleteTask={deleteTask}/>
                </div> :
                null
            }
        </div>
    );
}

export default Card;