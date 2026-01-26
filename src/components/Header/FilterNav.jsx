import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  Database,
  BookOpen,
  GitBranch,
  RefreshCw,
  Cloud,
  LayoutTemplate,
  ChevronRight,
  Hexagon,
} from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility for merging classes
function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const NAV_LINKS = [
  { name: 'Shadcn Setup', path: '/setup', icon: LayoutTemplate },
  { name: 'libraries', path: '/libraries', icon: BookOpen },
  { name: 'Git Workflow', path: '/git', icon: GitBranch },
  { name: 'Reset Git', path: '/git/reset', icon: RefreshCw },
  { name: 'Github Hosting', path: '/git/hosting', icon: Cloud },
  { name: 'Prisma DB', path: '/prisma', icon: Database },
  { name: 'Components', path: '/components', icon: Database },
]

export default function FilterNav() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      {/* --- MOBILE TRIGGER (Visible only on small screens) --- */}
      <div className="md:hidden sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 p-4 flex justify-between items-center">
        <span className="font-bold text-white text-sm tracking-widest uppercase flex items-center gap-2">
          <Hexagon size={16} className="text-orange-600 fill-orange-600/20" />
          Modules
        </span>
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 bg-[#111] rounded-lg border border-white/10 text-gray-400 hover:text-white">
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* --- SIDEBAR CONTAINER --- */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-30 w-64 bg-[#050505] border-r border-white/5 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-[calc(100vh-80px)] md:sticky md:top-20',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}>
        {/* Header / Title */}
        <div className="p-6 border-b border-white/5 md:hidden">
          <h2 className="text-lg font-black italic uppercase tracking-tighter text-white">
            Nav<span className="text-orange-600">igation</span>
          </h2>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
          <div className="px-3 mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
            Development
          </div>

          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path
            const Icon = link.icon

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileOpen(false)}
                className={cn(
                  'group flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 border border-transparent',
                  isActive
                    ? 'bg-[#111] text-white border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]'
                    : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                )}>
                <div className="flex items-center gap-3">
                  <Icon
                    size={16}
                    className={cn(
                      'transition-colors',
                      isActive ? 'text-orange-500' : 'text-gray-600 group-hover:text-gray-400'
                    )}
                  />
                  <span>{link.name}</span>
                </div>

                {/* Active Indicator Arrow */}
                {isActive && (
                  <ChevronRight
                    size={14}
                    className="text-orange-600 animate-in fade-in slide-in-from-left-2"
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Footer / Status Area */}
        <div className="p-4 border-t border-white/5 bg-black/20">
          <div className="px-4 py-3 rounded-xl bg-orange-600/5 border border-orange-500/10 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-orange-500 uppercase">System Status</span>
              <span className="text-[10px] text-gray-500 font-medium">v2.4.0 Stable</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay (Closes menu when clicking outside) */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  )
}
