import './App.css';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { AddTask } from './components/AddTask';
import { useState,useEffect } from 'react';

function App() {

  const [taskList,setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || []);//accessing local storage task list instead of passing empty list of objects..Also if we get some content then we need to parse it, for visiting the website very first time taskList is undefined so we give empty list else taskList;
  const [task,setTask] = useState({});
  
  //to set task in local storage we use hook which is useEffect()...

  useEffect(() => {
    localStorage.setItem('taskList',JSON.stringify(taskList));
  },[taskList]);

  return (
    <div className={"App"}>
      <div className="container">
        <Header />
        <AddTask 
        taskList={taskList} 
        setTaskList={setTaskList} 
        task={task}
        setTask={setTask}
        />
        <TaskList 
        taskList={taskList} 
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
        />
      </div>
    </div>
  );
}

export default App;
