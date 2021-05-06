import React, { useEffect, useState } from 'react'
import Task from './Task'

export default function TodayTaskPage(props) {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/collection/today")
          .then(res => res.json())
          .then(setTasks)
      }, [])
    const removeTask = (task) => {
        setTasks(tasks.filter(t => t.itemId !== task.itemId));
    }
    const setCheckbox = (task, oldtask) => {
        let list = tasks;
        let index = list.indexOf(oldtask);
        list[index] = task;
        setTasks([...list])
    }
    return (
        <div>
            <h1>TodayTaskPage!!!</h1>
            {
                tasks.map(task => (<Task taskLists={props.taskLists} today={true} setCheckbox={setCheckbox} removeTask={removeTask} key={task.id} task={task}></Task>))
            }
        </div>
    )
}
