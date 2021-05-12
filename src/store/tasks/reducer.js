import { combineReducers } from 'redux';
import { TASKS_LOADED, TASK_CREATED, TASK_REMOVED, TASK_STATUS_UPDATED } from './actions';

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
        case TASK_REMOVED:
            const { listId, itemId } = action.payload
            return state.filter(task => task.id !== itemId)
        case TASK_STATUS_UPDATED:
            return 
        default:
            return state
    }
}
