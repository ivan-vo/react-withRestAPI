import React, { useEffect, useState } from 'react'
import Task from './Task'

export default function TodayTaskPage() {
    const [todayTask, setTodayTask] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/collection/today")
          .then(res => res.json())
          .then(setTodayTask)
      }, [])
    return (
        <div>
            <h1>TodayTaskPage!!!</h1>
            {
                todayTask.map(task => (<Task key={task.id} task={task}></Task>))
            }
        </div>
    )
}
