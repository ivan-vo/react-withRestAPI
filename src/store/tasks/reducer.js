import { combineReducers } from 'redux';
import { TASKS_LOADED, TASK_CREATED } from './actions';

export default function loadList (state = [], action) {
    switch (action.type) {
        case TASKS_LOADED:
            var st = {}
            st[action.payload.listId] = action.payload.tasks;
            state = st;
            return state;
        case TASK_CREATED:
            state[action.payload.listId] = [
                ...state[action.payload.listId],
                action.payload.task
            ]
            return state;
        default:
            return state
    }
}
// export default combineReducers({
//     loadList
// })