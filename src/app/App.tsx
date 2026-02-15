import './App.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <nav>
          <NavLink to="/" end>
            Dashboard
          </NavLink>
          <NavLink to="/animals">Zwierzęta</NavLink>
        </nav>
      </aside>
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  )
}

export default App
