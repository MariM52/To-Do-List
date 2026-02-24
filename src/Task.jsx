import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Task({name, status, dueDate}) {
    
    return (
        <>
        <h1>Name: {name}</h1>
        <h2>Due Date: {dueDate}</h2>
        <h2>Status: {status}</h2>
        </>
    )
}

export default Task
