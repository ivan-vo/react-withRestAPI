import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import NewTaskForm from './NewTaskForm'
import Task from './Task'

export default function TodoListPage(props) {
    let { id } = useParams()
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/lists/${id}/tasks`)
            .then(res => res.json())
            .then(setTasks)
    }, [id])

    const addTask = (task) => {
        setTasks([...tasks, task]);
        fetch(`http://localhost:5000/lists/${id}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(task)
        })
    }

    const removeTask = (task) => {
        fetch(`http://localhost:5000/lists/${id}/tasks/${task.itemId}`, {
            method: 'DELETE',
        })
        setTasks(tasks.filter(t => t.itemId !== task.itemId));
    }

    function getItemById(id) {
        return fetch(`http://localhost:5000/tasks/${id}`,)
            .then(response => response.json());
    }
    async function replaceTask (oldtask, task){
        console.log("replace");
        let putItem = await getItemById(task.itemId);
        await fetch(`http://localhost:5000/lists/tasks/${task.itemId}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(task)
        })
        let list = tasks;
        let index = list.indexOf(oldtask);
        list[index] = task;
        setTasks([ ...list ])
    }

    return (
        <div>
            {
                tasks.map(task => (<Task key={task.itemId} task={task} setDone={replaceTask} onClick={removeTask}></Task>))
            }
            <NewTaskForm onSubmit={addTask} />
        </div>
    )
}
