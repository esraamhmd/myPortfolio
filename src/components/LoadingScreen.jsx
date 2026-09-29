import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'

export default function LoadingScreen({ onDone }) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 250)
    const t2 = setTimeout(() => setPhase(2), 650)
    const t3 = setTimeout(() => onDone(), 1050)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onDone])

  return (
    <Box sx={{
      position: 'fixed', inset: 0, zIndex: 9999,
      bgcolor: '#0a0a14',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 2,
      opacity: phase === 2 ? 0 : 1,
      pointerEvents: phase === 2 ? 'none' : 'all',
      transition: 'opacity 0.4s ease',
    }}>
      <Box sx={{
        animation: 'emojiBounce 0.7s cubic-bezier(0.34,1.56,0.64,1) both',
        '@keyframes emojiBounce': {
          '0%':   { transform: 'scale(0) rotate(-20deg)', opacity: 0 },
          '100%': { transform: 'scale(1) rotate(0deg)',   opacity: 1 },
        },
      }}>
        <SentimentSatisfiedAltIcon sx={{ color: '#e91e8c', fontSize: 72 }} />
      </Box>

      <Box sx={{
        opacity: phase >= 1 ? 1 : 0,
        transform: phase >= 1 ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}>
        <svg viewBox="0 0 110 48" width="110" height="46" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');.em-load{font-family:'Pinyon Script',cursive;font-weight:400;font-size:52px;fill:#e91e8c;}`}</style>
          </defs>
          <text x="4" y="44" className="em-load">EM</text>
        </svg>
      </Box>
    </Box>
  )
}