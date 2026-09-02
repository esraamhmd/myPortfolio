import React, { useState } from 'react'
import {
  Box, Typography, Container, Paper, Chip,
  Button, Modal, IconButton, Pagination, useTheme
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CloseIcon from '@mui/icons-material/Close'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'

const FONT = '"Plus Jakarta Sans", sans-serif'
const CDN = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}`

const PER_PAGE = 6
const COLORS = ['#722F99', '#f72585', '#06d6a0', '#8DB355']

const ACCESSIBLE = {
  '#722F99': { dark: '#b06fd4', light: '#5a1a80' },
  '#f72585': { dark: '#f96aab', light: '#9c0055' },
  '#06d6a0': { dark: '#06d6a0', light: '#007a5a' },
  '#8DB355': { dark: '#8DB355', light: '#4a6e1a' },
}

const PROJECTS = [
  {
    title: 'MotorSync ERP Dashboard',
    desc: 'A full-stack car parts factory ERP dashboard with bilingual Arabic/English support (RTL/LTR), admin-protected CRUD operations, real-time analytics, and 20+ management modules covering employees, inventory, orders, machines, maintenance, quality control, payroll, and more—all backed by a live Supabase database.',
    tags: ['Supabase','PostgreSQL' ,'Tailwind CSS', 'Next.js', 'React', 'TypeScript', 'Recharts', 'Zod', 'React Icons'],
    github: 'https://github.com/esraamhmd/CarPartsFactoryDashboards',
    demo: 'https://motorsync.vercel.app/', video: `${CDN}/video/upload/v1787423380/motor_zyobac.mp4`, img: `${CDN}/image/upload/v1787423466/motor_c0wxqh.png`, cat: 'Fullstack',
  },
  {
    title: 'LuxStay - Hotel Booking Platform',
    desc: 'Full-stack luxury hotel booking platform with real-time room availability, guest-aware pricing, double-booking prevention, secure Stripe payments, Resend email notifications, guest reviews, Cloudinary image optimization, Neon PostgreSQL database, and responsive design.',
    tags: ['Docker', 'PostgreSQL', 'Neon', 'Stripe', 'Resend', 'Cloudinary', 'Next.js', 'React.js', 'Tailwind CSS', 'Redux Toolkit'],
    github: 'https://github.com/esraamhmd/LUXSTAY-Hotel-Website',
    demo: 'https://luxstay-hotel-website.vercel.app/', video: `${CDN}/video/upload/v1787423564/lux_p5efez.mp4`, img: `${CDN}/image/upload/v1787423549/lux_y7zjpz.png`, cat: 'Fullstack',
  },
  {
    title: 'ShopNest - E-commerce App',
    desc: 'A responsive e-commerce web app built completely from scratch with React, TypeScript, and Redux Toolkit. Features smart search, mega menus, cart, wishlist, full checkout, login/signup, OpenStreetMap delivery picker, auto-playing hero banner, and full mobile responsiveness.',
    tags: ['React.js', 'TypeScript', 'Redux Toolkit', 'React Router', 'DummyJSON API', 'Flaticon', 'OpenStreetMap', 'Custom CSS'],
    github: 'https://github.com/esraamhmd/shopnest-E-commrce-website',
    demo: 'https://shopnest-e-commrce-website.vercel.app/',
    video: `${CDN}/video/upload/v1787411632/shopnest_pm32vn.mp4`, img: `${CDN}/image/upload/v1787411603/ShopNest_ibeeny.png`, cat: 'Frontend',
  },
  {
    title: 'Payzo - Banking System App',
    desc: 'A full-stack banking web app with secure JWT auth, instant money transfers, real-time balance, paginated transaction history, spending charts, admin panel, and MongoDB Atlas backend.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Next.js', 'React.js', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Material UI', 'Zod', 'bcryptjs', 'Recharts'],
    github: 'https://github.com/esraamhmd/Payzo-BankSystem',
    demo: '', video: `${CDN}/video/upload/v1787415503/payzo_oglyao.mp4`, img: `${CDN}/image/upload/v1787415490/bankk_tw840q.png`, cat: 'Fullstack',
  },
  {
    title: 'CRUD System - Product Management',
    desc: 'Full product management system with create, edit, delete, real-time search, auto-calculated totals, localStorage persistence, dark/light mode, and Lottie animations.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'LocalStorage API', 'Lottie', 'IosevkaCharon Font'],
    github: 'https://github.com/esraamhmd/CRUDsystem',
    demo: 'https://crud-system-da82.vercel.app/',
    video: `${CDN}/video/upload/v1787422370/crud_cv8g0t.mp4`, img: `${CDN}/image/upload/v1787422351/CRUD_anfzx6.png`, cat: 'Frontend',
  },
  {
    title: 'Elite Music',
    desc: 'Comprehensive music streaming platform featuring trending tracks, popular artists, new releases, and a responsive modern interface with smooth UI interactions.',
    tags: ['React.js', 'JavaScript', 'Bootstrap', 'HTML', 'CSS', 'FontAwesome'],
    github: 'https://github.com/esraamhmd/elite-music',
    demo: '', video: `${CDN}/video/upload/v1787422672/elite_usidmq.mp4`, img: `${CDN}/image/upload/v1787422620/Elite_wtcbaq.png`, cat: 'Frontend',
  },
  {
    title: "Women's Fashion Store",
    desc: 'Full online fashion store with product catalog, shopping cart, user authentication, checkout process, and admin panel. Backed by PHP and MySQL.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/esraamhmd/online-store-project',
    demo: '', video: `${CDN}/video/upload/v1787422886/onlinestroe_mlohhd.mp4`, img: `${CDN}/image/upload/v1787422894/Women_or1oyo.png`, cat: 'Fullstack',
  },
  {
    title: "Soso's Bakery",
    desc: 'A responsive bakery website with hero banner, product galleries, contact form, and a frontend cart simulation with checkout screen.',
    tags: ['React.js', 'Bootstrap', 'TypeScript', 'React Router', 'Context API'],
    github: 'https://github.com/esraamhmd/bakery-web',
    demo: 'https://soso-bakery.vercel.app/', video: `${CDN}/video/upload/v1787423037/soso_cb3pzw.mp4`, img: `${CDN}/image/upload/v1787423039/soso_co12nr.png`, cat: 'Frontend',
  },
].map((p, i) => ({ ...p, color: COLORS[i % COLORS.length] }))

const FILTERS = ['All', 'Fullstack', 'Frontend']
const REPOS_URL = 'https://github.com/esraamhmd?tab=repositories'

const paginationSx = {
  '& .MuiPaginationItem-root': {
    fontFamily: FONT, fontWeight: 600, color: 'text.primary',
    border: '1px solid rgba(233,30,140,0.2)',
    '&:hover': { bgcolor: 'rgba(233,30,140,0.08)', borderColor: 'primary.main', color: 'primary.main' },
  },
  '& .MuiPaginationItem-root.Mui-selected': {
    bgcolor: 'primary.main', color: '#fff', border: '1px solid transparent',
    boxShadow: '0 4px 16px rgba(233,30,140,0.35)',
    '&:hover': { bgcolor: 'primary.dark' },
  },
}

export default function Projects() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const tc = (color) => ACCESSIBLE[color]?.[isDark ? 'dark' : 'light'] ?? color
  const [active, setActive] = useState('All')
  const [modal,  setModal]  = useState(null)
  const [page,   setPage]   = useState(1)

  const filtered  = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === active)
  const pageCount = Math.ceil(filtered.length / PER_PAGE)
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const handleFilter = f => { setActive(f); setPage(1) }
  const handlePage   = (_, v) => { setPage(v); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <Box id="projects" sx={{ py: 14, width: '100%', bgcolor: 'transparent', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <Box sx={{ position:'absolute', top:'8%', right:'-6%', width:500, height:500, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(233,30,140,0.08) 0%,transparent 70%)' }} />
      <Box sx={{ position:'absolute', bottom:'8%', left:'-6%', width:400, height:400, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(140,30,200,0.07) 0%,transparent 70%)' }} />

      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 5 } }}>

        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
            <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 18 }} />
            <Typography variant="overline" aria-hidden="true" sx={{ color: 'primary.main', fontFamily: FONT, fontWeight: 700, letterSpacing: 3 }}>What I Built</Typography>
          </Box>
          <Typography variant="h2" sx={{ color: 'text.primary', fontFamily: FONT, fontWeight: 800, fontSize: { xs: '2.2rem', md: '3rem' }, mb: 4 }}>
            My <Box component="span" sx={{ color: 'primary.main' }}>Projects</Box>
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.5 }}>
            {FILTERS.map(f => (
              <Button key={f} onClick={() => handleFilter(f)} variant={active === f ? 'contained' : 'outlined'}
                sx={{ fontFamily: FONT, fontWeight: 600, textTransform: 'none', borderRadius: 3, px: 2.5, py: 0.8, fontSize: '0.88rem', transition: 'all 0.22s',
                  ...(active === f
                    ? { bgcolor: 'primary.main', color: '#fff', boxShadow: '0 4px 16px rgba(233,30,140,0.35)', '&:hover': { bgcolor: 'primary.dark' } }
                    : { borderColor: 'rgba(233,30,140,0.3)', color: 'primary.main', '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(233,30,140,0.07)' } }
                  ),
                }}>
                {f}
              </Button>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }, gap: 3.5, mb: 6, alignItems: 'start' }}>
          {paginated.map((p, i) => {
            const textColor = tc(p.color)
            return (
            <Paper key={i} elevation={0} sx={{
              bgcolor: 'background.paper',
              border: `1px solid ${p.color}28`,
              borderRadius: 4,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: `0 4px 24px ${p.color}14`,
              transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
              '&:hover': {
                transform: 'translateY(-10px)',
                borderColor: p.color,
                boxShadow: `0 24px 70px ${p.color}40`,
                bgcolor: `${p.color}06`,
              },
            }}>
              <Box sx={{ height: 190, flexShrink: 0, overflow: 'hidden', position: 'relative', bgcolor: `${p.color}08` }}>
                <Box component="img" loading="lazy" src={p.img} alt={p.title}
                  sx={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s ease', '&:hover': { transform: 'scale(1.06)' } }}
                  onError={e => { e.target.style.display = 'none' }}
                />
                <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${p.color}35 0%, transparent 60%)`, pointerEvents: 'none' }} />
              </Box>

              <Box sx={{ px: 3, pt: 2, pb: 1 }}>
                <Typography sx={{ color: textColor, fontFamily: FONT, fontWeight: 700, fontSize: '1rem', mb: 0.6, lineHeight: 1.35 }}>
                  {p.title}
                </Typography>
                <Typography sx={{ color: 'text.primary', fontFamily: FONT, fontSize: '0.82rem', lineHeight: 1.6, mb: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {p.desc}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6 }}>
                  {p.tags.slice(0, 4).map(t => (
                    <Chip key={t} label={t} size="small" sx={{ fontFamily: FONT, bgcolor: `${p.color}14`, color: textColor, border: `1px solid ${p.color}35`, fontSize: '0.69rem', fontWeight: 700, height: 22 }} />
                  ))}
                  {p.tags.length > 4 && <Chip label={`+${p.tags.length - 4}`} size="small" sx={{ fontFamily: FONT, bgcolor: `${p.color}10`, color: textColor, fontSize: '0.69rem', fontWeight: 700, height: 22 }} />}
                </Box>
              </Box>

              <Box sx={{ flex: 1 }} />

              <Box sx={{ px: 2.5, pt: 0, pb: 1.5, display: 'flex', gap: 1, alignItems: 'center' }}>
                <Button component="a" href={p.github} target="_blank" rel="noopener noreferrer"
                  aria-label={`GitHub repository for ${p.title}`}
                  startIcon={<GitHubIcon fontSize="small" />} size="small" variant="outlined"
                  sx={{ flex: 1, fontFamily: FONT, fontWeight: 600, borderColor: `${p.color}50`, color: textColor, textTransform: 'none', borderRadius: 2.5, fontSize: '0.8rem',
                    '&:hover': { borderColor: p.color, bgcolor: `${p.color}18`, color: textColor }, transition: 'all 0.22s' }}>
                  GitHub
                </Button>
                {p.demo && (
                  <Button component="a" href={p.demo} target="_blank" rel="noopener noreferrer"
                    aria-label={`Live demo for ${p.title}`}
                    startIcon={<LaunchIcon fontSize="small" />} size="small" variant="contained"
                    sx={{ flex: 1, fontFamily: FONT, fontWeight: 600, bgcolor: p.color, color: '#fff', textTransform: 'none', borderRadius: 2.5, fontSize: '0.8rem',
                      boxShadow: `0 3px 12px ${p.color}40`,
                      '&:hover': { bgcolor: p.color, filter: 'brightness(1.18)', transform: 'translateY(-2px)' }, transition: 'all 0.22s' }}>
                    Live Demo
                  </Button>
                )}
                <IconButton onClick={() => setModal(p)} size="small" aria-label={`View details for ${p.title}`}
                  sx={{ color: textColor, border: `1px solid ${p.color}40`, borderRadius: 2, width: 34, height: 34,
                    '&:hover': { bgcolor: `${p.color}18`, borderColor: p.color, transform: 'scale(1.15)' }, transition: 'all 0.22s' }}>
                  <OpenInFullIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Box>
            </Paper>
            )
          })}
        </Box>

        {pageCount > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <Pagination count={pageCount} page={page} onChange={handlePage} color="primary" shape="rounded" sx={paginationSx} />
          </Box>
        )}

        <Box sx={{ textAlign: 'center' }}>
          <Button component="a" href={REPOS_URL} target="_blank" rel="noopener noreferrer"
            variant="outlined" size="large" endIcon={<ArrowForwardIcon />}
            aria-label="View more projects on GitHub"
            sx={{ fontFamily: FONT, fontWeight: 700, borderColor: 'rgba(233,30,140,0.4)', color: 'primary.main', px: 4, py: 1.3, borderRadius: 3, textTransform: 'none', fontSize: '0.95rem',
              '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(233,30,140,0.07)', transform: 'translateY(-2px)' }, transition: 'all 0.25s' }}>
            More on GitHub
          </Button>
        </Box>
      </Container>

      <Modal open={!!modal} onClose={() => setModal(null)}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: { xs: '94vw', sm: '82vw', md: '68vw' },
          maxWidth: 800,
          maxHeight: '92vh',
          bgcolor: 'background.paper',
          borderRadius: 4,
          boxShadow: '0 30px 100px rgba(0,0,0,0.6)',
          border: `1px solid ${modal?.color || '#722F99'}35`,
          outline: 'none',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
          {modal && (
            <>
              <Box sx={{ flexShrink: 0, display: 'flex', alignItems: 'center', p: 1.5, bgcolor: 'background.paper', borderBottom: `1px solid ${modal.color}20`, borderRadius: '16px 16px 0 0' }}>
                <Box sx={{ width: 4, height: 24, bgcolor: modal.color, borderRadius: 2, mr: 1.5 }} />
                <Typography sx={{ fontFamily: FONT, fontWeight: 700, fontSize: '1rem', color: 'text.primary', flex: 1 }}>{modal.title}</Typography>
                <IconButton onClick={() => setModal(null)} aria-label="Close" sx={{ color: modal.color, border: `1px solid ${modal.color}30`, borderRadius: 2 }}><CloseIcon /></IconButton>
              </Box>

              <Box sx={{
                flex: 1, minHeight: 0, overflowY: 'auto', overflowX: 'hidden',
                '&::-webkit-scrollbar': { width: 5 },
                '&::-webkit-scrollbar-track': { background: 'transparent' },
                '&::-webkit-scrollbar-thumb': { background: modal.color, borderRadius: 3 },
              }}>
                <Box sx={{ px: 3, pt: 3 }}>
                  {modal.video ? (
                    <Box component="video" src={modal.video} controls preload="none" poster={modal.img}
                      sx={{ width: '100%', borderRadius: 3, display: 'block', bgcolor: '#000', aspectRatio: '16/9', objectFit: 'cover' }}
                    />
                  ) : (
                    <Box component="img" src={modal.img} alt={modal.title}
                      sx={{ width: '100%', borderRadius: 3, display: 'block', aspectRatio: '16/9', objectFit: 'cover', objectPosition: 'top' }}
                    />
                  )}
                </Box>

                <Box sx={{ px: 3, pb: 4, pt: 2 }}>
                  <Chip label={modal.cat} size="small" sx={{ mb: 2.5, bgcolor: `${modal.color}14`, color: tc(modal.color), border: `1px solid ${modal.color}30`, fontFamily: FONT, fontWeight: 700 }} />
                  <Typography sx={{ fontFamily: FONT, fontWeight: 700, color: 'text.primary', fontSize: '0.95rem', mb: 1 }}>About this project</Typography>
                  <Typography sx={{ fontFamily: FONT, color: 'text.primary', lineHeight: 1.9, fontSize: '0.93rem', mb: 3 }}>{modal.desc}</Typography>
                  <Typography sx={{ fontFamily: FONT, fontWeight: 700, color: 'text.primary', fontSize: '0.95rem', mb: 1.5 }}>Tech Stack</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.9, mb: 3.5 }}>
                    {modal.tags.map(t => (
                      <Chip key={t} label={t} size="small" sx={{ fontFamily: FONT, bgcolor: `${modal.color}12`, color: tc(modal.color), border: `1px solid ${modal.color}30`, fontSize: '0.76rem', fontWeight: 700 }} />
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button component="a" href={modal.github} target="_blank" rel="noopener noreferrer"
                      aria-label={`GitHub repository for ${modal.title}`}
                      startIcon={<GitHubIcon />} variant="outlined"
                      sx={{ fontFamily: FONT, fontWeight: 600, borderColor: `${modal.color}50`, color: modal.color, textTransform: 'none', borderRadius: 3, px: 3,
                        '&:hover': { borderColor: modal.color, bgcolor: `${modal.color}18`, color: modal.color }, transition: 'all 0.22s' }}>
                      GitHub
                    </Button>
                    <Button component="a" href={modal.demo || modal.github} target="_blank" rel="noopener noreferrer"
                      aria-label={`Live demo for ${modal.title}`}
                      startIcon={<LaunchIcon />} variant="contained"
                      sx={{ fontFamily: FONT, fontWeight: 600, bgcolor: modal.color, color: '#fff', textTransform: 'none', borderRadius: 3, px: 3,
                        boxShadow: `0 4px 16px ${modal.color}40`,
                        '&:hover': { bgcolor: modal.color, filter: 'brightness(1.18)', transform: 'translateY(-2px)' }, transition: 'all 0.22s' }}>
                      Live Demo
                    </Button>
                  </Box>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  )
}