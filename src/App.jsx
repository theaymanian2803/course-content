import React from 'react'
import NavBar from './components/header/NavBar'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#020202] text-white selection:bg-orange-500/30 font-body">
      <NavBar />

      <main className="w-full pt-32 pb-12 px-6 flex flex-col items-center justify-center text-center">
        {/* Replace this placeholder with your actual Landing Page content */}
        <div className="max-w-3xl mx-auto space-y-8 mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-stone-400 text-sm font-medium">
            🚀 Version 2.0 is now live
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            Build The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Impossible
            </span>
          </h1>

          <p className="text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Welcome to the new platform. This is your landing page. Build your features,
            testimonials, and pricing right here.
          </p>

          <div className="pt-8">
            <Link
              to="/setup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold uppercase tracking-wider rounded-xl transition-all hover:scale-105">
              Enter Documentation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
