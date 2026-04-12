import React from 'react'
import { Box, Typography, Container, Paper } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import WavingHandIcon from '@mui/icons-material/WavingHand'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const FONT = '"Plus Jakarta Sans", sans-serif'

const CONTACTS = [
  {
    icon: <EmailIcon sx={{ fontSize: 40 }} />,
    label: 'Gmail',
    value: 'esraammohamedd@gmail.com',
    sub: 'Send me an email anytime',
    href: 'mailto:esraammohamedd@gmail.com',
    color: '#e91e8c',
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: 40 }} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/esraamhmd',
    sub: "Let's connect professionally",
    href: 'https://www.linkedin.com/in/esraamhmd/',
    color: '#0a66c2',
  },
  {
    icon: <GitHubIcon sx={{ fontSize: 40 }} />,
    label: 'GitHub',
    value: 'github.com/esraamhmd',
    sub: 'Check out my repositories',
    href: 'https://github.com/esraamhmd',
    color: '#fff',
  },
]

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 14, width: '100%', bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ position:'absolute', top:'10%', right:'-6%', width:520, height:520, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(233,30,140,0.08) 0%,transparent 70%)' }} />
      <Box sx={{ position:'absolute', bottom:'5%', left:'-6%', width:400, height:400, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(140,30,200,0.07) 0%,transparent 70%)' }} />

      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>

        {/* Heading */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
            <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 18 }} />
            <Typography variant="overline" sx={{ color: 'primary.main', fontFamily: FONT, fontWeight: 700, letterSpacing: 3 }}>
              Contact Me
            </Typography>
          </Box>
          <Typography variant="h2" sx={{
            color: 'text.primary', fontFamily: FONT, fontWeight: 800,
            fontSize: { xs: '2.2rem', md: '3rem' },
          }}>
            Get In <Box component="span" sx={{ color: 'primary.main' }}>Touch</Box>{' '}
            <WavingHandIcon sx={{ color: 'primary.main', fontSize: '2rem', verticalAlign: 'middle' }} />
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontFamily: FONT, mt: 1.5, fontSize: '1rem' }}>
            Feel free to reach me through any of the channels below
          </Typography>
        </Box>

       
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 6, md: 8 },
        }}>

          {/* Lottie */}
          <Box sx={{
            flex: '0 0 auto',
            width: { xs: '85%', sm: '55%', md: '40%' },
            mx: { xs: 'auto', md: 0 },
            filter: 'drop-shadow(0 16px 48px rgba(233,30,140,0.22))',
            '&:hover': { transform: 'scale(1.03)' },
            transition: 'transform 0.3s',
          }}>
            <DotLottieReact
              src="/assets/contact.lottie"
              autoplay loop
              style={{ width: '100%', height: 'auto', minHeight: 380 }}
            />
          </Box>

      
          <Box sx={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            width: '100%',
          }}>
            {CONTACTS.map((c) => (
              <Paper
                key={c.label}
                component="a"
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                elevation={0}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: { xs: 2.5, md: 4 },
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: `${c.color}22`,
                  borderRadius: 4,
                  textDecoration: 'none',
                  
                  boxShadow: `0 4px 24px ${c.color}0e`,
                  '&:hover': {
                    borderColor: `${c.color}70`,
                    transform: 'translateX(8px)',
                    boxShadow: `0 12px 48px ${c.color}28`,
                  },
                  transition: 'all 0.28s',
                }}
              >
                {/* Icon */}
                <Box sx={{
                  flexShrink: 0,
                  width: { xs: 56, md: 72 },
                  height: { xs: 56, md: 72 },
                  borderRadius: 3,
                  bgcolor: `${c.color}12`,
                  border: '1.5px solid',
                  borderColor: `${c.color}35`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: c.color,
                  boxShadow: `0 4px 20px ${c.color}20`,
                }}>
                  {c.icon}
                </Box>

          
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography sx={{
                    fontFamily: FONT, fontWeight: 800,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    color: 'text.primary', mb: 0.4,
                  }}>
                    {c.label}
                  </Typography>
                  <Typography sx={{
                    fontFamily: FONT, fontWeight: 600,
                    fontSize: { xs: '0.78rem', md: '0.95rem' },
                    color: c.color, mb: 0.3,
                    
                    
                    wordBreak: 'break-all',
                  }}>
                    {c.value}
                  </Typography>
                  <Typography sx={{
                    fontFamily: FONT,
                    fontSize: { xs: '0.75rem', md: '0.82rem' },
                    color: 'text.secondary',
                  }}>
                    {c.sub}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>

        </Box>
      </Container>
    </Box>
  )
}