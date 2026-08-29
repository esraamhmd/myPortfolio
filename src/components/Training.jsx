import React from 'react'
import { Box, useTheme, Typography, Container, Paper, Chip } from '@mui/material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'

const FONT = '"Plus Jakarta Sans", sans-serif'

const TRAINING = [
  {
    type: 'Mentorship Program',
    role: 'NextStep Mentorship Program',
    company: 'Deloitte Innovation Hub',
    period: 'Aug 2026 - 1 Month',
    color: '#e91e8c',
    isDeloitte: true,
    description: 'Software Engineering Mentee at Deloitte NextStep Mentorship Program, Deloitte Innovation Hub, gaining industry insights and career guidance from Deloitte professionals.',
    tags: [],
  },
  {
    type: 'Training',
    role: 'Summer Code Camp - Web Development using ReactJS',
    company: 'Information Technology Institute (ITI)',
    period: 'Jul 2024 – Sep 2024',
    color: '#ff6ec7',
    description: 'Intensive summer training program focused on modern frontend development using React.js. Covered components, hooks, state management, and building real-world responsive web applications.',
    tags: ['React.js', 'React Router', 'JavaScript', 'CSS', 'HTML5', 'Bootstrap'],
  },
  {
    type: 'Course',
    role: 'Frontend Diploma',
    company: 'Route Academy',
    period: 'Jan 2024 – Apr 2024',
    color: '#c2185b',
    description: 'Comprehensive frontend development diploma covering modern web technologies. Built multiple projects applying responsive design principles, JavaScript logic, and React.js component architecture.',
    tags: ['React.js', 'Redux', 'Axios', 'JavaScript', 'TypeScript', 'CSS', 'HTML5', 'Bootstrap'],
  },
  {
    type: 'Course',
    role: 'Computer Science Diploma',
    company: 'Route Academy',
    period: 'Jul 2023 – Nov 2023',
    color: '#9c27b0',
    description: 'Foundational computer science diploma covering core programming concepts, object-oriented design, and problem solving using Java and C++. Built a strong base for software engineering.',
    tags: ['Java', 'C++', 'OOP', 'Problem Solving', 'Software Development'],
  },
]

const SORTED = [...TRAINING].sort((a, b) => {
  const getYear  = s => parseInt(s.match(/\d{4}/)?.[0] || '0')
  const getMonth = s => {
    const months = { Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12 }
    const m = s.match(/[A-Z][a-z]{2}/)
    return m ? months[m[0]] || 0 : 0
  }
  const ay = getYear(a.period), by = getYear(b.period)
  if (ay !== by) return by - ay
  return getMonth(b.period) - getMonth(a.period)
})

export default function Training() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  return (
    <Box id="training" sx={{ py: 14, bgcolor: 'transparent', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <Box sx={{ position:'absolute', bottom:'-10%', left:'-8%', width:500, height:500, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(233,30,140,0.07) 0%,transparent 70%)' }} />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
            <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 18 }} />
            <Typography variant="overline" aria-hidden="true" sx={{ color: 'primary.main', fontFamily: FONT, fontWeight: 600, letterSpacing: 3 }}>
              My Professional Development
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ color: 'text.primary', fontFamily: FONT, fontWeight: 800, fontSize: { xs: '2.2rem', md: '3rem' } }}>
            Training, Courses{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>&amp; Programs</Box>
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2,1fr)' }, gap: 3 }}>
          {SORTED.map((t, i) => (
            <Paper key={i} elevation={0} sx={{
              bgcolor: 'background.paper',
              border: '1px solid', borderColor: `${t.color}25`,
              borderRadius: 3, p: 3.5,
              boxShadow: `0 4px 20px ${t.color}0f`,
              '&:hover': { borderColor: `${t.color}65`, transform: 'translateY(-6px)', boxShadow: `0 14px 40px ${t.color}22` },
              transition: 'all 0.25s',
            }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                {t.isDeloitte ? (
                  <Box sx={{ width: 52, height: 52, borderRadius: 2, flexShrink: 0, bgcolor: 'rgba(233,30,140,0.12)', border: '1.5px solid rgba(233,30,140,0.38)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(233,30,140,0.20)' }}>
                    <EmojiEventsIcon sx={{ color: 'primary.main', fontSize: 26 }} />
                  </Box>
                ) : (
                  <Box sx={{ width: 52, height: 52, borderRadius: 2, bgcolor: `${t.color}14`, border: `1.5px solid ${t.color}38`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.color, flexShrink: 0 }}>
                    <LocalLibraryIcon sx={{ fontSize: 24 }} />
                  </Box>
                )}

                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, mb: 0.6 }}>
                    <Chip label={t.type} size="small" sx={{ bgcolor: `${t.color}14`, color: t.color, border: `1px solid ${t.color}30`, fontSize: '0.7rem', fontWeight: 700, height: 22 }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: FONT, fontWeight: 500 }}>{t.period}</Typography>
                  </Box>
                  <Typography sx={{ fontFamily: FONT, fontWeight: 700, fontSize: '0.97rem', color: 'text.primary', mb: 0.3, lineHeight: 1.4 }}>{t.role}</Typography>
                  <Typography sx={{ fontFamily: FONT, fontWeight: 600, color: t.color, fontSize: '0.88rem' }}>{t.company}</Typography>
                </Box>
              </Box>

              <Typography sx={{ fontFamily: FONT, color: 'text.secondary', fontSize: '0.86rem', lineHeight: 1.75, mb: t.tags.length ? 2 : 0 }}>
                {t.description}
              </Typography>

              {t.tags.length > 0 && (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.7 }}>
                  {t.tags.map(tag => (
                    <Chip key={tag} label={tag} size="small" sx={{ fontFamily: FONT, bgcolor: `${t.color}10`, color: t.color, border: `1px solid ${t.color}28`, fontSize: '0.69rem', fontWeight: 600, height: 20 }} />
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