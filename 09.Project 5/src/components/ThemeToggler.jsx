import { createContext, useContext, useState } from 'react'

// create theme context
const ThemeContext = createContext(null)

// Theme Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  }

  return (
    <ThemeContext.Provider value={value}>
      <div
        className={`
          min-h-screen transition-colors duration-500
          ${theme === 'dark'
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100'
            : 'bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900'}
        `}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

// Custom Hook
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}

function ThemeToggleButton() {
  const { toggleTheme, isDark } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`
        group flex items-center gap-3 px-7 py-3 rounded-full font-semibold
        backdrop-blur-md transition-all duration-300 ease-out
        shadow-lg active:scale-95
        ${isDark
          ? 'bg-slate-700/80 text-yellow-300 hover:bg-slate-600 hover:shadow-yellow-400/40'
          : 'bg-white text-amber-600 hover:bg-amber-50 hover:shadow-amber-400/40'}
      `}
    >
      <span
        className="
          text-xl transition-transform duration-300
          group-hover:rotate-12 group-hover:scale-110
        "
      >
        {isDark ? '🌙' : '☀️'}
      </span>

      <span className="tracking-wide">
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </span>
    </button>
  )
}

function ThemeToggler() {
  const { isDark } = useTheme()

  return (
    <div
      className={`
        flex flex-col items-center justify-center gap-10
        p-14 rounded-3xl
        transition-all duration-500 ease-in-out
        shadow-2xl backdrop-blur-md
        ${isDark
          ? 'bg-slate-900/80 text-gray-100'
          : 'bg-white/80 text-gray-900'}
      `}
    >
      <h2
        className={`
          text-4xl font-extrabold tracking-wide transition-colors
          ${isDark ? 'text-gray-100' : 'text-gray-900'}
        `}
      >
        Theme Props
      </h2>

      <div
        className={`
          max-w-6xl text-left px-10 py-8 rounded-3xl
          transition-all duration-500
          ${isDark
            ? 'bg-slate-800/70 text-gray-200 shadow-xl'
            : 'bg-white/90 text-gray-800 shadow-lg'}
        `}
      >
        <p className="leading-relaxed text-lg">
          In React, <strong className={isDark ? 'text-sky-400' : 'text-blue-600'}>
            theme props
          </strong>{' '}
          are commonly implemented using{' '}
          <strong className={isDark ? 'text-sky-400' : 'text-blue-600'}>
            Context
          </strong>{' '}
          to manage and share application-wide state, such as light and dark themes,
          without passing props manually through every component.

          <br /><br />

          In this section, a{' '}
          <strong className={isDark ? 'text-purple-400' : 'text-purple-600'}>
            ThemeContext
          </strong>{' '}
          stores the current theme and exposes a{' '}
          <strong className={isDark ? 'text-purple-400' : 'text-purple-600'}>
            toggleTheme
          </strong>{' '}
          function so components can react instantly.

          <br /><br />

          The example demonstrates:
          <br />
          • a{' '}
          <strong className={isDark ? 'text-sky-400' : 'text-blue-600'}>
            global theme state
          </strong>{' '}
          shared using Context. <br />
          • a{' '}
          <strong className={isDark ? 'text-sky-400' : 'text-blue-600'}>
            toggle button
          </strong>{' '}
          for light/dark modes. <br />
          • instant updates{' '}
          <strong className={isDark ? 'text-emerald-400' : 'text-emerald-600'}>
            without page reloads
          </strong>. <br />
          • visual feedback using icons, colors, and transitions.

          <br /><br />

          When the toggle button is clicked, the{' '}
          <strong className={isDark ? 'text-emerald-400' : 'text-emerald-600'}>
            ThemeProvider
          </strong>{' '}
          updates state, causing all consumers to re-render automatically.

          <br /><br />

          Overall, this shows how{' '}
          <strong className={isDark ? 'text-indigo-400' : 'text-indigo-700'}>
            Context + state
          </strong>{' '}
          enable scalable, maintainable theme systems.
        </p>
      </div>

      <ThemeToggleButton />
    </div>
  )
}

export default ThemeToggler
