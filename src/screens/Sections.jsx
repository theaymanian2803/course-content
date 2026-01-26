import React from 'react'
import { Outlet } from 'react-router-dom'
function Sections() {
  return (
    <div>
      <h1>Preview section / herosections / landing pages / components</h1>
      <Outlet />
    </div>
  )
}

export default Sections
