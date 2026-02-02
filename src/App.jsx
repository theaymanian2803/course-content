import React, { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Header/Navbar'
import FilterNav from './components/header/FilterNav'
import { PanelLeftClose, PanelLeftOpen, SlidersHorizontal, Sparkles } from 'lucide-react'

function App() {
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen w-full bg-black/90 text-white selection:bg-orange-500/30 font-body">
      <Navbar />

      <main className="w-full pt-28 pb-12">
        {/* Header Section */}
        <div className="w-full px-6 md:px-12 mb-8 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl font-display uppercase">
              Start{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Navigating
              </span>
            </h1>
            <p className="text-stone-400 mt-2 text-sm">
              Select your preferences to find the perfect setup.
            </p>
          </div>

          {/* Toggle Button Area */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`
              group flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300
              ${
                isSidebarOpen
                  ? 'bg-orange-500/10 border-orange-500/50 text-orange-400'
                  : 'bg-white/5 border-white/10 text-stone-400 hover:bg-white/10 hover:text-white'
              }
            `}>
            {isSidebarOpen ? (
              <PanelLeftClose className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            ) : (
              <PanelLeftOpen className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            )}
            <span className="font-bold text-sm tracking-wide uppercase">
              {isSidebarOpen ? 'Hide Filters' : 'Show Filters'}
            </span>
            {!isSidebarOpen && <SlidersHorizontal className="w-4 h-4 ml-2 opacity-50" />}
          </button>
        </div>

        {/* Layout Container */}
        <div className="flex flex-col md:flex-row gap-0 items-start w-full px-4 md:px-8 relative transition-all">
          {/* Sidebar */}
          {/* We use width/opacity transitions to create a slide effect */}
          <aside
            className={`
              flex-shrink-0 sticky top-32 z-40 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
              ${
                isSidebarOpen
                  ? 'w-full md:w-72 opacity-100 mr-8' // Open State
                  : 'w-0 opacity-0 mr-0' // Closed State
              }
            `}>
            {/* Inner container prevents content squishing during animation */}
            <div className="w-full md:w-72">
              <FilterNav />
            </div>
          </aside>

          {/* Content Area (Outlet) */}
          <section className="flex-1 w-full min-w-0  border-white/5 overflow-hidden shadow-2xl relative">
            {/* Optional: Decorative gradient at top of content */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium uppercase tracking-wider">
              <Sparkles size={12} />
              <span>Welcome Aboard</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-3 h-1 bg-linear-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-50"></div>

            <Outlet />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
