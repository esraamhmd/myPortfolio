import React, { useContext, useRef, useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { ColorModeContext } from '../App'

const FONT = '"Plus Jakarta Sans", sans-serif'

const css = `
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');

@keyframes faceCircle { from{stroke-dashoffset:82;opacity:0} to{stroke-dashoffset:0;opacity:1} }
@keyframes eyeLeft    { from{opacity:0;transform:translateX(-4px)} to{opacity:1;transform:translateX(0)} }
@keyframes eyeRight   { from{opacity:0;transform:translateX(4px)}  to{opacity:1;transform:translateX(0)} }
@keyframes smileArc   { from{stroke-dashoffset:20;opacity:0} to{stroke-dashoffset:0;opacity:1} }
@keyframes emFade     { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:translateY(0)} }

.f-afc { fill:none; stroke:#e91e8c; stroke-width:2; stroke-linecap:round;
  stroke-dasharray:82; stroke-dashoffset:82; }
.f-ael { fill:#e91e8c; opacity:0; }
.f-aer { fill:#e91e8c; opacity:0; }
.f-asm { fill:none; stroke:#e91e8c; stroke-width:2; stroke-linecap:round;
  stroke-dasharray:20; stroke-dashoffset:20; }
.f-em {
  font-family:'Pinyon Script',cursive;
  font-weight:400;
  font-size:52px;
  fill:#e91e8c;
  opacity:0;
  filter: drop-shadow(0 0 6px rgba(233,30,140,0.45));
}

.footer-animate .f-afc { animation: faceCircle 0.6s cubic-bezier(0.4,0,0.2,1) 0s forwards; }
.footer-animate .f-ael { animation: eyeLeft 0.25s ease 0.65s forwards; }
.footer-animate .f-aer { animation: eyeRight 0.25s ease 0.85s forwards; }
.footer-animate .f-asm { animation: smileArc 0.35s ease 1.05s forwards; }
.footer-animate .f-em  { animation: emFade 0.5s ease 0s forwards; }
`

export default function Footer() {
  const { mode } = useContext(ColorModeContext)
  const isDark = mode === 'dark'
  const footerRef = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const el = footerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Box component="footer" ref={footerRef} className={animate ? 'footer-animate' : ''} sx={{
      py: 4, px: 4, textAlign: 'center',
      bgcolor: 'background.paper',
      borderTop: '1px solid rgba(233,30,140,0.13)',
      boxShadow: '0 -4px 28px rgba(233,30,140,0.07)',
    }}>
      <style>{css}</style>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.8, mb: 1 }}>
       
        <Box sx={{ width: 26, height: 26, flexShrink: 0 }}>
          <svg viewBox="0 0 26 26" width="26" height="26" xmlns="http://www.w3.org/2000/svg">
            <circle className="f-afc" cx="13" cy="13" r="11" />
            <circle className="f-ael" cx="9"  cy="10" r="1.6" />
            <circle className="f-aer" cx="17" cy="10" r="1.6" />
            <path   className="f-asm" d="M8.5 15.5 Q13 20 17.5 15.5" />
          </svg>
        </Box>

       
        <svg viewBox="0 0 110 48" width="90" height="38" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          <text x="4" y="44" className="f-em">EM</text>
        </svg>
      </Box>

      <Typography sx={{ fontFamily: FONT, color: 'text.primary', opacity: 0.75, fontSize: '0.82rem' }}>
        Esraa Mahmoud - Fullstack Developer
      </Typography>
    </Box>
  )
}