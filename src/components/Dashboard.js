import React from 'react'
import {
    Link
} from "react-router-dom";

export default function Dashboard(props) {
    return (
        <aside className='todo-list-sidebar'>
            <div>
                <h1>Dashboard</h1>
                <nav>
                    <ul>
                        {
                            props.taskLists.map(
                                taskList => (
                                    <li key={taskList.taskListId}><Link to={`/todo-lists/${taskList.taskListId}`}>{taskList.name}</Link></li>
                                )
                            )
                        }
                        <li>
                            <Link to="/today">TodayTaskPage</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>

    )
}
