export const TASKS_LOADED = 'tasks/loaded';
export const TASK_CREATED = 'task/created';
export const TASK_REMOVED = 'task/removed';
export const TASK_STATUS_UPDATED = 'task/updata';

export const loadTasks = (listId) => async (dispatch) => {
    fetch(`http://localhost:5000/lists/${listId}/tasks`)
        .then(res => res.json())
        .then(tasks => dispatch({
            type: TASKS_LOADED,
            payload:
            {
                listId,
                tasks
            }
        }))
}
export const loadTodayTasks = () => async (dispatch) => {
    fetch(`http://localhost:5000/collection/today`)
        .then(res => res.json())
        .then(tasks => dispatch({
            type: TASKS_LOADED,
            payload:
            {
                listId: 'today',
                tasks
            }
        }))
}
export const createTask = (listId, task) => dispatch => {
    fetch(`http://localhost:5000/lists/${listId}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(task)
    })
        .then(res => res.json())
        .then(task => dispatch({
            type: TASK_CREATED,
            payload:
            {
                listId,
                task
            }
        }))
}
export const removeTask = (listId,itemId) => dispatch => {
    fetch(`http://localhost:5000/lists/${listId}/tasks/${itemId}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then((task) => dispatch({
            type:TASK_REMOVED, 
            payload: 
            {
                listId,
                itemId,
                task
            }}))
}