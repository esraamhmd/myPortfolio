import React from 'react'
import { Box, Typography, Container, Paper } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const FONT = '"Plus Jakarta Sans", sans-serif'

const SKILLS = [
  { name: 'React.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',           color: '#61dafb', url: 'https://react.dev' },
  { name: 'JavaScript',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#f7df1e', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'Bootstrap',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',   color: '#7952b3', url: 'https://getbootstrap.com/docs' },
  { name: 'Tailwind CSS',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: '#38bdf8', url: 'https://tailwindcss.com/docs' },
  { name: 'Material UI',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', color: '#e91e8c', url: 'https://mui.com' },
  { name: 'Redux Toolkit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',           color: '#764abc', url: 'https://redux-toolkit.js.org' },
  { name: 'TypeScript',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178c6', url: 'https://www.typescriptlang.org/docs' },
  { name: 'CSS3',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',             color: '#264de4', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'HTML5',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',           color: '#e34c26', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'Git & GitHub',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',               color: '#f05032', url: 'https://git-scm.com/doc' },
  { name: 'C++',           icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',   color: '#00599c', url: 'https://cplusplus.com/doc/tutorial' },
  { name: 'Python',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',         color: '#3776ab', url: 'https://docs.python.org/3' },
]

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: 14, width: '100%', bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ position:'absolute', top:'20%', left:'-6%', width:500, height:500, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(233,30,140,0.07) 0%,transparent 70%)' }} />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
            <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 18 }} />
            <Typography variant="overline" sx={{ color: 'primary.main', fontFamily: FONT, fontWeight: 700, letterSpacing: 3 }}>
              Technical Skills
            </Typography>
          </Box>
          <Typography variant="h2" sx={{
            color: 'text.primary', fontFamily: FONT, fontWeight: 800,
            fontSize: { xs: '2.2rem', md: '3rem' },
          }}>
            My <Box component="span" sx={{ color: 'primary.main' }}>Skills</Box>
          </Typography>
        </Box>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2,1fr)', sm: 'repeat(3,1fr)', md: 'repeat(4,1fr)' },
          gap: 3,
        }}>
          {SKILLS.map(skill => (
            <Paper
              key={skill.name}
              component="a"
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              elevation={0}
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid', borderColor: `${skill.color}1e`,
                borderRadius: 3, p: 3.5,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.8,
                cursor: 'pointer', textDecoration: 'none',
                boxShadow: `0 4px 20px ${skill.color}0d`,
                '&:hover': {
                  borderColor: `${skill.color}70`,
                  transform: 'translateY(-10px)',
                  boxShadow: `0 18px 50px ${skill.color}30`,
                },
                transition: 'all 0.25s',
              }}
            >
              <Box sx={{
                width: 70, height: 70, borderRadius: 2.5,
                bgcolor: `${skill.color}12`,
                border: '1.5px solid', borderColor: `${skill.color}28`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                p: 1.4, boxShadow: `0 4px 18px ${skill.color}1a`,
              }}>
                <img
                  src={skill.icon} alt={skill.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  onError={e => { e.target.style.opacity = 0.3 }}
                />
              </Box>
              <Typography sx={{ color: 'text.primary', fontFamily: FONT, fontWeight: 600, fontSize: '0.88rem', textAlign: 'center' }}>
                {skill.name}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  )
}