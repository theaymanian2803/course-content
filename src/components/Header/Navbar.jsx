import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Github, Layers, Terminal, Cpu, Menu, X, ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility for cleaner classes (Fixed for JS)
function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const GITHUB_REPO_URL = 'https://github.com/repos?q=owner%3A%40me'

// Navigation Items
const NAV_ITEMS = [
  { name: 'Guide', path: '/', icon: Layers },
  { name: 'Components', path: '/components', icon: Cpu },
  { name: 'CLI', path: '/cli', icon: Terminal },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Note: This hook requires your app to be wrapped in <BrowserRouter>
  // If it crashes, make sure your index.js wraps App with BrowserRouter
  const location = useLocation()

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050505]/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* --- LEFT: LOGO --- */}
          <Link to="/" className="group flex items-center gap-3 relative z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-600 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative w-10 h-10 bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 rounded-xl flex items-center justify-center group-hover:border-orange-500/50 transition-colors">
                <Layers
                  size={20}
                  className="text-white group-hover:text-orange-500 transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-lg leading-none text-white flex items-center gap-2">
                unccode
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-white/5 text-gray-400 border border-white/5">
                  v2.0
                </span>
              </span>
              <span className="text-[10px] text-gray-500 font-medium tracking-widest mt-1 group-hover:text-orange-500 transition-colors">
                STACK GUIDE
              </span>
            </div>
          </Link>

          {/* --- CENTER: DESKTOP NAV --- */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 absolute left-1/2 -translate-x-1/2">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    'px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2',
                    isActive
                      ? 'bg-[#111] text-white shadow-sm ring-1 ring-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  )}>
                  <Icon size={12} className={cn(isActive ? 'text-orange-500' : 'opacity-50')} />
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* --- RIGHT: ACTIONS --- */}
          <div className="flex items-center gap-4">
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex group relative items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-orange-500 hover:text-white transition-all overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
              <Github size={16} />
              <span>get Repos</span>
              <ChevronRight
                size={14}
                className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white bg-white/5 rounded-lg">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 text-lg font-medium text-gray-200 hover:bg-white/10 hover:border-orange-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <Icon size={20} className="text-orange-500" />
                    {item.name}
                  </div>
                  <ChevronRight size={16} className="text-gray-600" />
                </Link>
              )
            })}
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-orange-500 hover:text-white transition-colors">
              <Github size={18} /> Clone Repo
            </a>
          </div>
        </div>
      )}
    </>
  )
}
