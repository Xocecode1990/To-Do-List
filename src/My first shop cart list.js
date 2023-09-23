import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  const [inputtext, setInputText] = useState('');
  const [listTask, setListtask] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const Addtask = () => {
    const task = {
      id: listTask.length === 0 ? 1 : listTask[listTask.length - 1].id + 1,
      taskname: inputtext,
      completed: false,
    };
    setListtask([...listTask, task]);
  };

  const DeleteTask = (id) => {
    setListtask(listTask.filter((task) => task.id !== id));
  };

  const completedTask = (id) => {
    setListtask(
      listTask.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: true,
          };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <input onChange={handleChange} type="text"></input>
      <button onClick={Addtask}>Add task</button>
      <div>
        {listTask.map((task) => {
          return (
            <Task
              taskname={task.taskname}
              id={task.id}
              DeleteTask={DeleteTask}
              completedTask={completedTask}
              completed={task.completed}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
