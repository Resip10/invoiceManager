import { createBrowserRouter, Navigate } from 'react-router-dom'
import React from 'react'
import App from './App'
import ErrorPage from './pages/errorPage/ErrorPage'
import Projects from './pages/projects/Projects'
import { loader as ProjectsLoader } from './pages/projects/loader'

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: '/projects',
        loader: ProjectsLoader,
        element: <Projects />,
      },
      {
        path: '/*',
        element: <Navigate to="/projects" />,
      },
    ],
  },
])

export default router
