import React, { useRef, useEffect, useState } from 'react'
import { Box, useTheme, Typography, Container, Paper, Chip } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import GroupsIcon from '@mui/icons-material/Groups'

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

              <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gap: { xs: 1.2, md: 2 }, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' } }}>
                {[
                  { key: 'grade', grade: 'A', title: 'Grade: A', text: 'Among the top students in my class', Icon: WorkspacePremiumIcon, accent: '#e91e8c', color: isDark ? '#f96aab' : '#9c0055' },
                  { key: 'project', grade: 'A+', title: 'Graduation Project: A+', text: 'Team Leader & AI Model Developer', Icon: GroupsIcon, accent: '#e91e8c', color: isDark ? '#f96aab' : '#9c0055' },
                ].map(b => (
                  <Box component="li" key={b.key} sx={{
                    position: 'relative', overflow: 'hidden',
                    display: 'flex', alignItems: 'center', gap: { xs: 1.3, md: 2 },
                    p: { xs: 1.2, sm: 1.5, md: 2 }, borderRadius: 3, minWidth: 0,
                    border: `1px solid ${b.accent}${isDark ? '47' : '59'}`,
                    background: `linear-gradient(135deg, ${b.accent}${isDark ? '1f' : '14'} 0%, transparent 70%)`,
                    transition: 'transform .25s, box-shadow .25s, border-color .25s',
                    '&:hover': { transform: 'translateY(-3px)', borderColor: b.accent, boxShadow: `0 10px 28px ${b.accent}33` },
                    '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
                  }}>
                    <Box aria-hidden="true" sx={{
                      position: 'relative', flexShrink: 0, width: { xs: 42, sm: 48, md: 64 }, height: { xs: 42, sm: 48, md: 64 }, borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: b.color, fontFamily: FONT, fontWeight: 800, fontSize: b.grade.length > 1 ? { xs: '0.95rem', sm: '1.1rem', md: '1.5rem' } : { xs: '1.15rem', sm: '1.3rem', md: '1.8rem' },
                      bgcolor: 'background.paper',
                      border: `2px solid ${b.accent}`,
                      boxShadow: { xs: `0 0 0 3px ${b.accent}1f, 0 3px 12px ${b.accent}40`, md: `0 0 0 5px ${b.accent}1f, 0 4px 18px ${b.accent}40` },
                    }}>
                      {b.grade}
                      <Box sx={{ position: 'absolute', right: -5, bottom: -5, width: { xs: 18, md: 26 }, height: { xs: 18, md: 26 }, borderRadius: '50%', bgcolor: 'background.paper', border: `1px solid ${b.accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <b.Icon sx={{ fontSize: { xs: 11, md: 16 }, color: b.color }} />
                      </Box>
                    </Box>
                    <Box sx={{ minWidth: 0 }}>
                      <Typography sx={{ color: b.color, fontFamily: FONT, fontWeight: 800, fontSize: { xs: '0.85rem', md: '1rem' }, lineHeight: 1.3 }}>
                        {b.title}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', fontFamily: FONT, fontSize: { xs: '0.76rem', md: '0.88rem' }, lineHeight: 1.45, mt: 0.3 }}>
                        {b.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}