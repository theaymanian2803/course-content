import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Import your main landing page
import App from './App.jsx'
import Setup from './screens/Setup'
import Youtube from './screens/Youtube'
import Docs from './screens/Docs'
import GitSetup from '@/components/setup/GitSetup.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/setup',
        element: <Setup />,
      },
      {
        path: '/docs',
        element: <Docs />,
      },
      {
        path: '/git',
        element: <GitSetup />,
      },
    ],
  },

  {
    path: '/Youtube',
    element: <Youtube />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
