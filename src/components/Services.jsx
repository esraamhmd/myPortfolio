import React, { useRef, useEffect, useState } from 'react'
import {
  Box, Container, Typography, Paper, Chip, Button, Dialog, DialogTitle,
  DialogContent, IconButton, useTheme,
} from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import LanguageIcon from '@mui/icons-material/Language'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import DashboardIcon from '@mui/icons-material/Dashboard'
import StorageIcon from '@mui/icons-material/Storage'
import BuildCircleIcon from '@mui/icons-material/BuildCircle'
import DevicesIcon from '@mui/icons-material/Devices'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import CloseIcon from '@mui/icons-material/Close'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const FONT = '"Plus Jakarta Sans", sans-serif'

const EMAIL_HREF =
  'mailto:esraammohamedd@gmail.com?subject=' +
  encodeURIComponent('New project inquiry') +
  '&body=' +
  encodeURIComponent('Hi Esraa,\n\nI would like to discuss a project:\n\n')
const LINKEDIN_HREF = 'https://www.linkedin.com/in/esraamhmd/'


const SERVICES = [
  {
    title: 'Website Development',
    Icon: LanguageIcon,
    color: '#e91e8c', textDark: '#eb3195', textLight: '#a8005e',
    description:
      'Modern, fast and responsive websites for companies, restaurants and businesses that want a strong online presence.',
    tags: ['Business Websites', 'Landing Pages', 'Responsive UI', 'Portfolios'],
  },
  {
    title: 'E-commerce Development',
    Icon: ShoppingCartIcon,
    color: '#9c27b0', textDark: '#c77be0', textLight: '#6a0080',
    description:
      'Complete online stores with products, categories, cart and order management, built to sell and easy to grow.',
    tags: ['Online Stores', 'Product Catalogs', 'Shopping Carts'],
  },
  {
    title: 'Dashboards & Management Systems',
    Icon: DashboardIcon,
    color: '#7e57c2', textDark: '#a581f8', textLight: '#473472',
    description:
      'Clear dashboards to manage data, operations and reports, with user roles and permissions for your team.',
    tags: ['Admin Dashboards', 'Analytics', 'ERP Interfaces'],
  },
  {
    title: 'Backend & API Development',
    Icon: StorageIcon,
    color: '#c2185b', textDark: '#f06ab3', textLight: '#8b0038',
    description:
      'Secure REST APIs, database connections, authentication, and user and permission management.',
    tags: ['Node.js', 'Express.js', 'Databases', 'REST APIs'],
  },
  {
    title: 'Bug Fixing & Website Improvements',
    Icon: BuildCircleIcon,
    color: '#ab47bc', textDark: '#d08be0', textLight: '#5a1a80',
    description:
      'Fixing errors, making sites responsive and improving performance and user experience on existing projects.',
    tags: ['Debugging', 'Performance', 'Responsive Fixes', 'SEO', 'Accessibility'],
  },
  {
    title: 'Frontend Development & UI Implementation',
    Icon: DevicesIcon,
    color: '#ff6ec7', textDark: '#f06ab3', textLight: '#9c0060',
    description:
      'Turning designs into pixel-perfect, interactive web interfaces with reusable components and clean pages.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Bootstrap', 'MUI'],
  },
]

function ServiceCard({ s, index, isDark }) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') { setVis(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); io.disconnect() }
    }, { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const tc = isDark ? s.textDark : s.textLight
  const { Icon } = s

  return (
    <Paper
      ref={ref}
      component="article"
      elevation={0}
      sx={{
        position: 'relative',
        height: '100%',
        p: { xs: 2.5, md: 3 },
        borderRadius: 4,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: `${s.color}${isDark ? '40' : '55'}`,
        overflow: 'hidden',
        opacity: vis ? 1 : 0,
        transform: vis ? 'none' : 'translateY(18px)',
        transition: `opacity .6s ease ${(index % 3) * 0.08}s, transform .6s ease ${(index % 3) * 0.08}s, box-shadow .3s, border-color .3s`,
        '&::before': {
          content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, ${s.color}, transparent)`,
        },
        '&:hover': {
          transform: 'translateY(-6px)',
          borderColor: s.color,
          boxShadow: `0 14px 36px ${s.color}${isDark ? '30' : '28'}`,
        },
        '@media (prefers-reduced-motion: reduce)': { transition: 'none', opacity: 1, transform: 'none' },
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          width: 52, height: 52, borderRadius: 3, mb: 2,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          bgcolor: `${s.color}${isDark ? '22' : '1a'}`,
          border: `1px solid ${s.color}55`,
        }}
      >
        <Icon sx={{ color: tc, fontSize: 28 }} />
      </Box>

      <Typography
        variant="h3"
        sx={{ fontFamily: FONT, fontWeight: 800, fontSize: { xs: '1.1rem', md: '1.2rem' }, mb: 1, color: 'text.primary', lineHeight: 1.3 }}
      >
        {s.title}
      </Typography>

      <Typography sx={{ fontFamily: FONT, fontSize: '0.92rem', lineHeight: 1.75, color: 'text.secondary', mb: 2 }}>
        {s.description}
      </Typography>

      <Box component="ul" sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, listStyle: 'none', m: 0, p: 0 }}>
        {s.tags.map(t => (
          <Box component="li" key={t}>
            <Chip
              label={t}
              size="small"
              sx={{
                fontFamily: FONT, fontWeight: 700, fontSize: '0.74rem',
                color: tc,
                bgcolor: `${s.color}${isDark ? '1f' : '14'}`,
                border: `1px solid ${s.color}55`,
              }}
            />
          </Box>
        ))}
      </Box>
    </Paper>
  )
}

export default function Services() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const [open, setOpen] = useState(false)
  const accent = isDark ? 'primary.main' : '#a8005e'

  const optionSx = (color) => ({
    display: 'flex', alignItems: 'center', gap: 2,
    p: 2, borderRadius: 3, textDecoration: 'none',
    border: '1px solid', borderColor: `${color}66`,
    bgcolor: `${color}14`, color: 'text.primary',
    fontFamily: FONT, transition: 'transform .2s, box-shadow .2s, border-color .2s',
    '&:hover, &:focus-visible': {
      transform: 'translateY(-2px)', borderColor: color,
      boxShadow: `0 8px 22px ${color}33`, outline: 'none',
    },
    '&:focus-visible': { outline: `2px solid ${color}`, outlineOffset: 2 },
  })

  return (
    <Box
      id="services"
      component="section"
      aria-labelledby="services-heading"
      sx={{ py: { xs: 10, md: 14 }, bgcolor: 'transparent', position: 'relative', zIndex: 1, overflow: 'hidden' }}
    >
      <Box aria-hidden="true" sx={{
        position: 'absolute', top: '8%', right: '-8%', width: 520, height: 520, borderRadius: '50%', pointerEvents: 'none',
        background: `radial-gradient(circle, ${isDark ? 'rgba(233,30,140,0.10)' : 'rgba(233,30,140,0.08)'} 0%, transparent 70%)`,
      }} />
      <Box aria-hidden="true" sx={{
        position: 'absolute', bottom: '5%', left: '-10%', width: 480, height: 480, borderRadius: '50%', pointerEvents: 'none',
        background: `radial-gradient(circle, ${isDark ? 'rgba(124,77,255,0.10)' : 'rgba(124,77,255,0.07)'} 0%, transparent 70%)`,
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
            <AutoAwesomeIcon aria-hidden="true" sx={{ fontSize: 18, color: accent }} />
            <Typography sx={{ fontFamily: FONT, fontWeight: 700, letterSpacing: 2, fontSize: '0.8rem', textTransform: 'uppercase', color: accent }}>
              Work With Me
            </Typography>
          </Box>
          <Typography
            id="services-heading"
            variant="h2"
            sx={{ fontFamily: FONT, fontWeight: 800, fontSize: { xs: '2.2rem', md: '3rem' }, color: 'text.primary', mb: 1.5 }}
          >
            Freelance{' '}
            <Box component="span" sx={{ color: isDark ? '#eb3195' : '#a8005e' }}>Services</Box>
          </Typography>
          <Typography sx={{ fontFamily: FONT, fontSize: { xs: '1rem', md: '1.15rem' }, color: 'text.secondary', maxWidth: 560, mx: 'auto', lineHeight: 1.7 }}>
            Turning ideas into scalable web applications.
          </Typography>
        </Box>

        <Box
          component="ul"
          sx={{
            listStyle: 'none', m: 0, p: 0,
            display: 'grid', gap: { xs: 2.5, md: 3 },
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          }}
        >
          {SERVICES.map((s, i) => (
            <Box component="li" key={s.title}>
              <ServiceCard s={s} index={i} isDark={isDark} />
            </Box>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
          <Typography sx={{ fontFamily: FONT, color: 'text.secondary', mb: 3, fontSize: '1rem' }}>
            Have a project in mind? Let&apos;s build it together.
          </Typography>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            startIcon={<RocketLaunchIcon />}
            endIcon={<ArrowForwardIcon />}
            sx={{
              fontFamily: FONT, fontWeight: 700, textTransform: 'none', fontSize: '1rem',
              px: 4, py: 1.4, borderRadius: 3, color: '#fff',
              bgcolor: isDark ? '#dd1682' : 'primary.main',
              boxShadow: '0 4px 16px rgba(233,30,140,0.35)',
              transition: 'all 0.2s',
              '&:hover': { bgcolor: 'primary.dark', boxShadow: '0 8px 24px rgba(233,30,140,0.5)', transform: 'translateY(-2px)' },
            }}
          >
            Hire Me / Start a Project
          </Button>
        </Box>
      </Container>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="xs"
        aria-labelledby="hire-title"
        PaperProps={{ sx: { m: 2, width: 'calc(100% - 32px)', maxHeight: 'none', overflow: 'visible', borderRadius: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'rgba(233,30,140,0.35)' } }}
      >
        <DialogTitle id="hire-title" sx={{ fontFamily: FONT, fontWeight: 800, pr: 7 }}>
          How would you like to reach me?
          <IconButton
            aria-label="Close dialog"
            onClick={() => setOpen(false)}
            sx={{ position: 'absolute', right: 10, top: 10, color: 'text.primary' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ display: 'grid', gap: 1.5, pt: '8px !important', pb: { xs: 2.5, sm: 3 }, overflow: 'visible' }}>
          <Box component="a" href={EMAIL_HREF} onClick={() => setOpen(false)} sx={optionSx('#e91e8c')}>
            <EmailIcon aria-hidden="true" sx={{ color: isDark ? '#eb3195' : '#a8005e', fontSize: 30 }} />
            <Box>
              <Typography sx={{ fontFamily: FONT, fontWeight: 800 }}>Send an Email</Typography>
              <Typography sx={{ fontFamily: FONT, fontSize: '0.85rem', color: 'text.secondary' }}>
                Describe your project in detail
              </Typography>
            </Box>
          </Box>
          <Box
            component="a"
            href={LINKEDIN_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            sx={optionSx('#1182f3')}
          >
            <LinkedInIcon aria-hidden="true" sx={{ color: isDark ? '#1182f3' : '#0a66c2', fontSize: 30 }} />
            <Box>
              <Typography sx={{ fontFamily: FONT, fontWeight: 800 }}>
                Message on LinkedIn <Box component="span" sx={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>(opens in a new tab)</Box>
              </Typography>
              <Typography sx={{ fontFamily: FONT, fontSize: '0.85rem', color: 'text.secondary' }}>
                Connect and chat directly
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  )
}