import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Task from './Task'

export default function TodoListPage(props) {
    let {id} = useParams()
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/list/${id}`)
            .then(res => res.json())
            .then(setTasks)
    }, [id])
    
    console.log();

    return (
        <div>
            <h1>TodoListPage!!!</h1>
            {
                tasks.map(task => (<Task key={task.id} task={task}></Task>))
            }
        </div>
    )
}
