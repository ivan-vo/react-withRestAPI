import { combineReducers } from 'redux';
import { TASKS_LOADED, TASK_CREATED } from './actions';

export default function loadList (state = {}, action) {
    switch (action.type) {
        case TASKS_LOADED:
            const { listId, tasks } = action.payload;
            return {
                ...state,
                [listId] : tasks
            }
        case TASK_CREATED:
            const { listId, task } = action.payload
            return {
                ...state,
                [listId]: [...state[listId], task]
            }
        default:
            return state
    }
}
// export default combineReducers({
//     loadList
// })