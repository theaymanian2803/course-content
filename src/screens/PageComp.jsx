import React from 'react'
import { Link } from 'react-router-dom'
import PageOne from '@/components/landingPage/PageOne'
import PageTwo from '@/components/landingPage/PageTwo'

function PageComponents() {
  return (
    <div>
      <div className="flex flex-wrap gap-8 p-8">
        {/* CARD 1: PageOne Preview */}
        <div className="group relative block w-[400px] h-[300px] rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
          {/* Preview Container (pointer-events-none prevents nested link interaction) */}
          <div className="absolute top-0 left-0 w-[1280px] origin-top-left scale-[0.3125] pointer-events-none select-none bg-black h-screen">
            <PageOne />
          </div>

          {/* Overlay Link (The Fix) */}
          <Link to="/sectionpages/pageone" className="absolute inset-0 z-20" />
        </div>
        <div className="group relative block w-[400px] h-[300px] rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
          {/* Preview Container (pointer-events-none prevents nested link interaction) */}
          <div className="absolute top-0 left-0 w-[1280px] origin-top-left scale-[0.3125] pointer-events-none select-none bg-black h-screen">
            <PageTwo />
          </div>

          {/* Overlay Link (The Fix) */}
          <Link to="/sectionpages/pagetwo" className="absolute inset-0 z-20" />
        </div>

        {/* CARD 2: Placeholder */}
        <div className="relative w-[400px] h-[300px] rounded-2xl border border-dashed border-white/10 bg-white/5 overflow-hidden flex items-center justify-center group">
          <div className="text-center">
            <h3 className="text-xl text-white/40 font-display uppercase tracking-widest mb-4 group-hover:text-white transition-colors">
              page three
            </h3>
            <Link
              to="/sections/sectionstwo"
              className="px-6 py-2 rounded-full border border-white/10 text-sm text-white hover:bg-white hover:text-black transition-colors">
              Coming Soon
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageComponents
