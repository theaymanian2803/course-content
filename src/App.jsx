import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Header/Navbar'
import FilterNav from './components/setup/FilterNav'

function App() {
  return (
    <div className="bg-black ">
      <Navbar />
      <div className="flex gap-5 justify-start">
        <FilterNav />
        <Outlet />
      </div>
    </div>
  )
}

export default App
