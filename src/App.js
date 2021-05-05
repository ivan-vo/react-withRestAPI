import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import NewTaskForm from './components/NewTaskForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams
} from "react-router-dom";

import TodoListPage from './components/TodoListPage';
import TodayTaskPage from './components/TodayTaskPage';

function App() {

  const [taskLists, setTaskLists] = useState([]);
  const [selectedList, setSelectedList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tasklists")
      .then(res => res.json())
      .then(setTaskLists);
  }, [])

  const addTask = (task) => {
    let list = selectedList;
    list.tasks.push(task)
    setSelectedList({ ...list })
  }

  const newSelectTasks = (list) => {
    setSelectedList(list)
  }

  const removeTask = (task) => {
    let list = selectedList;
    let index = list.tasks.indexOf(task);
    list.tasks.splice(index, 1);
    setSelectedList({ ...list })
  }

  const replaceTask = (oldtask, task) => {
    let list = selectedList;
    let index = list.tasks.indexOf(oldtask);
    list.tasks[index] = task;
    setSelectedList({ ...list })
  }

  const selectTodoList = (list) => {
    setSelectedList(list);
    console.log(list);
  }

  return (
    <div className="App">
      <Router>
        <Dashboard onSelect={selectTodoList} taskLists={taskLists} />
        <div className='tasks'>
          <Switch>
            <Route path="/todo-lists/:id">
              <TodoListPage selectedListId={selectedList.taskListId}/>
            </Route>
            <Route path="/today">
              <TodayTaskPage />
            </Route>
          </Switch>
          <NewTaskForm onSubmit={addTask} />
        </div>
      </Router>
    </div >
  );
}

export default App;
