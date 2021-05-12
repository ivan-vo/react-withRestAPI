import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTodayTasks } from '../store/tasks/actions'
import Task from './Task'

export default function TodayTaskPage(props) {
    const [tasks__, setTasks] = useState([])

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadTodayTasks())
    }, [])
    const tasks = useSelector(state => state.tasks['today'])

    // const setCheckbox = (task, oldtask) => {
    //     let list = tasks__;
    //     let index = list.indexOf(oldtask);
    //     list[index] = task;
    //     setTasks([...list])
    // }
    return (
        <>
            <h1>TodayTaskPage!!!</h1>
            {
                tasks && tasks.map(task => (<Task key={task.itemId} taskLists={props.taskLists} today={true} setCheckbox={setCheckbox} removeTask={removeTask} task={task}></Task>))
            }
        </>
    )
}
