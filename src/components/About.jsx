import React from 'react'
import { Box, Typography, Container, Paper } from '@mui/material'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function About() {
  return (
    <Box id="about" sx={{ py: 14, bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ position:'absolute', top:'20%', left:'-8%', width:550, height:550, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(233,30,140,0.07) 0%,transparent 70%)' }} />

      <Container maxWidth="xl">
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 6, md: 10 },
        }}>

          {/* Lottie — much bigger */}
          <Box sx={{
            flex: '0 0 auto',
            width: { xs: '90%', sm: '65%', md: '46%' },
            mx: { xs: 'auto', md: 0 },
            filter: 'drop-shadow(0 16px 50px rgba(233,30,140,0.20))',
            '&:hover': { transform: 'scale(1.03)' },
            transition: 'transform 0.3s',
          }}>
            <DotLottieReact
              src="/src/assets/about.lottie"
              autoplay loop
              style={{ width: '100%', height: 'auto', minHeight: 380 }}
            />
          </Box>

          {/* Text */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <SentimentSatisfiedAltIcon sx={{ color: 'primary.main', fontSize: 22 }} />
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 3 }}>
                Who Am I
              </Typography>
            </Box>

            <Typography variant="h2" sx={{
              mb: 4, color: 'text.primary',
              fontSize: { xs: '2.2rem', md: '3rem' },
              textShadow: '0 4px 20px rgba(233,30,140,0.1)',
            }}>
              About <Box component="span" sx={{ color: 'primary.main' }}>Me</Box>
            </Typography>

            <Paper elevation={0} sx={{
              bgcolor: 'rgba(233,30,140,0.05)',
              border: '1px solid rgba(233,30,140,0.20)',
              borderRadius: 4,
              p: { xs: 3, md: 4.5 },
              boxShadow: '0 8px 40px rgba(233,30,140,0.10)',
              '&:hover': {
                borderColor: 'rgba(233,30,140,0.42)',
                boxShadow: '0 16px 56px rgba(233,30,140,0.16)',
              },
              transition: 'all 0.25s',
            }}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.95, fontSize: '1.05rem' }}>
                Recent Computer Science and AI graduate passionate about frontend development.
                Skilled in HTML, CSS, JavaScript, React.js and more — with hands-on experience
                building responsive web applications. Completed React.js training at ITI.
              </Typography>
            </Paper>
          </Box>

        </Box>
      </Container>
    </Box>
  )
}