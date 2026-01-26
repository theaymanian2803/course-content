import React from 'react'
import { Link } from 'react-router-dom'
import ProductShowcase from '@/components/sections/ProductSectionOne'

function Components() {
  return (
    <div className="flex flex-wrap gap-8 p-8">
      {/* ---------------------------------------------------------------------------
          CARD 1: Live Preview of ProductShowcase
          
          How it works:
          1. The Card is 400px wide.
          2. The Inner Div is 1280px wide (Standard Desktop).
          3. We scale the Inner Div by 0.3125 (400 / 1280 = 0.3125) to fit perfectly.
          4. 'pointer-events-none' ensures clicking the card activates the Link, 
             not the buttons inside the preview.
      --------------------------------------------------------------------------- */}
      <Link
        to="/sections/sectionone"
        className="group relative block w-[400px] h-[300px] rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
        {/* THE SCALED PREVIEW CONTAINER */}
        <div className="absolute top-0 left-0 w-[1280px] origin-top-left scale-[0.3125] pointer-events-none select-none bg-black h-screen">
          <ProductShowcase />
        </div>

        {/* Overlay Gradient (Better Text Readability) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-20" />

        {/* Card Label */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
            Hero Component
          </span>
          <h3 className="text-white font-display text-2xl font-bold uppercase tracking-wide">
            Product Showcase
          </h3>
        </div>
      </Link>

      {/* ---------------------------------------------------------------------------
          CARD 2: Placeholder
      --------------------------------------------------------------------------- */}
      <div className="relative w-[400px] h-[300px] rounded-2xl border border-dashed border-white/10 bg-white/5 overflow-hidden flex items-center justify-center group">
        <div className="text-center">
          <h3 className="text-xl text-white/40 font-display uppercase tracking-widest mb-4 group-hover:text-white transition-colors">
            Section Two
          </h3>
          <Link
            to="/sections/sectionstwo"
            className="px-6 py-2 rounded-full border border-white/10 text-sm text-white hover:bg-white hover:text-black transition-colors">
            Coming Soon
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Components
