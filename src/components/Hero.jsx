import React, { useContext } from 'react'
import { Box, Typography, IconButton, Container } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { ColorModeContext } from '../App'

const FONT = '"Plus Jakarta Sans", sans-serif'
const ROLE = 'Frontend Developer'

const charCss = ROLE.split('').map((_, i) =>
  `.tc-${i}{animation:tc-show 0.18s ease ${0.6 + i * 0.12}s both;}`
).join('')

const css = `
.tc{display:inline-block;opacity:0;}
${charCss}
@keyframes tc-show{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
.tc-cur{
  display:inline-block;width:3px;height:.85em;
  background:#e91e8c;margin-left:2px;vertical-align:middle;
  animation:tc-blink .8s step-end infinite;
  animation-delay:${0.6 + ROLE.length * 0.12 + 0.2}s;
  opacity:0;
}
@keyframes tc-blink{0%,100%{opacity:1}50%{opacity:0}}
`

export default function Hero() {
  const { mode } = useContext(ColorModeContext)
  const isDark = mode === 'dark'

  return (
    <Box id="home" sx={{
      minHeight: '100vh', width: '100%',
      display: 'flex', alignItems: 'center',
      bgcolor: 'background.default',
      position: 'relative', overflow: 'hidden',
    }}>
      <style>{css}</style>

      <Box sx={{ position:'absolute', top:'-12%', right:'-8%', width:700, height:700, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(233,30,140,0.14) 0%,transparent 66%)' }} />
      <Box sx={{ position:'absolute', bottom:'-12%', left:'-8%', width:500, height:500, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(140,30,200,0.09) 0%,transparent 68%)' }} />

      <Container maxWidth="xl" sx={{ pt: 10, pb: 6, px: { xs: 3, md: 6 } }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: { xs: 5, md: 4 },
        }}>

          {/* LEFT */}
          <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '50%' } }}>

            <Typography variant="h1" sx={{
              fontFamily: FONT, fontWeight: 800,
              fontSize: { xs: '3rem', md: '4rem', lg: '5rem' },
              lineHeight: 1.05, color: 'text.primary', mb: 0.5,
              textShadow: isDark ? '0 4px 28px rgba(233,30,140,0.12)' : 'none',
            }}>
              Hi, I'm
            </Typography>

            <Typography variant="h1" sx={{
              fontFamily: FONT, fontWeight: 800,
              fontSize: { xs: '2.6rem', md: '3.6rem', lg: '4.4rem' },
              lineHeight: 1.1, mb: 3,
              background: 'linear-gradient(135deg,#e91e8c,#ff6ec7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 4px 16px rgba(233,30,140,0.35))',
              wordBreak: 'keep-all', whiteSpace: 'nowrap',
            }}>
              Esraa Mahmoud
            </Typography>

            <Typography variant="h4" sx={{
              fontFamily: FONT, fontWeight: 700,
              mb: 5, color: 'primary.main',
              textShadow: '0 2px 14px rgba(233,30,140,0.28)',
              minHeight: '2.6rem',
              fontSize: { xs: '1.5rem', md: '1.8rem', lg: '2rem' },
            }}>
              {ROLE.split('').map((ch, i) => (
                <span key={i} className={`tc tc-${i}`}>
                  {ch === ' ' ? '\u00A0' : ch}
                </span>
              ))}
              <span className="tc-cur" />
            </Typography>

            {/* GitHub + LinkedIn — centered, real links */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              {[
                { icon: <GitHubIcon sx={{ fontSize: 24 }} />,   label: 'GitHub',   href: 'https://github.com/esraamhmd' },
                { icon: <LinkedInIcon sx={{ fontSize: 24 }} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/esraamhmd/' },
              ].map(s => (
                <IconButton
                  key={s.label}
                  component="a" href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                  sx={{
                    color: 'text.secondary',
                    border: '1px solid rgba(233,30,140,0.28)',
                    borderRadius: 2, width: 54, height: 54,
                    boxShadow: '0 4px 16px rgba(233,30,140,0.10)',
                    '&:hover': {
                      color: 'primary.main', borderColor: 'primary.main',
                      bgcolor: 'rgba(233,30,140,0.09)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 28px rgba(233,30,140,0.28)',
                    },
                    transition: 'all 0.22s',
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* RIGHT — Lottie */}
          <Box sx={{
            flex: '0 0 auto',
            width: { xs: '85%', sm: '60%', md: '46%' },
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            filter: 'drop-shadow(0 20px 60px rgba(233,30,140,0.20))',
            '&:hover': { transform: 'scale(1.03)' },
            transition: 'transform 0.3s',
          }}>
            <DotLottieReact
              src="/assets/home.lottie"
              autoplay loop
              style={{ width: '100%', height: 'auto', minHeight: 360 }}
            />
          </Box>

        </Box>
      </Container>
    </Box>
  )
}