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
import ProdTwo from '@/components/sections/ProdTwo'
import ProductThree from '@/components/sections/ProductThree'
import ProductFour from '@/components/sections/ProductFour'
//pages for landingpages
import PagesComp from '@/screens/PageComp'
import LandingPages from '@/screens/LandingPages'
import PgOne from '@/components/landingPage/PageOne'
import PgTwo from '@/components/landingPage/PageTwo'
//pages for landingpages
import PyCourse from '@/screens/PyCourse'
import PrismaAuthDocs from '@/screens/PrismaAuthDocs'

//frontbuild starts here

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
        { path: 'fullpages', element: <PagesComp /> },
        { path: 'frontend', element: <frontComp /> },
        { path: 'py', element: <PyCourse /> },
        { path: 'prismaauth', element: <PrismaAuthDocs /> },

        {
          path: '/sections',
          element: <Sections />,
          children: [
            { path: '/sections/sectionone', element: <ProductShowcase /> },
            { path: '/sections/sectiontwo', element: <ProdTwo /> },
            { path: '/sections/sectionthree', element: <ProductThree /> },
            { path: '/sections/sectionfour', element: <ProductFour /> },
          ],
        },
        {
          path: '/sectionpages',
          element: <LandingPages />,
          children: [
            { path: '/sectionpages/pageone', element: <PgOne /> },
            { path: '/sectionpages/pagetwo', element: <PgTwo /> },
          ],
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
