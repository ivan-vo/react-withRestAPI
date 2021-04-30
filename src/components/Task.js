import React from 'react'

function dateToString(date) {
    if (date !== '') {
        date = new Date(date);
        date = date.toString().split(' ');
        return `[${date[0]} : ${date[1]} : ${date[2]}]`;
    }
    else{
        return 'No date';
    } 
}

function setChecked(done) {
    return done ? 'checked': '';  
}

export default function Task(props) {

    const deleteTask = (task) => {
        props.onClick(task)
    }

    const setDoneTask = (task) => {
        let oldtask = task;
        task.done ? task.done = false : task.done = true;
        props.setDone(oldtask,task);
    }

    const title = props.task.title;
    
    return (
        <div className='item'>
            <p> 
                <input 
                    onClick={() => setDoneTask(props.task)} 
                    type='checkbox' 
                    checked={setChecked(props.task.done)}
                    readOnly
                />
            {title} - {dateToString(props.task.dueDate)}
            </p>
            <p className='description'>{props.task.description}</p>
            <button onClick={() => deleteTask(props.task)} className="button-delete">Delete</button>
        </div>
    )
}
