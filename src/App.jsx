import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Header/Navbar'
import FilterNav from './components/setup/FilterNav'

function App() {
  return (
    <div className="bg-black ">
      <Navbar />
      <div className="md:flex justify-center items-center md:items-start gap-5 md:justify-start w-full">
        <FilterNav />
        <Outlet />
      </div>
    </div>
  )
}

export default App
