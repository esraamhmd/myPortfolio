import React from 'react'
import { Box, useTheme, Typography, Container, Paper, Chip } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const FONT = '"Plus Jakarta Sans", sans-serif'

export default function Education() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  

  return (
    <Box id="education" sx={{ py: 14, bgcolor: 'transparent', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <Box sx={{ position:'absolute', bottom:'-10%', right:'-8%', width:500, height:500, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(233,30,140,0.07) 0%,transparent 70%)' }} />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
            <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 18 }} />
            <Typography variant="overline" aria-hidden="true" sx={{ color: 'primary.main', fontFamily: FONT, fontWeight: 600, letterSpacing: 3 }}>
              My Background
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ color: 'text.primary', fontFamily: FONT, fontWeight: 800, fontSize: { xs: '2.2rem', md: '3rem' } }}>
            <Box component="span" sx={{ color: 'primary.main' }}>Education</Box>
          </Typography>
        </Box>

        <Paper elevation={0} sx={{
          bgcolor: 'background.paper',
          border: '1px solid rgba(233,30,140,0.22)',
          borderRadius: 4,
          p: { xs: 4, md: 6 },
          boxShadow: '0 4px 24px rgba(233,30,140,0.10)',
          '&:hover': { borderColor: 'rgba(233,30,140,0.60)', transform: 'translateY(-6px)', boxShadow: '0 20px 60px rgba(233,30,140,0.20)' },
          transition: 'all 0.25s',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
            <Box sx={{ flexShrink: 0, width: 64, height: 64, borderRadius: 3, bgcolor: 'rgba(233,30,140,0.12)', border: '2px solid rgba(233,30,140,0.38)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'primary.main', boxShadow: '0 4px 20px rgba(233,30,140,0.20)' }}>
              <AccountBalanceIcon sx={{ fontSize: 32 }} />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                <Chip label="University" size="small" sx={{ bgcolor: 'rgba(233,30,140,0.12)', color: 'primary.main', border: '1px solid rgba(233,30,140,0.30)', fontSize: '0.75rem', fontWeight: 700, height: 24 }} />
                <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: FONT, fontWeight: 500, fontSize: '0.88rem' }}>
                  Oct 2021 – Jul 2025
                </Typography>
              </Box>

              <Typography sx={{ color: 'text.primary', fontFamily: FONT, fontWeight: 800, fontSize: { xs: '1.1rem', md: '1.3rem' }, mb: 0.5 }}>
                Modern University for Technology &amp; Information - MTI
              </Typography>
              <Typography sx={{ color: 'primary.main', fontFamily: FONT, fontWeight: 600, fontSize: '1rem', mb: 0.4 }}>
                Bachelor of Computer Science and AI
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontFamily: FONT, fontSize: '0.9rem', mb: 3 }}>
                Computer Science Department
              </Typography>

              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                {[
                  'Grade: A',
                  'Graduation Project: A+',
                  'among the top students in my class',
                ].map(b => (
                  <Chip key={b} label={b} size="small" sx={{
                    bgcolor: 'rgba(233,30,140,0.09)',
                    color: 'primary.main',
                    border: '1px solid rgba(233,30,140,0.28)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    height: 28,
                    px: 0.5,
                    boxShadow: '0 2px 10px rgba(233,30,140,0.14)',
                  }} />
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}