import React from 'react'
import { Box, Typography } from '@mui/material'

const FONT = '"Plus Jakarta Sans", sans-serif'

export default function Footer() {
  return (
    <Box component="footer" sx={{
      py: 4, px: 4, textAlign: 'center',
      bgcolor: 'background.paper',
      borderTop: '1px solid rgba(233,30,140,0.13)',
      boxShadow: '0 -4px 28px rgba(233,30,140,0.07)',
    }}>
      <Typography sx={{
        fontFamily: FONT, fontWeight: 800,
        fontSize: '1.1rem', color: 'text.primary', mb: 0.5,
      }}>
        my<Box component="span" sx={{ color: 'primary.main' }}>Portfolio</Box>
      </Typography>
      <Typography sx={{ fontFamily: FONT, color: 'text.secondary', fontSize: '0.82rem' }}>
        Esraa Mahmoud - Frontend Developer
      </Typography>
    </Box>
  )
}