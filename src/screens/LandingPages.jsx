import React from 'react'
import { Outlet } from 'react-router-dom'

function Sections() {
  return (
    <div className="p-5">
      <h1 className="text-orange-500 font-bold text-4xl tracking-wide uppercase mb-4">
        landing pages
      </h1>
      <Outlet />
    </div>
  )
}

export default Sections
