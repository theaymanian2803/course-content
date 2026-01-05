import React from 'react'
import { Link } from 'react-router-dom'

const GITHUB_REPO_URL = 'https://github.com/theaymanian2803/react-shadcn-tailwindcss-setup'

function Navbar() {}

function FilterNav() {
  return (
    <div>
      <div className="hidden md:flex md:flex-col gap-8 text-[11px] font-black uppercase tracking-widest text-gray-500">
        <Link to="/setup" className="hover:text-white transition">
          Setup Steps
        </Link>
        <Link href={GITHUB_REPO_URL} className="hover:text-orange-500 transition">
          GitHub
        </Link>
        <Link to="/docs" className="hover:text-orange-500 transition">
          Docs
        </Link>
      </div>
    </div>
  )
}

export default FilterNav
