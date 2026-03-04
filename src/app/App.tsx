import './App.css'
import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-semibold py-2 px-4 rounded mb-2 ${
    isActive ? 'text-primary bg-primary/10' : 'text-foreground hover:bg-foreground/10'
  }`

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() =>
    document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
    <div className="grid grid-cols-[300px_1fr] min-h-screen max-w-[2000px]">
      <aside className="bg-sidebar shadow-lg flex flex-col px-6 py-12">
        <div className="mb-8">
          <span className="text-primary text-4xl font-bold">Stats</span>
        </div>
        <nav className="flex flex-col flex-1">
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
        <div className="mt-8 flex gap-2">
          <Button
            type="button"
            size="xs"
            variant={!isDarkMode ? 'default' : 'outline'}
            onClick={() => setIsDarkMode(false)}
          >
            Light
          </Button>
          <Button
            type="button"
            size="xs"
            variant={isDarkMode ? 'default' : 'outline'}
            onClick={() => setIsDarkMode(true)}
          >
            Dark
          </Button>
        </div>
      </aside>
      <main className="mx-10 my-12">
        <Outlet />
      </main>
    </div>
  )
}

export default App
