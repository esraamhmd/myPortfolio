import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import { ColorModeContext } from '../App'

const FONT = '"Plus Jakarta Sans", sans-serif'

export default function Footer() {
  const { mode } = useContext(ColorModeContext)
  const isDark = mode === 'dark'

  return (
    <Box component="footer" sx={{
      py: 4, px: 4, textAlign: 'center',
      bgcolor: 'background.paper',
      borderTop: '1px solid rgba(233,30,140,0.13)',
      boxShadow: '0 -4px 28px rgba(233,30,140,0.07)',
    }}>
     
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.8, mb: 1 }}>
        <SentimentSatisfiedAltIcon sx={{ color: 'primary.main', fontSize: 24 }} />
        <svg viewBox="0 0 110 48" width="90" height="38" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');.em-l{font-family:'Pinyon Script',cursive;font-weight:400;font-size:52px;fill:#e91e8c;}`}</style>
          </defs>
          <text x="4" y="44" className="em-l">EM</text>
        </svg>
      </Box>

      <Typography sx={{ fontFamily: FONT, color: 'text.secondary', fontSize: '0.82rem' }}>
        Esraa Mahmoud - Fullstack Developer
      </Typography>
    </Box>
  )
}