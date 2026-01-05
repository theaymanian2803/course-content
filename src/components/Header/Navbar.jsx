import React from 'react'
import { Link } from 'react-router-dom'

import {
  Copy,
  Check,
  Info,
  Layers,
  Code2,
  Zap,
  Rocket,
  ChevronRight,
  ExternalLink,
  Github,
} from 'lucide-react'
const GITHUB_REPO_URL = 'https://github.com/YOUR_USERNAME/YOUR_REPO_NAME'

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between px-6 md:px-10 py-8 border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-600 flex items-center justify-center rounded-lg rotate-3 shadow-[0_0_20px_rgba(234,88,12,0.3)]">
            <Layers size={24} className="text-white -rotate-3" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-black tracking-tighter text-xl leading-none italic uppercase">
              unccode
            </span>
            <span className="text-[10px] text-orange-500 font-bold tracking-[0.3em]">
              STACK GUIDE
            </span>
          </div>
        </Link>

        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noreferrer"
          className="bg-white text-black px-6 py-2 rounded-full text-[11px] font-black uppercase hover:bg-orange-600 hover:text-white transition-all flex items-center gap-2">
          <Github size={14} /> Clone Repo
        </a>
      </nav>
    </div>
  )
}

export default Navbar
