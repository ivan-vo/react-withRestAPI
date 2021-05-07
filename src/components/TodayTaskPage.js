import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTodayTasks } from '../store/tasks/actions'
import Task from './Task'

export default function TodayTaskPage(props) {
    const [tasks__, setTasks] = useState([])
    // useEffect(() => {
    //     fetch("http://localhost:5000/collection/today")
    //         .then(res => res.json())
    //         .then(setTasks)
    // }, [])

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadTodayTasks())
    }, [])
    const tasks = useSelector(state => state.tasks['today'])

    const removeTask = (task) => {
        setTasks(tasks__.filter(t => t.itemId !== task.itemId));
    }
    const setCheckbox = (task, oldtask) => {
        let list = tasks__;
        let index = list.indexOf(oldtask);
        list[index] = task;
        setTasks([...list])
    }
    const getTasks = () => (tasks ? tasks : [])
    return (
        <>
            <h1>TodayTaskPage!!!</h1>
            {
                getTasks().map(task => (<Task key={task.itemId} taskLists={props.taskLists} today={true} setCheckbox={setCheckbox} removeTask={removeTask} task={task}></Task>))
            }
        </>
    )
}
