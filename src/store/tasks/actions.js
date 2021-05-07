export const TASKS_LOADED = 'tasks/loaded'
export const loadTasks = (listId) => async(dispatch) => {
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
export const loadTodayTasks = () => async(dispatch) => {
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

// useEffect(() => {
//     fetch(`http://localhost:5000/lists/${id}/tasks`)
//         .then(res => res.json())
//         .then(setTasks)
// }, [id])