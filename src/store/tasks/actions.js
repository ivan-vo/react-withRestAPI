const TASKS_LOADED = 'tasks/loaded'
const loadTasks = listId => dispatch => {
    fetch(`/api/lists/${listId}/tasks`)
        .then(res => res.json())
        .then(tasks => dispatch({
            type: TASKS_LOADED,
            listId,
            tasks
        }))
}