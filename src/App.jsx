import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Task.jsx'

function App() {
  
  const [tasks, setTasks] = useState([
      {name: 'CS61b proj', status: "Not Started", dueDate: "1/1/26"},
      {name: 'Calc hw', status: "Not Started", dueDate: "1/1/26"}
  ]);


  return (
    <>
    <div className='todo'>
    <h1>My To-Do List</h1>
    {tasks.map((task) => (<Task
      name = {task.name}
      status = {task.status}
      dueDate = {task.dueDate} />
    ))}
    </div>
    </>
  )
}

export default App
