import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Header/Navbar'
import FilterNav from './components/header/FilterNav'

function App() {
  return (
    <div className="min-h-screen w-full bg-black/70 text-white selection:bg-orange-500/30 font-body">
      <Navbar />

      {/* FIX:
         1. Added 'w-full' to ensure main spans 100% of the viewport.
         2. Removed 'bg-red-800'.
      */}
      <main className="w-full pt-28 pb-12">
        {/* Header Section */}
        <div className="w-full px-6 md:px-12 mb-10 border-b border-white/10 pb-8">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl font-display uppercase">
            Start{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Navigating
            </span>
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl font-light">
            Browse through the component library, documentation, and system status below.
          </p>
        </div>

        {/* Layout Container 
           - Added 'w-full' to ensure the flexbox fills the main container.
        */}
        <div className="flex flex-col md:flex-row gap-8 items-start w-full px-4 md:px-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0 sticky top-32 z-40">
            <FilterNav />
          </aside>

          {/* Content Area (Outlet)
             - 'flex-1' grows to fill remaining space.
             - 'min-w-0' is critical for preventing flex overflow bugs.
          */}
          <section className="flex-1 w-full min-w-0 bg-card/30 rounded-xl border border-white/5 overflow-hidden">
            <Outlet />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
