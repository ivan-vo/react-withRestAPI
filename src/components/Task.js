import React from 'react'

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

    const setDoneTask = (task) => {
        let oldtask = task;
        task.done ? task.done = false : task.done = true;
        replaceTask(oldtask, task)
    }

    const removeTask = (task) => {
        fetch(`http://localhost:5000/lists/${task.taskListId}/tasks/${task.itemId}`, {
            method: 'DELETE',
        })
        props.removeTask(task)
    }

    function getItemById(id) {
        return fetch(`http://localhost:5000/tasks/${id}`,)
            .then(response => response.json());
    }
    async function replaceTask(oldtask, task) {
        console.log("replace");
        let putItem = await getItemById(task.itemId);
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
            <button onClick={() => removeTask(props.task)} className="button-delete">Delete</button>
        </div>
    )
}
