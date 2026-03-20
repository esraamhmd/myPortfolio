import React, { useState } from 'react'
import {
  Box, Typography, Container, TextField, Button,
  Paper, Alert, CircularProgress,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import WavingHandIcon from '@mui/icons-material/WavingHand'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault(); setLoading(true); setStatus(null)
    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id:  'YOUR_SERVICE_ID',
          template_id: 'YOUR_TEMPLATE_ID',
          user_id:     'YOUR_PUBLIC_KEY',
          template_params: {
            from_name:  `${form.firstName} ${form.lastName}`,
            from_email: form.email,
            phone:      form.phone,
            message:    form.message,
            to_email:   'YOUR_EMAIL@gmail.com',
          },
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm({ firstName:'', lastName:'', email:'', phone:'', message:'' })
    } catch { setStatus('error') }
    setLoading(false)
  }

  const fieldSx = {
    '& .MuiOutlinedInput-root': {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      borderRadius: 2.5,
      bgcolor: 'rgba(233,30,140,0.04)',
      '& fieldset': { borderColor: 'rgba(233,30,140,0.22)' },
      '&:hover fieldset': { borderColor: 'rgba(233,30,140,0.5)' },
      '&.Mui-focused fieldset': { borderColor: '#e91e8c' },
    },
    '& .MuiInputLabel-root': { fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'text.secondary' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#e91e8c' },
    '& .MuiOutlinedInput-input': { fontFamily: '"Plus Jakarta Sans", sans-serif' },
  }

  return (
    <Box id="contact" sx={{ py: 14, width: '100%', bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ position:'absolute', top:'10%', right:'-6%', width:520, height:520, borderRadius:'50%', pointerEvents:'none', background:'radial-gradient(circle,rgba(233,30,140,0.08) 0%,transparent 70%)' }} />

      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        {/* heading */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
            <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 18 }} />
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 3, fontFamily: '"Plus Jakarta Sans",sans-serif' }}>
              Contact Me
            </Typography>
          </Box>
          <Typography variant="h2" sx={{
            color: 'text.primary',
            fontFamily: '"Plus Jakarta Sans",sans-serif',
            fontWeight: 700,
            fontSize: { xs: '2.2rem', md: '3rem' },
          }}>
            Get In <Box component="span" sx={{ color: 'primary.main' }}>Touch</Box>{' '}
            <WavingHandIcon sx={{ color: 'primary.main', fontSize: '2rem', verticalAlign: 'middle' }} />
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 5, md: 6 },
          alignItems: 'center',
        }}>

          {/* Lottie — much bigger */}
          <Box sx={{
            flex: '0 0 auto',
            width: { xs: '90%', sm: '65%', md: '42%' },
            mx: { xs: 'auto', md: 0 },
            filter: 'drop-shadow(0 16px 48px rgba(233,30,140,0.22))',
            '&:hover': { transform: 'scale(1.03)' },
            transition: 'transform 0.3s',
          }}>
            <DotLottieReact
              src="/assets/contact.lottie"
              autoplay loop
              style={{ width: '100%', height: 'auto', minHeight: 420 }}
            />
          </Box>

          {/* Form */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Paper elevation={0} sx={{
              bgcolor: 'background.paper',
              border: '1px solid rgba(233,30,140,0.18)',
              borderRadius: 4, p: { xs: 3, md: 4.5 },
              boxShadow: '0 8px 40px rgba(233,30,140,0.10)',
              '&:hover': { borderColor: 'rgba(233,30,140,0.38)', boxShadow: '0 16px 56px rgba(233,30,140,0.15)' },
              transition: 'all 0.25s',
            }}>
              <Box component="form" onSubmit={submit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <TextField name="firstName" label="First Name *" value={form.firstName} onChange={handle} required sx={{ ...fieldSx, flex: 1, minWidth: 130 }} />
                  <TextField name="lastName"  label="Last Name *"  value={form.lastName}  onChange={handle} required sx={{ ...fieldSx, flex: 1, minWidth: 130 }} />
                </Box>
                <TextField name="email"   label="Email Address *" type="email" value={form.email}   onChange={handle} required sx={fieldSx} />
                <TextField name="phone"   label="Phone Number"                 value={form.phone}   onChange={handle} sx={fieldSx} />
                <TextField name="message" label="Your Message *"  multiline rows={4} value={form.message} onChange={handle} required sx={fieldSx} />

                {status === 'success' && <Alert severity="success" sx={{ borderRadius: 2 }}>Message sent! I'll get back to you soon.</Alert>}
                {status === 'error'   && <Alert severity="error"   sx={{ borderRadius: 2 }}>Please fill in EmailJS credentials in Contact.jsx.</Alert>}

                <Button
                  type="submit" variant="contained" disabled={loading}
                  endIcon={loading ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
                  sx={{
                    fontFamily: '"Plus Jakarta Sans",sans-serif',
                    bgcolor: 'primary.main', color: '#fff',
                    fontWeight: 700, py: 1.8,
                    borderRadius: 3, textTransform: 'none', fontSize: '1.05rem',
                    boxShadow: '0 6px 24px rgba(233,30,140,0.35)',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 36px rgba(233,30,140,0.45)',
                    },
                    transition: 'all 0.25s',
                  }}
                >
                  {loading ? 'Sending…' : 'Send Message'}
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}