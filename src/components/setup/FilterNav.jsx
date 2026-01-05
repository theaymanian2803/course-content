import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Github, ChevronDown } from 'lucide-react'

const GITHUB_REPO_URL = 'https://github.com/theaymanian2803/react-shadcn-tailwindcss-setup'

const NAV_LINKS = [
  { name: 'shadcn setup', path: '/setup' },
  { name: 'GitHub', path: '/github' },
  { name: 'Docs', path: '/docs' },
  { name: 'git/github', path: '/git' },
]

export default function FilterNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex md:flex-col justify-between items-center">
        {/* Desktop Navigation */}
        <div className=" hidden  md:flex md:flex-col items-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex items-center gap-2 hover:text-orange-500 transition-all">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center gap-2 text-white font-black uppercase text-xs border border-white/10 px-4 py-2 rounded-lg bg-[#111]">
          {isOpen ? <X size={18} /> : <Menu size={18} />}
          Menu
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-6 right-6 mt-2 bg-[#0D0D0D] border border-[#222] rounded-2xl overflow-hidden shadow-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="px-6 py-4 text-gray-400 font-bold uppercase text-xs border-b border-white/5 hover:bg-white hover:text-black transition-all">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
