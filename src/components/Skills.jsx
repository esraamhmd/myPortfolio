import React, { useRef, useEffect, useState } from 'react'
import { Box, useTheme, Typography, Container, GlobalStyles } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const FONT = '"Plus Jakarta Sans", sans-serif'
const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace'

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
  { name: 'PostgreSQL',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',      color: '#336791', url: 'https://www.postgresql.org/docs',                           cat: 'Backend'  },
  { name: 'JWT',            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg',                  color: '#d63aff', url: 'https://jwt.io/introduction',                               cat: 'Backend'  },
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

const GROUPS = [
  { key: 'frontend',  cat: 'Frontend' },
  { key: 'backend',   cat: 'Backend'  },
  { key: 'tools',     cat: 'Tools'    },
  { key: 'languages', cat: 'Other'    },
]

const KEYFRAMES = {
  '@keyframes skType':  { from: { clipPath: 'inset(0 100% 0 0)' }, to: { clipPath: 'inset(0 0 0 0)' } },
  '@keyframes skBlink': { '0%,49%': { opacity: 1 }, '50%,100%': { opacity: 0 } },
  '@keyframes skLine':  { from: { opacity: 0, transform: 'translateX(-14px)' }, to: { opacity: 1, transform: 'none' } },
  '@keyframes skChip':  { from: { opacity: 0, transform: 'translateY(10px) scale(0.85)' }, to: { opacity: 1, transform: 'none' } },
}

export default function Skills() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const accent  = isDark ? 'primary.main' : '#a8005e'
  const kw      = isDark ? '#f06ab3' : '#a8005e'   // keywords
  const prop    = isDark ? '#c9a7ff' : '#5a1a80'   // property names
  const reduce  = { '@media (prefers-reduced-motion: reduce)': { animation: 'none !important', opacity: 1, transform: 'none' } }
  const play    = (name, delayMs, dur = '.6s') => visible ? `${name} ${dur} cubic-bezier(0.22,1,0.36,1) ${delayMs}ms both` : 'none'
  const mono    = { fontFamily: MONO, fontSize: { xs: '0.8rem', md: '0.95rem' }, lineHeight: 1.7 }

  return (
    <Box id="skills" ref={sectionRef} sx={{ py: 14, width: '100%', bgcolor: 'transparent', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <GlobalStyles styles={KEYFRAMES} />
      <Box sx={{ position:'absolute', top:'20%', left:'-6%', width:500, height:500, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(233,30,140,0.07) 0%,transparent 70%)' }} />
      <Box sx={{ position:'absolute', bottom:'5%', right:'-8%', width:500, height:500, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(233,30,140,0.07) 0%,transparent 70%)' }} />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
            <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 18 }} />
            <Typography variant="overline" aria-hidden="true" sx={{ color: accent, fontFamily: FONT, fontWeight: 700, letterSpacing: 3 }}>
              Technical Skills
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ color: 'text.primary', fontFamily: FONT, fontWeight: 800, fontSize: { xs: '2.2rem', md: '3rem' } }}>
            My <Box component="span" sx={{ color: accent }}>Skills</Box>
          </Typography>
        </Box>

        {/* code window */}
        <Box component="section" aria-label="Skills and technologies" sx={{
          maxWidth: 1000, mx: 'auto', borderRadius: 4, overflow: 'hidden', bgcolor: isDark ? '#0d0d19' : 'background.paper',
          border: '1px solid rgba(233,30,140,0.28)', boxShadow: '0 4px 24px rgba(233,30,140,0.10), 0 30px 80px rgba(233,30,140,0.10)',
          opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)',
          transition: visible ? 'opacity .7s ease, transform .7s cubic-bezier(0.22,1,0.36,1)' : 'none',
          ...reduce,
        }}>
          {/* title bar */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, px: 2.5, py: 1.4, bgcolor: isDark ? 'rgba(233,30,140,0.08)' : 'rgba(233,30,140,0.07)', borderBottom: '1px solid rgba(233,30,140,0.2)' }}>
            <Box aria-hidden="true" sx={{ display: 'flex', gap: 0.8 }}>
              {['#ff5f87', '#ffb454', '#8ae234'].map(c => <Box key={c} sx={{ width: 11, height: 11, borderRadius: '50%', bgcolor: c }} />)}
            </Box>
            <Typography component="span" sx={{ ...mono, fontSize: { xs: '0.74rem', md: '0.82rem' }, color: 'text.secondary', ml: 1, flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              skills.config.ts
            </Typography>
            <Typography component="span" sx={{ ...mono, fontSize: '0.72rem', fontWeight: 700, color: kw, px: 1.2, borderRadius: 3, bgcolor: 'rgba(233,30,140,0.12)', border: '1px solid rgba(233,30,140,0.3)', whiteSpace: 'nowrap' }}>
              {ALL_SKILLS.length} skills
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 2.5, md: 4 }, ...mono }}>
            {/* command line */}
            <Box aria-hidden="true" sx={{ display: 'flex', alignItems: 'center', mb: 1.5, color: 'text.primary' }}>
              <Box component="span" sx={{ color: kw, mr: 1.2, fontWeight: 700 }}>$</Box>
              <Box component="span" sx={{ display: 'inline-block', whiteSpace: 'nowrap', animation: play('skType', 200, '1.2s'), ...reduce }}>npx skills list --all</Box>
              <Box component="span" sx={{ display: 'inline-block', width: '0.6em', height: '1.15em', ml: 0.6, bgcolor: kw, animation: 'skBlink 1s steps(1) infinite', ...reduce }} />
            </Box>

            <Box component="p" sx={{ m: 0, color: 'text.secondary', animation: play('skLine', 1300, '.5s'), ...reduce }}>
              <span aria-hidden="true">{'// '}</span>Everything I use to take a product from idea to production
            </Box>

            <Box sx={{ mt: 1, animation: play('skLine', 1450, '.5s'), ...reduce }}>
              <Box component="span" sx={{ color: kw }}>export const</Box>{' '}
              <Box component="span" sx={{ color: 'text.primary', fontWeight: 700 }}>stack</Box>{' '}
              <Box component="span" aria-hidden="true" sx={{ color: 'text.secondary' }}>= {'{'}</Box>
            </Box>

            {GROUPS.map((g, gi) => {
              const skills = ALL_SKILLS.filter(s => s.cat === g.cat)
              const base = 1600 + gi * 260
              return (
                <Box key={g.key} sx={{ ml: { xs: 1.2, md: 3 }, mt: 2, pl: { xs: 1.5, md: 2.5 }, borderLeft: '2px solid rgba(233,30,140,0.22)', animation: play('skLine', base, '.55s'), ...reduce }}>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: 0, mb: 1.2 }}>
                    <Typography variant="h3" component="h3" sx={{ ...mono, fontWeight: 700, color: prop, fontSize: { xs: '0.9rem', md: '1.05rem' } }}>
                      {g.key}
                    </Typography>
                    <Box component="span" aria-hidden="true" sx={{ color: 'text.secondary' }}>: [</Box>
                    <Box component="span" sx={{ color: 'text.secondary', fontSize: '0.78em', ml: 1.5 }}><span aria-hidden="true">{'// '}</span>{skills.length} skills</Box>
                  </Box>

                  <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexWrap: 'wrap', gap: { xs: 0.9, md: 1.2 } }}>
                    {skills.map((s, i) => (
                      <Box component="li" key={s.name}>
                        <Box component="a" href={s.url} target="_blank" rel="noopener noreferrer"
                          sx={{
                            display: 'inline-flex', alignItems: 'center', gap: 1, textDecoration: 'none', color: 'text.primary',
                            fontFamily: FONT, fontWeight: 700, fontSize: { xs: '0.78rem', md: '0.85rem' }, lineHeight: 1.2,
                            pl: 0.7, pr: 1.5, py: 0.65, borderRadius: 50,
                            bgcolor: 'rgba(233,30,140,0.07)', border: '1px solid rgba(233,30,140,0.25)',
                            animation: play('skChip', base + 150 + i * 35, '.45s'),
                            transition: 'transform .25s cubic-bezier(0.34,1.56,0.64,1), box-shadow .25s, border-color .25s, background-color .25s',
                            '&:hover, &:focus-visible': { transform: 'translateY(-4px) scale(1.05)', borderColor: s.color, bgcolor: 'rgba(233,30,140,0.14)', boxShadow: `0 10px 24px ${s.color}45`, outline: 'none' },
                            '&:focus-visible': { outline: `2px solid ${isDark ? '#f06ab3' : '#a8005e'}`, outlineOffset: 2 },
                            '&:hover .sk-ico, &:focus-visible .sk-ico': { transform: 'rotate(-12deg) scale(1.18)' },
                            ...reduce,
                          }}>
                          <Box className="sk-ico" sx={{ width: 26, height: 26, borderRadius: '50%', bgcolor: isDark ? 'rgba(255,255,255,0.08)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 0.5, boxShadow: `0 0 0 1px ${s.color}55`, transition: 'transform .3s cubic-bezier(0.34,1.56,0.64,1)' }}>
                            <img src={s.icon} alt="" width="20" height="20" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={e => { e.target.style.opacity = 0.3 }} />
                          </Box>
                          {s.name}
                          <Box component="span" sx={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}> (opens documentation in a new tab)</Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  <Box aria-hidden="true" sx={{ color: 'text.secondary', mt: 1 }}>],</Box>
                </Box>
              )
            })}

            <Box aria-hidden="true" sx={{ mt: 2, color: 'text.secondary', animation: play('skLine', 2800, '.5s'), ...reduce }}>
              {'}'} <Box component="span" sx={{ color: kw }}>as const</Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}