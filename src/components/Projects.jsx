import React from 'react'
import { Box, Typography, Container, Paper, Chip, Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const FONT = '"Plus Jakarta Sans", sans-serif'

const PROJECTS = [
  {
    title: 'ShopNest — E-commerce App',
    desc: 'Full-featured e-commerce app with smart search, mega menus, cart, wishlist, checkout, and real product data from DummyJSON API. Built without UI libraries.',
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'React Router', 'DummyJSON API'],
    github: 'https://github.com/esraamhmd/shopnest-E-commrce-website',
    img: '/assets/ShopNest.png',
    color: '#e91e8c',
  },
  {
    title: 'CRUD System — Product Management',
    desc: 'Full product management system with create, edit, delete, real-time search, auto-calculated totals, localStorage persistence, and dark/light mode.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'LocalStorage', 'Lottie'],
    github: 'https://github.com/esraamhmd/CRUDsystem',
    img: '/assets/CRUD.png',
    color: '#764abc',
  },
  {
    title: 'Elite Music',
    desc: 'Comprehensive music platform featuring trending tracks, popular artists, new releases, and a responsive modern interface with playback controls.',
    tags: ['React.js', 'Bootstrap', 'CSS', 'JavaScript', 'FontAwesome'],
    github: 'https://github.com/esraamhmd/elite-music',
    img: '/assets/Elite.png',
    color: '#ff6ec7',
  },
  {
    title: "Women's Fashion Store",
    desc: 'Full online fashion store with product catalog, shopping cart, user authentication, checkout process, and admin panel for managing products and orders.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    github: 'https://github.com/esraamhmd/online-store-project',
    img: '/assets/Women.png',
    color: '#38bdf8',
  },
  {
    title: 'Weather App',
    desc: 'Real-time weather application showing temperature, humidity, and wind speed for any city. Fetches live data from a weather API with full error handling.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    github: 'https://github.com/esraamhmd/weather-App',
    img: '/assets/weather.png',
    color: '#4caf50',
  },
  {
    title: 'Calculator App',
    desc: 'Responsive calculator with basic arithmetic, square root, and exponentiation. Clean animated UI with error handling for invalid expressions.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/esraamhmd/Calculator-App',
    img: '/assets/Calculator.png',
    color: '#f7df1e',
  },
  {
    title: "Soso's Bakery",
    desc: 'Responsive bakery website with hero banner, product galleries, contact form, cart simulation, and smooth navigation between sections.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/esraamhmd/bakery-web',
    img: '/assets/soso.png',
    color: '#ed8b00',
  },
  {
    title: 'Word Scramble Game',
    desc: 'Interactive word unscrambling game with hints, countdown timer, random word generation, input validation, and responsive design.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/esraamhmd/Word_Scramble',
    img: '/assets/word.png',
    color: '#9c27b0',
  },
]

// → goes to repositories tab
const REPOS_URL = 'https://github.com/esraamhmd?tab=repositories'

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 14, width: '100%', bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ position:'absolute', top:'8%', right:'-6%', width:500, height:500, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(233,30,140,0.08) 0%,transparent 70%)' }} />
      <Box sx={{ position:'absolute', bottom:'8%', left:'-6%', width:400, height:400, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(140,30,200,0.07) 0%,transparent 70%)' }} />

      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 5 } }}>

        {/* heading */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
            <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 18 }} />
            <Typography variant="overline" sx={{ color: 'primary.main', fontFamily: FONT, fontWeight: 700, letterSpacing: 3 }}>
              What I Built
            </Typography>
          </Box>
          <Typography variant="h2" sx={{
            color: 'text.primary', fontFamily: FONT, fontWeight: 800,
            fontSize: { xs: '2.2rem', md: '3rem' },
          }}>
            My <Box component="span" sx={{ color: 'primary.main' }}>Projects</Box>
          </Typography>
        </Box>

        {/* 3-column grid */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' },
          gap: 3.5, mb: 7,
        }}>
          {PROJECTS.map((p, i) => (
            <Paper key={i} elevation={0} sx={{
              bgcolor: 'background.paper',
              border: '1px solid', borderColor: `${p.color}22`,
              borderRadius: 4, overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
              boxShadow: `0 4px 24px ${p.color}0e`,
              '&:hover': {
                transform: 'translateY(-8px)',
                borderColor: `${p.color}60`,
                boxShadow: `0 20px 60px ${p.color}28`,
              },
              '&:hover .proj-img': { transform: 'scale(1.05)' },
              transition: 'all 0.28s',
            }}>

              {/* screenshot */}
              <Box sx={{
                height: 200, overflow: 'hidden',
                bgcolor: `${p.color}08`,
                borderBottom: '1px solid', borderColor: `${p.color}18`,
                position: 'relative',
              }}>
                <Box
                  className="proj-img"
                  component="img"
                  src={p.img}
                  alt={p.title}
                  sx={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'top',
                    display: 'block',
                    transition: 'transform 0.35s ease',
                  }}
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.parentElement.style.background = `${p.color}12`
                  }}
                />
                <Box sx={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to top, ${p.color}28 0%, transparent 55%)`,
                  pointerEvents: 'none',
                }} />
              </Box>

              <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{
                  color: 'text.primary', fontFamily: FONT, fontWeight: 700,
                  fontSize: '1rem', mb: 1, lineHeight: 1.35,
                }}>
                  {p.title}
                </Typography>
                <Typography sx={{
                  color: 'text.secondary', fontFamily: FONT,
                  fontSize: '0.84rem', lineHeight: 1.7, mb: 2, flex: 1,
                }}>
                  {p.desc}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.7, mb: 2.5 }}>
                  {p.tags.map(t => (
                    <Chip key={t} label={t} size="small" sx={{
                      fontFamily: FONT,
                      bgcolor: `${p.color}12`, color: p.color,
                      border: '1px solid', borderColor: `${p.color}30`,
                      fontSize: '0.69rem', fontWeight: 700, height: 22,
                    }} />
                  ))}
                </Box>

                {/* GitHub only — no LinkedIn */}
                <Button
                  component="a" href={p.github} target="_blank" rel="noopener noreferrer"
                  startIcon={<GitHubIcon fontSize="small" />}
                  size="small" variant="outlined" fullWidth
                  sx={{
                    fontFamily: FONT, fontWeight: 600,
                    borderColor: `${p.color}45`, color: p.color,
                    textTransform: 'none', borderRadius: 2.5, fontSize: '0.84rem',
                    '&:hover': { borderColor: p.color, bgcolor: `${p.color}0d`, boxShadow: `0 4px 16px ${p.color}20` },
                    transition: 'all 0.22s',
                  }}
                >
                  GitHub
                </Button>
              </Box>
            </Paper>
          ))}
        </Box>

        {/* View More → repositories tab */}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            component="a"
            href={REPOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              fontFamily: FONT, fontWeight: 700,
              bgcolor: 'primary.main', color: '#fff',
              px: 5, py: 1.5, borderRadius: 3,
              textTransform: 'none', fontSize: '1rem',
              boxShadow: '0 6px 24px rgba(233,30,140,0.35)',
              '&:hover': {
                bgcolor: 'primary.dark',
                transform: 'translateY(-3px)',
                boxShadow: '0 10px 36px rgba(233,30,140,0.45)',
              },
              transition: 'all 0.25s',
            }}
          >
            View More
          </Button>
        </Box>

      </Container>
    </Box>
  )
}