import React, { useState, useMemo, useEffect, createContext, useCallback, lazy, Suspense } from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LoadingScreen from './components/LoadingScreen'

const StarBackground = lazy(() => import('./components/StarBackground'))
const Stats          = lazy(() => import('./components/Stats'))
const About          = lazy(() => import('./components/About'))
const Experience     = lazy(() => import('./components/Experience'))
const Training       = lazy(() => import('./components/Training'))
const Education      = lazy(() => import('./components/Education'))
const Skills         = lazy(() => import('./components/Skills'))
const Projects       = lazy(() => import('./components/Projects'))
const Certificates   = lazy(() => import('./components/Certificates'))
const Contact        = lazy(() => import('./components/Contact'))
const Footer         = lazy(() => import('./components/Footer'))

export const ColorModeContext = createContext({ toggleColorMode: () => {}, mode: 'dark' })

export default function App() {
  const [loading, setLoading] = useState(true)
  const handleDone = useCallback(() => setLoading(false), [])
  const [mode, setMode] = useState('dark')


  const [showRest, setShowRest] = useState(false)
  useEffect(() => {
    const start = () => setShowRest(true)
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(start, { timeout: 1500 })
      return () => window.cancelIdleCallback(id)
    }
    const t = setTimeout(start, 800)
    return () => clearTimeout(t)
  }, [])

  const colorMode = useMemo(() => ({
    toggleColorMode: () => setMode(p => p === 'dark' ? 'light' : 'dark'),
    mode,
  }), [mode])

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: {
        main:  mode === 'dark' ? '#e91e8c' : '#a8005e',
        dark:  mode === 'dark' ? '#c2185b' : '#8b0038',
        light: mode === 'dark' ? '#ff6ec7' : '#d4006e',
      },
      background: {
        default: mode === 'dark' ? '#0a0a14' : '#fdf0f7',
        paper:   mode === 'dark' ? '#11111e' : '#ffffff',
      },
      text: {
        primary:   mode === 'dark' ? '#f0e6ff' : '#1a0a2e',
        secondary: mode === 'dark' ? '#d4c4f0' : '#3d1a5e',
      },
    },
    typography: {
      fontFamily: '"Fredoka", sans-serif',
      h1: { fontFamily: '"Fredoka", sans-serif', fontWeight: 600 },
      h2: { fontFamily: '"Fredoka", sans-serif', fontWeight: 600 },
      h3: { fontFamily: '"Fredoka", sans-serif', fontWeight: 600 },
      h4: { fontFamily: '"Fredoka", sans-serif', fontWeight: 600 },
      h5: { fontFamily: '"Fredoka", sans-serif', fontWeight: 600 },
      h6: { fontFamily: '"Fredoka", sans-serif', fontWeight: 600 },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '*, *::before, *::after': { boxSizing: 'border-box' },
          'html, body, #root': {
            margin: 0, padding: 0,
            width: '100%', minHeight: '100vh',
            overflowX: 'hidden',
            backgroundColor: 'transparent',
          },
          html: {
            backgroundColor: mode === 'dark' ? '#0a0a14' : '#fdf0f7',
          },
          body: {
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': { width: 5 },
            '&::-webkit-scrollbar-track': { background: 'transparent' },
            '&::-webkit-scrollbar-thumb': { background: '#e91e8c', borderRadius: 3 },
          },
        },
      },
      MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
      MuiChip: {
        styleOverrides: {
          label: {
            fontWeight: 700,
          },
        },
      },
    },
  }), [mode])

  return (
    <>
      {loading && <LoadingScreen onDone={handleDone} />}
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Navbar />
          <Hero />

          {showRest && (
            <Suspense fallback={null}>
              <StarBackground mode={mode} />
              <Stats />
              <About />
              <Experience />
              <Training />
              <Education />
              <Skills />
              <Projects />
              <Certificates />
              <Contact />
              <Footer />
            </Suspense>
          )}

        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}