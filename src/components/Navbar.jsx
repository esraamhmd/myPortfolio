import React, { useContext, useState, useEffect } from 'react'
import {
  AppBar, Typography, Button, Box, IconButton,
  Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Tooltip,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import { ColorModeContext } from '../App'

const NAV = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact']
const FONT = '"Plus Jakarta Sans", sans-serif'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  const { toggleColorMode, mode } = useContext(ColorModeContext)
  const dark = mode === 'dark'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = id => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{
        bgcolor: scrolled
          ? dark ? 'rgba(10,10,20,0.93)' : 'rgba(253,240,247,0.93)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(233,30,140,0.12)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(233,30,140,0.08)' : 'none',
        transition: 'all 0.3s',
        width: '100%',
      }}>
        <Box sx={{
          width: '100%',
          px: { xs: 2.5, sm: 4, md: 6 },
          minHeight: { xs: 60, md: 64 },
          display: 'flex',
          alignItems: 'center',
        }}>

          
          <Box
            onClick={() => go('Home')}
            sx={{
              display: 'flex', alignItems: 'center', gap: 0.6,
              cursor: 'pointer', flexShrink: 0,
              '&:hover .li': { color: 'primary.light' },
              transition: 'all 0.2s',
            }}
          >
            <SentimentSatisfiedAltIcon
              className="li"
              sx={{ color: 'primary.main', fontSize: 22, transition: 'color 0.2s' }}
            />
            <Typography sx={{
              fontFamily: FONT, fontWeight: 800,
              fontSize: { xs: '1rem', md: '1.15rem' },
              color: 'text.primary', lineHeight: 1,
              '& span': { color: 'primary.main' },
            }}>
              my<span>Portfolio</span>
            </Typography>
          </Box>

         
          <Box sx={{ flex: 1 }} />

       
          {!mobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.2 }}>
              {NAV.map(link => (
                <Button
                  key={link}
                  onClick={() => go(link)}
                  sx={{
                    fontFamily: FONT, fontWeight: 500,
                    color: 'text.secondary', textTransform: 'none',
                    borderRadius: 2, px: 1.6, py: 0.7,
                    fontSize: '0.88rem', minWidth: 'auto',
                    '&:hover': { color: 'primary.main', bgcolor: 'rgba(233,30,140,0.07)' },
                    transition: 'all 0.2s',
                  }}
                >
                  {link}
                </Button>
              ))}

              {/* Theme toggle — rightmost */}
              <Tooltip title={dark ? 'Light mode' : 'Dark mode'}>
                <IconButton
                  onClick={toggleColorMode}
                  sx={{
                    ml: 1.5,
                    color: 'primary.main',
                    border: '1px solid rgba(233,30,140,0.28)',
                    borderRadius: 2, width: 36, height: 36,
                    '&:hover': { bgcolor: 'rgba(233,30,140,0.1)', borderColor: 'primary.main' },
                    transition: 'all 0.2s',
                  }}
                >
                  {dark ? <LightModeIcon sx={{ fontSize: 16 }} /> : <DarkModeIcon sx={{ fontSize: 16 }} />}
                </IconButton>
              </Tooltip>
            </Box>
          )}

          {/* Mobile */}
          {mobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton onClick={toggleColorMode} sx={{
                color: 'primary.main',
                border: '1px solid rgba(233,30,140,0.28)',
                borderRadius: 2, width: 34, height: 34,
              }}>
                {dark ? <LightModeIcon sx={{ fontSize: 15 }} /> : <DarkModeIcon sx={{ fontSize: 15 }} />}
              </IconButton>
              <IconButton onClick={() => setOpen(true)} sx={{ color: 'primary.main' }}>
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Box>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}
        PaperProps={{ sx: { bgcolor: 'background.default', width: 220, borderLeft: '1px solid rgba(233,30,140,0.14)', boxShadow: '-6px 0 28px rgba(233,30,140,0.10)' } }}
      >
        <Box sx={{ p: 2.5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2.5 }}>
            <IconButton onClick={() => setOpen(false)} sx={{ color: 'primary.main' }}><CloseIcon /></IconButton>
          </Box>
          <List>
            {NAV.map(link => (
              <ListItem button key={link} onClick={() => go(link)}
                sx={{ borderRadius: 2, mb: 0.5, '&:hover': { bgcolor: 'rgba(233,30,140,0.07)' }, transition: 'all 0.2s' }}
              >
                <ListItemText primary={link} primaryTypographyProps={{ fontFamily: FONT, fontWeight: 600, color: 'text.primary', fontSize: '0.95rem' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}