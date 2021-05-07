import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { loadDashboard } from '../store/dashboard/actions';

export default function Dashboard(props) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadDashboard())
    }, []);
    const lists = useSelector(state => state.dashboard.lists);
    const openedTask = useSelector(state => state.dashboard.openedTasks);
    const today = useSelector(state => state.dashboard.today)

    return (
        <aside className='todo-list-sidebar'>
            <div>
                <h1>Dashboard</h1>
                <nav>
                    <ul>
                        {
                            lists.map(
                                taskList => (
                                    <li key={taskList.id}>
                                        <NavLink activeClassName="activ-link" to={`/todo-lists/${taskList.id}`}>
                                            {taskList.name}
                                            <span>({openedTask[taskList.id]})</span>
                                        </NavLink>  
                                    </li>
                                )
                            )
                        }
                        <li>
                            <NavLink to="/today" activeClassName="activ-link">TodayTaskPage</NavLink>
                        </li>
                    </ul>
                </nav>
                <p>Today task: | {today} |</p>
            </div>
        </aside>

    )
}
