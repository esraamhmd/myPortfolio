import React, { useState, useMemo, createContext, useCallback } from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Training from './components/Training'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StarBackground from './components/StarBackground'
import LoadingScreen from './components/LoadingScreen'

export const ColorModeContext = createContext({ toggleColorMode: () => {}, mode: 'dark' })

export default function App() {
  const [loading, setLoading] = useState(true)
  const handleDone = useCallback(() => setLoading(false), [])
  const [mode, setMode] = useState('dark')

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

          <StarBackground mode={mode} />

          <Navbar />
          <Hero />
          <Stats />
          <About />
          <Experience/>
          <Training />
          <Education />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />

        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}