export const DASHBOARD_LOADED = 'dashboard/loaded'

export const loadDashboard = () => async (dispatch) => {
    fetch('http://localhost:5000/dashboard')
        .then(res => res.json())
        .then(dashboard => dispatch({type: DASHBOARD_LOADED, payload: dashboard}))
}

