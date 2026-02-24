import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Task.jsx'

function App() {
  const [tasks, setTasks] = useState([
      {name: 'cs61b proj', status: false, dueDate: "1/1/26"},
      {name: 'calc hw', status: false, dueDate: "1/1/26"}
  ]);


  return (
    <>
    <h1>Hello this is a To-Do List</h1>
    {tasks.map((task) => (<Task
      name = {task.name}
      status = {task.status}
      dueDate = {task.dueDate} />
    ))}
    </>
  )
}

export default App
