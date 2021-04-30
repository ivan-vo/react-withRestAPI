import React from 'react'

export default function Dashboard(props) {
    const setSelectedList = (list) => {
        props.onSelect(list)
    }
    return (
        <aside className='todo-list-sidebar'>
            <ul>
            {
                props.taskLists.map(tasklist => (<li><a onClick={() => setSelectedList(tasklist)}>{tasklist.name}</a></li>))
            }
            </ul>
        </aside>
    )
}
