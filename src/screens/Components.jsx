import React from 'react'
import { Link } from 'react-router-dom'
import ProductShowcase from '@/components/sections/ProductSectionOne'
import ProdTwo from '@/components/sections/ProdTwo'
import ProductThree from '@/components/sections/ProductThree'
import ProductFour from '@/components/sections/ProductFour'

function Components() {
  return (
    <div className="flex flex-wrap gap-8 p-8">
      {/* ---------------------------------------------------------------------------
          CARD 1: FIXED (Overlay Pattern)
      --------------------------------------------------------------------------- */}
      <div className="group relative block w-100 h-75 rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
        <div className="absolute top-0 left-0 w-7xl origin-top-left scale-[0.3125] pointer-events-none select-none bg-black h-screen">
          <ProductShowcase />
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />

        <Link
          to="/sections/sectionone"
          className="absolute inset-0 z-20"
          aria-label="View Product Showcase"
        />
      </div>
      <div className="group relative block w-100 h-75 rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
        <div className="absolute top-0 left-0 w-7xl origin-top-left scale-[0.3125] pointer-events-none select-none bg-black h-screen">
          <ProdTwo />
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />

        <Link
          to="/sections/sectiontwo"
          className="absolute inset-0 z-20"
          aria-label="View Product Showcase"
        />
      </div>

      {/* ---------------------------------------------------------------------------
          CARD 2: Placeholder
      --------------------------------------------------------------------------- */}

      <div className="group relative block w-100 h-75 rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
        <div className="absolute top-0 left-0 w-7xl origin-top-left scale-[0.3125] pointer-events-none select-none bg-black h-screen">
          <ProductThree />
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />

        <Link
          to="/sections/sectionthree"
          className="absolute inset-0 z-20"
          aria-label="View Product Showcase"
        />
      </div>

      <div className="group relative block w-100 h-75 rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
        <div className="absolute top-0 left-0 w-7xl origin-top-left scale-[0.3125] pointer-events-none select-none bg-black h-screen">
          <ProductFour />
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />

        <Link
          to="/sections/sectionfour"
          className="absolute inset-0 z-20"
          aria-label="View Product Showcase"
        />
      </div>
    </div>
  )
}

export default Components
