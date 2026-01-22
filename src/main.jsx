import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Import your main landing page
import App from './App.jsx'
import ChadcnScreen from './screens/ChadcnScreen'
import DocsScreen from './screens/DocsScreen'
import GithubScreen from '@/screens/GithubScreen'
import GitResetScreen from '@/screens/GitResetScreen'
import GithibHostingScreen from '@/screens/GithibHostingScreen'
import PrismaScreen from '@/screens/PrismaScreen'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/setup',
        element: <ChadcnScreen />,
      },
      {
        path: '/docs',
        element: <DocsScreen />,
      },
      {
        path: '/git',
        element: <GithubScreen />,
      },
      {
        path: '/git/reset',
        element: <GitResetScreen />,
      },
      {
        path: '/git/hosting',
        element: <GithibHostingScreen />,
      },
      {
        path: '/prisma',
        element: <PrismaScreen />,
      },
      {
        // --- ADDED BASENAME HERE ---
        basename: '/course-content',
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
