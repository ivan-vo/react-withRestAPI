import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { loadTasks } from '../store/tasks/actions'
import NewTaskForm from './NewTaskForm'
import Task from './Task'

export default function TodoListPage(props) {
    const dispatch = useDispatch()
    let { id } = useParams()

    useEffect(() => {
        dispatch(loadTasks(id))
      }, [id])

    const [tasks__, setTasks] = useState([])
    const tasks = useSelector(state => state.tasks[id])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/lists/${id}/tasks`)
    //         .then(res => res.json())
    //         .then(setTasks)
    // }, [id])
    const addTask = (task) => {
        setTasks([...tasks__, task]);
        fetch(`http://localhost:5000/lists/${id}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(task)
        })
    }
    const removeTask = (task) => {
        setTasks(tasks__.filter(t => t.itemId !== task.itemId));
    }
    const setCheckbox = (task, oldtask) => {
        let list = tasks__;
        let index = list.indexOf(oldtask);
        list[index] = task;
        setTasks([...list])
    }
    const getTasks = () => (tasks ? tasks: [])
    return (
        <>
            {
                getTasks().map(task => (<Task key={task.itemId} setCheckbox={setCheckbox} removeTask={removeTask} task={task}></Task>))
            }
            <NewTaskForm onSubmit={addTask} />
        </>
    )
}
