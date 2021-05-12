import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import store from '../store'
import { createTask, loadTasks } from '../store/tasks/actions'
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

    const addTask = (task) => {
        dispatch(createTask(id,task))       
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
    return (
        <>
            {
                tasks && tasks.map(task => (<Task key={task.itemId} setCheckbox={setCheckbox} removeTask={removeTask} task={task}></Task>))
            }
            <NewTaskForm onSubmit={addTask} />
        </>
    )
}
