import { combineReducers, createStore } from 'redux'
import dashboardReducer from './dashboard/reducer'
import tasksReducer from './tasks/reducer'

export const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tasks: tasksReducer
})

const store = createStore(
    rootReducer,
    )

export default store