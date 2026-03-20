import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const FONT = '"Plus Jakarta Sans", sans-serif'
const GITHUB  = 'https://github.com/esraamhmd'
const LINKEDIN = 'https://www.linkedin.com/in/esraa-mahmoud-b3571b2b3/'

export default function Footer() {
  return (
    <Box component="footer" sx={{
      py: 5, px: 4, textAlign: 'center',
      bgcolor: 'background.paper',
      borderTop: '1px solid rgba(233,30,140,0.13)',
      boxShadow: '0 -4px 28px rgba(233,30,140,0.07)',
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mb: 2.5 }}>
        {[
          { icon: <GitHubIcon />,   href: GITHUB   },
          { icon: <LinkedInIcon />, href: LINKEDIN },
        ].map((s, i) => (
          <IconButton
            key={i} component="a" href={s.href} target="_blank"
            sx={{
              color: 'text.secondary',
              border: '1px solid rgba(233,30,140,0.2)', borderRadius: 2,
              boxShadow: '0 2px 12px rgba(233,30,140,0.09)',
              '&:hover': {
                color: 'primary.main', borderColor: 'primary.main',
                bgcolor: 'rgba(233,30,140,0.08)',
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 22px rgba(233,30,140,0.22)',
              },
              transition: 'all 0.22s',
            }}
          >
            {s.icon}
          </IconButton>
        ))}
      </Box>

      <Typography sx={{ fontFamily: FONT, fontWeight: 800, fontSize: '1.1rem', color: 'text.primary', mb: 0.5 }}>
        my<Box component="span" sx={{ color: 'primary.main' }}>Portfolio</Box>
      </Typography>
      <Typography sx={{ fontFamily: FONT, color: 'text.secondary', fontSize: '0.82rem' }}>
        Esraa Mahmoud — Frontend Developer
      </Typography>
    </Box>
  )
}