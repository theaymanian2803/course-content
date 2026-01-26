// src/screens/ErrorScreen.jsx
import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const ErrorScreen = () => {
  const error = useRouteError()

  return (
    // Main container: Black background to match your app theme
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black text-white p-4">
      <div className="text-center">
        {/* Large 404 with Orange/Gold Gradient text */}
        <h1 className="text-9xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600">
          404
        </h1>

        {/* 'Page Not Found' Badge */}
        <div className="bg-[#FF6A00] px-2 text-sm rounded rotate-12 absolute inline-block text-black font-bold">
          Page Not Found
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold md:text-3xl text-gray-200">Lost in Space?</h3>
          <p className="mt-4 text-gray-400 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>

          {/* Technical error details (optional, helps debugging) */}
          <div className="mt-2 text-xs font-mono text-gray-600">
            {error?.statusText || error?.message}
          </div>

          {/* Action Button: Matches your 'Guide' and 'System Status' style */}
          <Link
            to="/"
            className="mt-8 inline-block rounded-full border border-orange-500 px-8 py-3 text-sm font-medium text-orange-500 hover:bg-orange-500 hover:text-black focus:outline-none focus:ring active:text-orange-500 transition-all duration-300">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorScreen
