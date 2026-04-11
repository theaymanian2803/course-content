import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Import your main landing page and your new Docs layout
import App from './App.jsx'
import Docs from './screens/Docs.jsx' // ⚠️ Make sure to create this file!

import GithibHostingScreen from '@/screens/GithibHostingScreen.jsx'
import GithubScreen from '@/screens/GithubScreen.jsx'
import GitResetScreen from '@/screens/GitResetScreen.jsx'
import PrismaScreen from '@/screens/PrismaScreen.jsx'
import ChadcnScreen from './screens/ChadcnScreen.jsx'
import Components from './screens/Components.jsx'
import DocsScreen from './screens/DocsScreen.jsx'
import ErrorScreen from './screens/ErrorScreen.jsx'
import Sections from './screens/Sections.jsx'

// SECTIONS
import ProdTwo from '@/components/sections/ProdTwo.jsx'
import ProductFour from '@/components/sections/ProductFour.jsx'
import ProductSectionOne from '@/components/sections/ProductSectionOne.jsx'
import ProductThree from '@/components/sections/ProductThree.jsx'

// PAGES
import PageOne from '@/components/landingPage/PageOne.jsx'
import PageTwo from '@/components/landingPage/PageTwo.jsx'
import LandingPages from '@/screens/LandingPages.jsx'
import PagesComp from '@/screens/PageComp.jsx'

// COURSE SCREENS
import PrismaAuthDocs from '@/screens/PrismaAuthDocs.jsx'
import PyCourse from '@/screens/PyCourse.jsx'

// ⚠️ I commented this out because this file likely doesn't exist yet
// import FrontComp from '@/screens/FrontComp.jsx'

// SUPABASE
import AuthHandoverGuide from '@/screens/SupabaseGoogleAuth.jsx'
import SupabaseGuide from '@/screens/SupabaseGuide.jsx'
import SupabaseSetup from '@/screens/SupabaseSetup.jsx'

const router = createBrowserRouter([
  // 1. Standalone Landing Page
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorScreen />,
  },

  // 2. Docs Layout (Wraps all the other routes)
  {
    element: <Docs />, // This acts as the parent layout
    errorElement: <ErrorScreen />,
    children: [
      { path: '/setup', element: <ChadcnScreen /> },
      { path: '/libraries', element: <DocsScreen /> },
      { path: '/git', element: <GithubScreen /> },
      { path: '/git/reset', element: <GitResetScreen /> },
      { path: '/git/hosting', element: <GithibHostingScreen /> },
      { path: '/prisma', element: <PrismaScreen /> },
      { path: '/components', element: <Components /> },
      { path: '/fullpages', element: <PagesComp /> },

      // ⚠️ Uncomment when FrontComp.jsx is created
      // { path: '/frontend', element: <FrontComp /> },

      { path: '/py', element: <PyCourse /> },
      { path: '/prismaauth', element: <PrismaAuthDocs /> },
      { path: '/supabase', element: <SupabaseGuide /> },
      { path: '/supa', element: <SupabaseSetup /> },
      { path: '/supabsegoogle', element: <AuthHandoverGuide /> },

      {
        path: '/sections',
        element: <Sections />,
        children: [
          { path: '/sections/sectionone', element: <ProductSectionOne /> },
          { path: '/sections/sectiontwo', element: <ProdTwo /> },
          { path: '/sections/sectionthree', element: <ProductThree /> },
          { path: '/sections/sectionfour', element: <ProductFour /> },
        ],
      },
      {
        path: '/sectionpages',
        element: <LandingPages />,
        children: [
          { path: '/sectionpages/pageone', element: <PageOne /> },
          { path: '/sectionpages/pagetwo', element: <PageTwo /> },
        ],
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
