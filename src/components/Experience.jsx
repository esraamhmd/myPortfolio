import React from 'react'
import { Box, useTheme, Typography, Container, Paper, Chip } from '@mui/material'
import WorkIcon from '@mui/icons-material/Work'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

const FONT = '"Plus Jakarta Sans", sans-serif'

const EXPERIENCE = [
  {
    Icon: RocketLaunchIcon,
    type: 'Internship',
    role: 'Software Engineer Intern',
    company: 'SpaceTech',
    period: 'Jul 2026 – Sep 2026',
    color: '#722F99',
    bullets: [
      'Contributed as a frontend team member on Captaini, a sports coaching platform, collaborating via GitHub organization and Jira for task management and team coordination',
      'Worked within an agile team using GitHub Organizations for version control, code reviews, and collaborative workflows across multiple contributors',
      'Joined a separate internal team responsible for building and maintaining the company\'s collateral products, contributing to frontend development and UI implementation',
      'Gained hands-on business exposure by understanding product requirements, client needs, and how engineering decisions align with business goals',
      'Participated in sprint planning, daily standups, and cross-functional team collaboration in a professional software environment',
    ],
    tags: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GitHub Organizations', 'Jira', 'Agile'],
  },
  {
    Icon: WorkIcon,
    type: 'Freelance',
    role: 'Freelance Frontend Developer',
    company: '',
    period: 'Aug 2026 – Present',
    color: '#e91e8c',
    bullets: [
      'Developed responsive web applications using React.js, TypeScript, JavaScript, HTML, and CSS',
      'Built modern, user-friendly interfaces with a focus on responsiveness and performance',
      'Integrated RESTful APIs and managed application state using Redux Toolkit and TanStack Query',
      'Optimized application performance, resolved bugs, and maintained clean, reusable code',
      'Delivered high-quality projects on time while collaborating effectively with clients',
    ],
    tags: [],
  },
]

export default function Experience() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  return (
    <Box id="experience" sx={{ py: 14, bgcolor: 'transparent', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <Box sx={{ position:'absolute', top:'10%', right:'-8%', width:500, height:500, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(233,30,140,0.07) 0%,transparent 70%)' }} />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
            <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 18 }} />
            <Typography variant="overline" aria-hidden="true" sx={{ color: 'primary.main', fontFamily: FONT, fontWeight: 600, letterSpacing: 3 }}>
              My Journey
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ color: 'text.primary', fontFamily: FONT, fontWeight: 800, fontSize: { xs: '2.2rem', md: '3rem' } }}>
            Work <Box component="span" sx={{ color: 'primary.main' }}>Experience</Box>
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', pl: { md: 4 } }}>
          <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: 20, top: 0, bottom: 0, width: 2, background: 'linear-gradient(180deg,#722F99,#e91e8c,rgba(233,30,140,0.1))' }} />

          {EXPERIENCE.map((exp, i) => (
            <Box key={i} sx={{ display: 'flex', gap: 3, mb: 4 }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, flexShrink: 0, width: 42, height: 42, borderRadius: '50%', bgcolor: `${exp.color}18`, border: `2px solid ${exp.color}60`, alignItems: 'center', justifyContent: 'center', color: 'primary.main', zIndex: 1, mt: 0.5 }}>
                <exp.Icon sx={{ fontSize: 20 }} />
              </Box>

              <Paper elevation={0} sx={{ flex: 1, bgcolor: 'background.paper', border: '1px solid', borderColor: `${exp.color}22`, borderRadius: 4, p: { xs: 3, md: 4 }, boxShadow: `0 4px 24px ${exp.color}0f`, '&:hover': { borderColor: `${exp.color}60`, transform: 'translateX(6px)', boxShadow: `0 12px 40px ${exp.color}18` }, transition: 'all 0.25s' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1.5, mb: 2 }}>
                  <Box>
                    <Typography sx={{ fontFamily: FONT, fontWeight: 800, fontSize: '1.15rem', color: 'text.primary', mb: 0.3 }}>{exp.role}</Typography>
                    {exp.company && (
                      <Typography sx={{ fontFamily: FONT, fontWeight: 600, color: 'primary.main', fontSize: '0.95rem' }}>{exp.company}</Typography>
                    )}
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', sm: 'flex-end' }, gap: 0.8 }}>
                    <Chip label={exp.type} size="small" sx={{ bgcolor: `${exp.color}14`, color: 'primary.main', border: `1px solid ${exp.color}30`, fontFamily: FONT, fontSize: '0.72rem', fontWeight: 700 }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: FONT, fontWeight: 500 }}>{exp.period}</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2.5 }}>
                  {exp.bullets.map((b, j) => (
                    <Box key={j} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                      <FiberManualRecordIcon sx={{ fontSize: 8, color: 'primary.main', mt: 0.7, flexShrink: 0 }} />
                      <Typography sx={{ fontFamily: FONT, color: 'text.secondary', fontSize: '0.88rem', lineHeight: 1.7 }}>{b}</Typography>
                    </Box>
                  ))}
                </Box>

                {exp.tags.length > 0 && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                    {exp.tags.map(t => (
                      <Chip key={t} label={t} size="small" sx={{ fontFamily: FONT, bgcolor: `${exp.color}10`, color: 'primary.main', border: `1px solid ${exp.color}28`, fontSize: '0.71rem', fontWeight: 600 }} />
                    ))}
                  </Box>
                )}
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}