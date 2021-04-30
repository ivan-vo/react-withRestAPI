import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import NewTaskForm from './components/NewTaskForm';
import Task from './components/Task';

function App() {

  const [allTask, setAllTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then(res => res.json())
      .then(res => setAllTasks(res))
  }, [])

  const [taskLists, setTaskLists] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tasklists")
      .then(res => res.json())
      .then(res => setTaskLists(res))
  }, [])
  const [selectedList, setSelectedList] = useState();
  console.log(taskLists);
  console.log(selectedList);
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
  }

  return (
    <div className="App">
      <Dashboard onSelect={selectTodoList} taskLists={taskLists}/>
      <div className='tasks'>
        {/* <h1 className="list-name">{selectedList.name}</h1> */}
        {
          allTask.map(task => (<Task setDone={replaceTask} onClick={removeTask} selectedList={} task={task} key={task.id} />))
        }
        <NewTaskForm onSubmit={addTask} />
      </div>
    </div>
  );
}

export default App;
