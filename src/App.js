import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import TodoListPage from './components/TodoListPage';
import TodayTaskPage from './components/TodayTaskPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import store from './store/index';
import { useDispatch } from 'react-redux';
import {loadLists} from './store/dashboard/actions';

console.log(store.getState());
function App() {

  const [taskLists, setTaskLists] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tasklists")
      .then(res => res.json())
      .then(setTaskLists);
  }, [])
  const dispatch = useDispatch();
  // dispatch(loadLists())
  

  return (
    <div className="App">
      <Router>
        {/* <Dashboard taskLists={store.getState().dashboard.lists} /> */}
        <Dashboard taskLists={taskLists} />
        <div className='tasks'>
          <Switch>
            <Route path="/todo-lists/:id">
              <TodoListPage />
            </Route>
            <Route path="/today">
              <TodayTaskPage taskLists={taskLists}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
