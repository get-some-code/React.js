import { useState } from 'react'
import './App.css'
import BasicProps from './components/BasicProps.jsx'
import RefProps from './components/RefProps.jsx'
import ChildrenProps from './components/ChildrenProps.jsx'
import ComplexProps from './components/ComplexProps.jsx'
import ThemeToggler from './components/ThemeToggler.jsx'


function Navigation() {

  const sections = [
    { id: "basic", label: "Basic Props", icon: "🧃" },
    { id: "children", label: "Children Props", icon: "🧒" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "ref", label: "Ref Props", icon: "🧩" },
    { id: "theme", label: "Theme Props", icon: "💐" }
  ];


  return (
    <nav className={`sticky top-0 z-50 shadow-md bg-gray-800/70 backdrop-blur-md p-4`}>
      <div className={`flex justify-center`}>
        <div className={`flex flex-wrap gap-3 justify-center`}>
          {sections.map((section) => (
            <button
              className={`px-5 py-2.5 rounded-lg font-medium bg-blue-600 text-white 
              hover:bg-blue-500 active:scale-95 transition-all duration-300 
              shadow-md hover:shadow-xl flex items-center gap-2 tracking-wide`}
              key={section.id}
              onClick={() => {
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <span className={`text-lg`}>
                {section.icon}
              </span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
};

function AppContent() {
  const isDark = true;

  return (
    <div className={`min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black p-6`}>
      <Navigation />

      <div className='container mx-auto px-4 py-12 text-center'>
        <header className='space-y-4'>
          <h1 className='text-5xl font-extrabold text-white tracking-wide drop-shadow-xl'>
            React Props Explained!
          </h1>
          <p className='text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed'>
            A comprehensive guide to understand props in React
          </p>
        </header>

        <div className='space-y-20 mt-12'>
          <div id="basic" className='scroll-mt-28 bg-white/5 rounded-xl p-6 shadow-lg backdrop-blur-sm'>
            <BasicProps />
          </div>

          <div id="ref" className='scroll-mt-28 bg-white/5 rounded-xl p-6 shadow-lg backdrop-blur-sm'>
            <RefProps />
          </div>

          <div id="children" className='scroll-mt-28 bg-white/5 rounded-xl p-6 shadow-lg backdrop-blur-sm'>
            <ChildrenProps />
          </div>

          <div id="complex" className='scroll-mt-28 bg-white/5 rounded-xl p-6 shadow-lg backdrop-blur-sm'>
            <ComplexProps />
          </div>

          <div id="theme" className='scroll-mt-28 bg-white/5 rounded-xl p-6 shadow-lg backdrop-blur-sm'>
            <ThemeToggler />
          </div>
        </div>

        <footer className={`mt-16 text-center pb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          <p className='text-sm opacity-80 hover:opacity-100 transition-opacity duration-300'>
            Made with ♥️ using Bun, Vite, React, and Tailwind CSS
          </p>
        </footer>
      </div>

    </div>
  )
}


function App() {
  return (
    <>
      <AppContent />
    </>
  )
}

export default App
