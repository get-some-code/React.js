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
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">

        <div className="flex flex-wrap gap-3 justify-center">
          {sections.map((section) => (
            <button
              className={`px-5 py-2.5 rounded-lg font-medium bg-blue-600 text-white 
          hover:bg-blue-500 active:scale-95 transition-all duration-300 
          shadow-md hover:shadow-xl flex items-center gap-2 tracking-wide`}
              key={section.id}
              onClick={() => {
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="text-lg">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
        <a
          href="https://github.com/get-some-code/React.js/tree/main/09.Project%205"
          target="_blank"
          className="absolute right-0 top-1/2 -translate-y-1/2 
                 p-3 rounded-xl bg-gray-900 text-white 
                 hover:bg-gray-700 transition-all duration-300 
                 shadow-lg hover:shadow-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.65.5.55 5.65.55 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.8.1-.6.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C18 5 19 5.3 19 5.3c.6 1.5.2 2.7.1 3 .8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A10.99 10.99 0 0 0 23.45 12C23.45 5.65 18.35.5 12 .5z" />
          </svg>
        </a>
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

export default App;
