import './App.css';
import Dashboard from './components/Dashboard';
import TodoListPage from './components/TodoListPage';
import TodayTaskPage from './components/TodayTaskPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux';

import store from './store/index'

function App() {
  const lists = useSelector(state => state.dashboard.lists)
  
  return (
    <div className="App">
      <Router>
        <Dashboard  />
        <div className='tasks'>
          <Switch>
            <Route path="/todo-lists/:id">
              <TodoListPage />
            </Route>
            <Route path="/today">
              <TodayTaskPage taskLists={lists}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div >
  );
}
export default App;
