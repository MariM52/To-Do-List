import { useState } from 'react'
import Task from "../Task.jsx"
import "../index.css";

function Todo() {

  const [tasks, setTasks] = useState([
    {name: 'CS61b proj', status: "Not Started", dueDate: "1/1/26"},
    {name: 'Calc hw', status: "Not Started", dueDate: "1/1/26"}
  ]);

  return(
    <>
    <div>
      <h1>My To-Do List</h1>
      {tasks.map((task, index) => (
          <Task
          key={index}
          name={task.name}
          status={task.status}
          dueDate={task.dueDate}
          />
        ))}
    </div>
    </>
  )
}

export default Todo