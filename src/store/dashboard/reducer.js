import { combineReducers } from 'redux'
import { DASHBOARD_LOADED} from './actions'

function openedTasksReducer(state = {}, action) {
    switch (action.type) {
        case DASHBOARD_LOADED:
            return action.payload.notDoneTasks.reduce((o, l) => ({...o, [l.idList] : l.countNotDoneTask}), {})
        default:
            return state;
    }
}

export default combineReducers({
    today: (numTaskToday = 0, {type, payload}) => type === DASHBOARD_LOADED ? payload.numTaskToday : numTaskToday,
    lists: (lists = [], {type, payload}) => type === DASHBOARD_LOADED ? payload.lists : lists,
    openedTasks: openedTasksReducer
})