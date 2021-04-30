import { useState } from 'react';
import './App.css';
import NewTaskForm from './components/NewTaskForm';
import Task from './components/Task';
import TodoListSidebar from './components/TodoListSidebar';

function App() {
  const [todoLists, setTodoLists] = useState(
    [
      {
        title: 'sport',
        id: 1,
        tasks: [
          { id: 6, title: 'play fotball', done: true, description: '', dueDate: new Date('2021-12-23') },
          { id: 4, title: 'play valeyball', done: false, description: 'Well Done', dueDate: new Date('2021-9-05') },
          { id: 5, title: 'play basketball', done: true, description: '', dueDate: '' }
        ]
      },
      {
        title: 'Work',
        id: 2,
        tasks: [
          { id: 1, title: 'Do homework', done: true, description: '', dueDate: new Date('2021-12-04') },
          { id: 2, title: 'write code', done: false, description: '', dueDate: new Date('2021-12-05') },
          { id: 3, title: 'movo to trash', done: true, description: '', dueDate: new Date('2021-12-06') }
        ]
      },
      {
        title: 'College',
        id: 3,
        tasks: [
          { id: 1, title: 'Do homework', done: true, description: '', dueDate: new Date('2021-12-04') },
          { id: 2, title: 'write code', done: false, description: '', dueDate: new Date('2021-12-05') },
          { id: 3, title: 'movo to trash', done: true, description: '', dueDate: new Date('2021-12-06') }
        ]
      }
    ]
  )

  const [selectedList, setSelectedList] = useState(todoLists[1]);

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

  return (
    <div className="App">

      <TodoListSidebar onClick={newSelectTasks} SL={selectedList} todoLists={todoLists} />
      <div className='tasks'>
        <h1 className="list-name">{selectedList.title}</h1>
        {
          selectedList.tasks.map(task => (<Task setDone={replaceTask} onClick={removeTask} task={task} key={task.id} />))
        }
        <NewTaskForm onSubmit={addTask} />
      </div>
    </div>
  );
}

export default App;
