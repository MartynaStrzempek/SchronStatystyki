import { createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { AnimalsPage } from '../features/animals/animals.page.tsx'
import { DashboardPage } from '../features/dashboard/dashboard.page.tsx'

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
    ],
  },
])
