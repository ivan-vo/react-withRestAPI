import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import store from '../store';

function dateToString(date) {
    if (date !== '' && date !== null) {
        date = new Date(date);
        date = date.toString().split(' ');
        return `[${date[0]} : ${date[1]} : ${date[2]}]`;
    }
    else {
        return 'No date';
    }
}

function setChecked(done) {
    return done ? 'checked' : '';
}

export default function Task(props) {
    console.log(store.getState());
    const dispatch = useDispatch()

    const setDoneTask = (task) => {
        let oldtask = task;
        task.done ? task.done = false : task.done = true;
        replaceTask(oldtask, task)
    }
    const getClassByDate = (date) => {
        if (date !== '' && date !== null) {
            date = new Date(date);
            var now = new Date();
            if (new Date(now.getFullYear(), now.getMonth(), now.getDate()) > date) {
                return { className: "not-corect-date" }
            }
        }
        else {
            return { className: "corect-date" }
        }
    }

    const removeTask = (task) => {
        // fetch(`http://localhost:5000/lists/${task.taskListId}/tasks/${task.itemId}`, {
        //     method: 'DELETE',
        // })
        dispatch(removeTask(task.taskListId,task.itemId))
        props.removeTask(task)
    }

    async function replaceTask(oldtask, task) {
        await fetch(`http://localhost:5000/lists/tasks/${task.itemId}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(task)
        })
        props.setCheckbox(task, oldtask)
    }

    const title = props.task.title;

    let nameList;
    if (props.today) {
        props.taskLists.forEach(l => {
            if (l.id === props.task.taskListId) {
                nameList = l.name;
            }
        });
    }
    const getNameList = (id) => {
        let name;
        props.taskLists.forEach(l => {
            if (l.id === id) {
                name = l.name
            }
        });
        return name;
    }

    return (
        <div className='item'>
            {
                props.today &&
                <p key={props.task.taskListId} >
                    <NavLink to={`/todo-lists/${props.task.taskListId}`}>
                        {getNameList(props.task.taskListId)}
                    </NavLink>
                </p>
            }
            <p>
                <input
                    onClick={() => setDoneTask(props.task)}
                    type='checkbox'
                    checked={setChecked(props.task.done)}
                    readOnly
                />
                {title} - <span {...getClassByDate(props.task.dueDate)}>{dateToString(props.task.dueDate)}</span>
            </p>
            <p className='description'>{props.task.description}</p>
            <button onClick={() => removeTask(props.task)} className="button-delete">Delete</button>
        </div>
    )
}
