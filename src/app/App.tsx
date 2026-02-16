import './App.css'
import { NavLink, Outlet } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-semibold py-2 px-4 rounded mb-2 ${
    isActive ? 'text-primary bg-primary/10' : 'text-foreground hover:bg-foreground/10'
  }`

function App() {
  return (
    <div className="grid grid-cols-[300px_1fr] min-h-screen">
      <aside className="bg-sidebar shadow-lg flex flex-col px-6 py-12">
        <div className="mb-8">
          <span className="text-primary text-4xl font-bold">Stats</span>
        </div>
        <nav className="flex flex-col">
          <NavLink to="/" end className={navLinkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/animals" className={navLinkClass}>
            Zwierzęta
          </NavLink>
          <NavLink to="/adoptions" className={navLinkClass}>
            Adopcje
          </NavLink>
          <NavLink to="/volunteers" className={navLinkClass}>
            Wolontariusze
          </NavLink>
        </nav>
      </aside>
      <main className="mx-10 my-12">
        <Outlet />
      </main>
    </div>
  )
}

export default App
