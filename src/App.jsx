import { Link, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Todo from "./pages/Todo.jsx"

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/todo">ToDo List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  )
}

export default App