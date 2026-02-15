import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Import your main landing page
import App from './App.jsx'
import ChadcnScreen from './screens/ChadcnScreen.jsx'
import DocsScreen from './screens/DocsScreen.jsx'
import GithubScreen from '@/screens/GithubScreen.jsx'
import GitResetScreen from '@/screens/GitResetScreen.jsx'
import GithibHostingScreen from '@/screens/GithibHostingScreen.jsx'
import PrismaScreen from '@/screens/PrismaScreen.jsx'
import ErrorScreen from './screens/ErrorScreen.jsx'
import Components from './screens/Components.jsx'
import Sections from './screens/Sections.jsx'

// SECTIONS
import ProductSectionOne from '@/components/sections/ProductSectionOne.jsx'
import ProdTwo from '@/components/sections/ProdTwo.jsx'
import ProductThree from '@/components/sections/ProductThree.jsx'
import ProductFour from '@/components/sections/ProductFour.jsx'

// PAGES
import PagesComp from '@/screens/PageComp.jsx'
import LandingPages from '@/screens/LandingPages.jsx'
import PageOne from '@/components/landingPage/PageOne.jsx'
import PageTwo from '@/components/landingPage/PageTwo.jsx'

// COURSE SCREENS
import PyCourse from '@/screens/PyCourse.jsx'
import PrismaAuthDocs from '@/screens/PrismaAuthDocs.jsx'

// ⚠️ I commented this out because this file likely doesn't exist yet
// import FrontComp from '@/screens/FrontComp.jsx'

// SUPABASE
import SupabaseGuide from '@/screens/SupabaseGuide.jsx'
import SupabaseSetup from '@/screens/SupabaseSetup.jsx'

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

        // ⚠️ I commented this route out to stop the crash.
        // Uncomment it only when you have created the 'FrontComp.jsx' file.
        // { path: 'frontend', element: <FrontComp /> },

        { path: 'py', element: <PyCourse /> },
        { path: 'prismaauth', element: <PrismaAuthDocs /> },
        { path: 'supabase', element: <SupabaseGuide /> },
        { path: 'supa', element: <SupabaseSetup /> },

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
  ],
  {
    basename="/courses", // Only keep this if your site is at unccode.org/course-content
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
