import React from 'react'
import { Box, Typography, Container, Paper, Chip } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const items = [
  {
    Icon: AccountBalanceIcon,
    type: 'University',
    institution: 'Modern University for Technology & Information — MTI',
    degree: 'Bachelor of Computer Science and AI',
    sub: 'Computer Science Department',
    period: 'Oct 2021 – Jul 2025',
    badges: ['Grade: A', 'Graduation Project: A+'],
    color: '#e91e8c',
  },
  {
    Icon: LocalLibraryIcon,
    type: 'Course',
    institution: 'Information Technology Institute (ITI)',
    degree: 'Summer Code Camp',
    sub: 'Web Development using ReactJS',
    period: 'Jul 2024 – Sep 2024',
    color: '#ff6ec7',
  },
  {
    Icon: LocalLibraryIcon,
    type: 'Course',
    institution: 'Route Academy',
    degree: 'Diploma of Education',
    sub: 'Frontend Development',
    period: 'Jan 2024 – Apr 2024',
    color: '#c2185b',
  },
  {
    Icon: LocalLibraryIcon,
    type: 'Course',
    institution: 'Route Academy',
    degree: 'Diploma of Education',
    sub: 'Computer Science',
    period: 'Jul 2023 – Nov 2023',
    color: '#9c27b0',
  },
]

export default function Education() {
  return (
    <Box id="education" sx={{ py: 14, bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ position:'absolute', bottom:'-10%', right:'-8%', width:500, height:500, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(233,30,140,0.07) 0%,transparent 70%)' }} />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
            <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 18 }} />
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 3 }}>
              My Background
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ color: 'text.primary', fontSize: { xs: '2.2rem', md: '3rem' }, textShadow: '0 4px 20px rgba(233,30,140,0.1)' }}>
            Education and{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>Courses</Box>
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2,1fr)' }, gap: 3 }}>
          {items.map((item, i) => (
            <Paper key={i} elevation={0} sx={{
              bgcolor: 'background.paper',
              border: '1px solid', borderColor: `${item.color}22`,
              borderRadius: 3, p: 3.5,
              boxShadow: `0 4px 24px ${item.color}0f`,
              '&:hover': {
                borderColor: `${item.color}65`,
                transform: 'translateY(-6px)',
                boxShadow: `0 16px 48px ${item.color}22`,
              },
              transition: 'all 0.25s',
            }}>
             
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.5 }}>
                <Box sx={{
                  flexShrink: 0, width: 54, height: 54,
                  borderRadius: 2,
                  bgcolor: `${item.color}14`,
                  border: '1.5px solid', borderColor: `${item.color}38`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: item.color,
                  boxShadow: `0 4px 16px ${item.color}20`,
                }}>
                  <item.Icon sx={{ fontSize: 26 }} />
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, mb: 0.8 }}>
                    <Chip label={item.type} size="small" sx={{
                      bgcolor: `${item.color}14`, color: item.color,
                      border: '1px solid', borderColor: `${item.color}30`,
                      fontSize: '0.7rem', fontWeight: 700, height: 22,
                      boxShadow: `0 2px 8px ${item.color}18`,
                    }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                      {item.period}
                    </Typography>
                  </Box>

                  <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '0.95rem', mb: 0.3 }}>
                    {item.institution}
                  </Typography>
                  <Typography sx={{ color: 'primary.main', fontWeight: 600, fontSize: '0.88rem' }}>
                    {item.degree}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.84rem' }}>
                    {item.sub}
                  </Typography>
                </Box>
              </Box>

              {/* badges centered */}
              {item.badges && (
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2, justifyContent: 'center' }}>
                  {item.badges.map(b => (
                    <Chip key={b} label={b} size="small" sx={{
                      bgcolor: 'rgba(233,30,140,0.09)',
                      color: 'primary.main',
                      border: '1px solid rgba(233,30,140,0.24)',
                      fontSize: '0.78rem', fontWeight: 600,
                      boxShadow: '0 2px 8px rgba(233,30,140,0.12)',
                    }} />
                  ))}
                </Box>
              )}
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  )
}