import React, { useState } from 'react'
import { Box, useTheme, Typography, Container, Paper, Button, Pagination } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const FONT = '"Plus Jakarta Sans", sans-serif'
const PER_PAGE = 8

const ALL_SKILLS = [
  { name: 'React.js',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',                color: '#61dafb', url: 'https://react.dev',                                          cat: 'Frontend' },
  { name: 'Next.js',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',              color: '#ffffff', url: 'https://nextjs.org/docs',                                   cat: 'Frontend' },
  { name: 'JavaScript',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',      color: '#f7df1e', url: 'https://developer.mozilla.org/docs/Web/JavaScript',         cat: 'Frontend' },
  { name: 'TypeScript',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',      color: '#3178c6', url: 'https://www.typescriptlang.org/docs',                       cat: 'Frontend' },
  { name: 'HTML5',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',                color: '#e34c26', url: 'https://developer.mozilla.org/docs/Web/HTML',              cat: 'Frontend' },
  { name: 'CSS3',           icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',                  color: '#264de4', url: 'https://developer.mozilla.org/docs/Web/CSS',               cat: 'Frontend' },
  { name: 'Redux Toolkit',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',                color: '#764abc', url: 'https://redux-toolkit.js.org',                             cat: 'Frontend' },
  { name: 'React Router',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg',    color: '#ca4245', url: 'https://reactrouter.com',                                   cat: 'Frontend' },
  { name: 'Tanstack Query', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',                color: '#ff4154', url: 'https://tanstack.com/query/latest',                         cat: 'Frontend' },
  { name: 'Bootstrap',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',        color: '#7952b3', url: 'https://getbootstrap.com/docs',                            cat: 'Frontend' },
  { name: 'Tailwind CSS',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: '#38bdf8', url: 'https://tailwindcss.com/docs',                        cat: 'Frontend' },
  { name: 'Material UI',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',      color: '#e91e8c', url: 'https://mui.com',                                           cat: 'Frontend' },
  { name: 'Node.js',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',              color: '#68a063', url: 'https://nodejs.org/learn',                                  cat: 'Backend'  },
  { name: 'Express.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',            color: '#ffffff', url: 'https://expressjs.com',                                     cat: 'Backend'  },
  { name: 'MongoDB',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',            color: '#47a248', url: 'https://www.mongodb.com/docs',                             cat: 'Backend'  },
  { name: 'RESTful API',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',            color: '#009688', url: 'https://restfulapi.net',                                    cat: 'Backend'  },
  { name: 'Supabase',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',          color: '#3ecf8e', url: 'https://supabase.com/docs',                                 cat: 'Backend'  },
  { name: 'PostgreSQL',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',        color: '#336791', url: 'https://www.postgresql.org/docs',                           cat: 'Backend'  },
  { name: 'JWT',            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg',                color: '#d63aff', url: 'https://jwt.io/introduction',                               cat: 'Backend'  },
  { name: 'Playwright',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg',      color: '#45ba4b', url: 'https://playwright.dev',                                    cat: 'Tools'    },
  { name: 'Jest',           icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',                     color: '#c21325', url: 'https://jestjs.io/docs',                                    cat: 'Tools'    },
  { name: 'AWS',            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', color: '#ff9900', url: 'https://docs.aws.amazon.com',               cat: 'Tools'    },
  { name: 'Docker',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',              color: '#2496ed', url: 'https://docs.docker.com',                                   cat: 'Tools'    },
  { name: 'Git',            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',                    color: '#f05032', url: 'https://git-scm.com/doc',                                   cat: 'Tools'    },
  { name: 'GitHub',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',              color: '#ffffff', url: 'https://github.com',                                        cat: 'Tools'    },
  { name: 'Postman',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',            color: '#ff6c37', url: 'https://learning.postman.com/docs',                         cat: 'Tools'    },
  { name: 'Figma',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',                color: '#f24e1e', url: 'https://figma.com',                                         cat: 'Tools'    },
  { name: 'Axios',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg',                   color: '#5a29e4', url: 'https://axios-http.com',                                    cat: 'Frontend' },
  { name: 'Zod',            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',      color: '#3068b7', url: 'https://zod.dev',                                           cat: 'Backend'  },
  { name: 'Recharts',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg',                  color: '#22b5bf', url: 'https://recharts.org',                                      cat: 'Frontend' },
  
  { name: 'Python',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',              color: '#3776ab', url: 'https://docs.python.org/3',                                 cat: 'Other'    },
  { name: 'C++',            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',        color: '#00599c', url: 'https://cplusplus.com/doc/tutorial',                        cat: 'Other'    },
]

const FILTERS = ['All', 'Frontend', 'Backend', 'Tools', 'Other']

const paginationSx = {
  '& .MuiPaginationItem-root': {
    fontFamily: FONT, fontWeight: 600,
    color: 'text.secondary',
    border: '1px solid rgba(233,30,140,0.2)',
    '&:hover': { bgcolor: 'rgba(233,30,140,0.08)', borderColor: 'primary.main', color: 'primary.main' },
  },
  '& .MuiPaginationItem-root.Mui-selected': {
    bgcolor: 'primary.main', color: '#fff',
    border: '1px solid transparent',
    boxShadow: '0 4px 16px rgba(233,30,140,0.35)',
    '&:hover': { bgcolor: 'primary.dark' },
  },
}

export default function Skills() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const [active, setActive] = useState('All')
  const [page,   setPage]   = useState(1)

  const filtered  = active === 'All' ? ALL_SKILLS : ALL_SKILLS.filter(s => s.cat === active)
  const pageCount = Math.ceil(filtered.length / PER_PAGE)
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const handleFilter = f => { setActive(f); setPage(1) }
  const handlePage   = (_, v) => { setPage(v); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <Box id="skills" sx={{ py: 14, width: '100%', bgcolor: 'transparent', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <Box sx={{ position:'absolute', top:'20%', left:'-6%', width:500, height:500, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(233,30,140,0.07) 0%,transparent 70%)' }} />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
            <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 18 }} />
            <Typography variant="overline" aria-hidden="true" sx={{ color: 'primary.main', fontFamily: FONT, fontWeight: 700, letterSpacing: 3 }}>
              Technical Skills
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ color: 'text.primary', fontFamily: FONT, fontWeight: 800, fontSize: { xs: '2.2rem', md: '3rem' }, mb: 4 }}>
            My <Box component="span" sx={{ color: 'primary.main' }}>Skills</Box>
          </Typography>

          {/* Filter buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.5 }}>
            {FILTERS.map(f => (
              <Button key={f} onClick={() => handleFilter(f)} variant={active === f ? 'contained' : 'outlined'}
                sx={{ fontFamily: FONT, fontWeight: 600, textTransform: 'none', borderRadius: 3, px: 2.5, py: 0.8, fontSize: '0.88rem',
                  ...(active === f
                    ? { bgcolor: 'primary.main', color: '#fff', boxShadow: '0 4px 16px rgba(233,30,140,0.35)', '&:hover': { bgcolor: 'primary.dark' } }
                    : { borderColor: 'rgba(233,30,140,0.3)', color: 'primary.main', '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(233,30,140,0.07)' } }
                  ), transition: 'all 0.2s',
                }}>
                {f}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2,1fr)', sm: 'repeat(3,1fr)', md: 'repeat(4,1fr)' }, gap: 3, mb: 6 }}>
          {paginated.map(skill => (
            <Paper key={skill.name} component="a" href={skill.url} target="_blank" rel="noopener noreferrer" elevation={0}
              sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: `${skill.color}1e`, borderRadius: 3, p: 3.5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.8, cursor: 'pointer', textDecoration: 'none', boxShadow: `0 4px 20px ${skill.color}0d`,
                '&:hover': { borderColor: `${skill.color}70`, transform: 'translateY(-10px)', boxShadow: `0 18px 50px ${skill.color}30` }, transition: 'all 0.25s',
              }}>
              <Box sx={{ width: 70, height: 70, borderRadius: 2.5, bgcolor: `${skill.color}12`, border: '1.5px solid', borderColor: `${skill.color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1.4, boxShadow: `0 4px 18px ${skill.color}1a` }}>
                <img src={skill.icon} alt={skill.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={e => { e.target.style.opacity = 0.3 }} />
              </Box>
              <Typography sx={{ color: 'text.primary', fontFamily: FONT, fontWeight: 600, fontSize: '0.88rem', textAlign: 'center' }}>
                {skill.name}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* Pagination */}
        {pageCount > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination count={pageCount} page={page} onChange={handlePage} color="primary" shape="rounded" sx={paginationSx} />
          </Box>
        )}
      </Container>
    </Box>
  )
}