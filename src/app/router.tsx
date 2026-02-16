import { createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { AnimalsPage } from '../features/animals/animals.page.tsx'
import { DashboardPage } from '../features/dashboard/dashboard.page.tsx'
import { AdoptionsPage } from '../features/adoptions/adoptions.page.tsx'
import { VolunteersPage } from '../features/volunteers/volunteers.page.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'animals',
        element: <AnimalsPage />,
      },
      {
        path: 'adoptions',
        element: <AdoptionsPage />,
      },
      {
        path: 'volunteers',
        element: <VolunteersPage />,
      },
    ],
  },
])
