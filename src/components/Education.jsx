import React, { useRef, useEffect, useState } from 'react'
import { Box, useTheme, Typography, Container, Paper, Chip } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const FONT = '"Plus Jakarta Sans", sans-serif'

export default function Education() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box id="education" ref={sectionRef} sx={{ py: 14, bgcolor: 'transparent', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <Box sx={{ position:'absolute', bottom:'-10%', right:'-8%', width:500, height:500, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(233,30,140,0.07) 0%,transparent 70%)' }} />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(28px)',
          transition: visible ? 'opacity 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.1s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.1s' : 'none',
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
            <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 18 }} />
            <Typography variant="overline" aria-hidden="true" sx={{ color: isDark ? 'primary.main' : '#a8005e', fontFamily: FONT, fontWeight: 600, letterSpacing: 3 }}>
              My Background
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ color: 'text.primary', fontFamily: FONT, fontWeight: 800, fontSize: { xs: '2.2rem', md: '3rem' } }}>
            <Box component="span" sx={{ color: isDark ? 'primary.main' : '#a8005e' }}>Education</Box>
          </Typography>
        </Box>

        <Paper elevation={0} sx={{
          bgcolor: 'background.paper',
          border: '1px solid rgba(233,30,140,0.22)',
          borderRadius: 4,
          p: { xs: 3, sm: 4, md: 6 },
          boxShadow: '0 4px 24px rgba(233,30,140,0.10)',
          '&:hover': { borderColor: 'rgba(233,30,140,0.60)', transform: 'translateY(-6px)', boxShadow: '0 20px 60px rgba(233,30,140,0.20)' },
          transition: 'all 0.25s',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(28px)',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: { xs: 2, sm: 3 }, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
            <Box sx={{ flexShrink: 0, width: 64, height: 64, borderRadius: 3, bgcolor: 'rgba(233,30,140,0.12)', border: '2px solid rgba(233,30,140,0.38)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'primary.main', boxShadow: '0 4px 20px rgba(233,30,140,0.20)' }}>
              <AccountBalanceIcon sx={{ fontSize: 32 }} />
            </Box>

            <Box sx={{ flex: 1, minWidth: 0, width: { xs: '100%', sm: 'auto' } }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                <Chip label="University" size="small" sx={{ bgcolor: 'rgba(233,30,140,0.12)', color: isDark ? 'primary.main' : '#a8005e', border: '1px solid rgba(233,30,140,0.30)', fontSize: '0.75rem', fontWeight: 700, height: 24 }} />
                <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: FONT, fontWeight: 500, fontSize: '0.88rem' }}>
                  Oct 2021 – Jul 2025
                </Typography>
              </Box>

              <Typography sx={{ color: 'text.primary', fontFamily: FONT, fontWeight: 800, fontSize: { xs: '1.1rem', md: '1.3rem' }, mb: 0.5 }}>
                Modern University for Technology &amp; Information - MTI
              </Typography>
              <Typography sx={{ color: isDark ? 'primary.main' : '#a8005e', fontFamily: FONT, fontWeight: 600, fontSize: '1rem', mb: 0.4 }}>
                Bachelor of Computer Science and AI
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontFamily: FONT, fontSize: '0.9rem', mb: 3 }}>
                Computer Science Department
              </Typography>

              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                {[
                  
                  { key: 'grade', label: 'Grade: A · ', extra: 'Among the top students in my class', color: isDark ? '#f96aab' : '#9c0055' },
                  { key: 'project', label: 'Graduation Project: A+ · ', extra: 'Team Leader & AI Model Developer', color: isDark ? '#f96aab' : '#9c0055' },
                ].map(b => (
                  <Chip key={b.key} size="small"
                    label={b.extra ? (
                      <>
                        {b.label}
                       
                        <Box component="span" sx={{ color: 'text.secondary' }}>{b.extra}</Box>
                      </>
                    ) : b.label}
                    sx={{
                    bgcolor: 'rgba(233,30,140,0.09)',
                    color: b.color,
                    border: '1px solid rgba(233,30,140,0.28)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    height: 'auto',
                    minHeight: 28,
                    maxWidth: '100%',
                    px: 0.5,
                    py: 0.3,
                    boxShadow: '0 2px 10px rgba(233,30,140,0.14)',
                    '& .MuiChip-label': { whiteSpace: 'normal', textAlign: 'left', lineHeight: 1.4 },
                  }} />
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}