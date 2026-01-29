import React from 'react'
import { Link } from 'react-router-dom'
import ProductShowcase from '@/components/sections/ProductSectionOne'

function Components() {
  return (
    <div className="flex flex-wrap gap-8 p-8">
      {/* ---------------------------------------------------------------------------
          CARD 1: FIXED (Overlay Pattern)
      --------------------------------------------------------------------------- */}
      <div className="group relative block w-[400px] h-[300px] rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
        {/* 1. PREVIEW CONTAINER 
            (pointer-events-none ensures we don't interact with inner links) 
        */}
        <div className="absolute top-0 left-0 w-[1280px] origin-top-left scale-[0.3125] pointer-events-none select-none bg-black h-screen">
          <ProductShowcase />
        </div>

        {/* 2. OVERLAY GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />

        {/* 3. THE FIX: CLICKABLE OVERLAY LINK 
            This sits on top (z-20) and handles the navigation. 
            It is a SIBLING to ProductShowcase, not a parent.
        */}
        <Link
          to="/sections/sectionone"
          className="absolute inset-0 z-20"
          aria-label="View Product Showcase"
        />

        {/* 4. CARD LABEL 
            (pointer-events-none ensures clicks pass through to the Link layer) 
        */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
          <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
            Hero Component
          </span>
          <h3 className="text-white font-display text-2xl font-bold uppercase tracking-wide">
            Product Showcase
          </h3>
        </div>
      </div>

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
