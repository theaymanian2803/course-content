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
import ErrorScreen from './screens/ErrorScreen'
import Components from './screens/Components'
import Sections from './screens/Sections'
import ProductShowcase from '@/components/sections/ProductSectionOne'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorScreen />,
      children: [
        { path: 'setup', element: <ChadcnScreen /> },
        { path: 'libraries', element: <DocsScreen /> },
        { path: 'git', element: <GithubScreen /> },
        { path: 'git/reset', element: <GitResetScreen /> },
        { path: 'git/hosting', element: <GithibHostingScreen /> },
        { path: 'prisma', element: <PrismaScreen /> },
        { path: 'components', element: <Components /> },

        {
          path: '/sections',
          element: <Sections />,
          children: [{ path: '/sections/sectionone', element: <ProductShowcase /> }],
        },
      ],
    },
  ],
  {
    // CORRECT PLACEMENT: As the second argument to createBrowserRouter
    basename: '/course-content',
  }
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
