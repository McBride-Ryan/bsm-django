import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (

    <div className=''>
      <nav className="w-full grid md:justify-items-stretch lg:grid-cols-3 lg:items-center py-4 px-16 content-center inline-grid">
            <div className="lg:grid hidden">
                <div className="relative justify-self-start lg:inline-grid items-center rounded-md py-2">
                    <div className="flex inline-flex absolute">
                        <button >
                            <svg className="z-50 hover:cursor-pointer fill-current w-5 text-gray-500 ml-2" viewBox="0 0 24 24">
                                <path className="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="md:mt-0 grid justify-self-center inline-grid">
                <a href="/">
                    <h1 className="text-4xl text-white">The Pantheon</h1>
                </a>
            </div>
            <div className="md:mt-0 grid items-center justify-self-end lg:grid hidden">
              <div>
                  <a href="/register"
                      className="px-1 inline text-xs text-white font-bold uppercase hover:underline">
                      Register
                  </a>
                  <span className="text-white">|</span>
                  <a href="/login"
                      className="px-1 inline text-xs text-white font-bold uppercase hover:underline">
                      Log In
                  </a>
              </div>
                
            </div>
        </nav>
    </div>
    
  )
}
