import { Link, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Todo from "./pages/Todo.jsx"
import Pokedex from "./pages/Pokedex.jsx"
import Error from "./pages/Error.jsx"

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/todo">ToDo List</Link>
        <Link to="/error">Error</Link>
        <Link to="/pokedex">Pokedex</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/error" element={<Error />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </>
  )
}

export default App