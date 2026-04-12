import React, { useState, useMemo, createContext } from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const ColorModeContext = createContext({ toggleColorMode: () => {}, mode: 'dark' })

export default function App() {
  const [mode, setMode] = useState('dark')

  const colorMode = useMemo(() => ({
    toggleColorMode: () => setMode(p => p === 'dark' ? 'light' : 'dark'),
    mode,
  }), [mode])

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: { main: '#e91e8c', dark: '#c2185b', light: '#ff6ec7' },
      background: {
        default: mode === 'dark' ? '#0a0a14' : '#fdf0f7',
        paper:   mode === 'dark' ? '#11111e' : '#ffffff',
      },
      text: {
        primary:   mode === 'dark' ? '#f0e6ff' : '#1a0a2e',
        secondary: mode === 'dark' ? '#a08cc0' : '#6b4f7a',
      },
    },
    typography: {
      
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      h1: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800 },
      h2: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700 },
      h3: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700 },
      h4: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600 },
      h5: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600 },
      h6: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600 },
      body1: { fontFamily: '"Inter", sans-serif', fontWeight: 400 },
      body2: { fontFamily: '"Inter", sans-serif', fontWeight: 400 },
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
          },
          body: {
            scrollBehavior: 'smooth',
            backgroundColor: mode === 'dark' ? '#0a0a14' : '#fdf0f7',
            '&::-webkit-scrollbar': { width: 5 },
            '&::-webkit-scrollbar-track': { background: 'transparent' },
            '&::-webkit-scrollbar-thumb': { background: '#e91e8c', borderRadius: 3 },
          },
        },
      },
      MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
    },
  }), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}