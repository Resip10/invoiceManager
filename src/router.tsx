import { createBrowserRouter, Navigate } from 'react-router-dom'
import React from 'react'
import App from './App'
import Projects from './pages/projects/Projects'
import { loader as ProjectsLoader } from './pages/projects/loader'
import { loader as InvoicesLoader } from './pages/invoices/loader'
import Invoices from './pages/invoices/Invoices'
import Invoice from './pages/invoice/Invoice'

const router = createBrowserRouter([
  {
    errorElement: <Navigate to="/" />,
    element: <App />,
    children: [
      {
        index: true,
        path: '/projects',
        loader: ProjectsLoader,
        element: <Projects />,
      },
      {
        path: '/projects/:id/invoices',
        loader: InvoicesLoader,
        element: <Invoices />,
      },
      {
        path: '/projects/:id/invoices/:invoiceId',
        // loader: InvoicesLoader,
        element: <Invoice />,
      },
    ],
  },
  {
    path: '/*',
    element: <Navigate to="/projects" />,
  },
])

export default router
