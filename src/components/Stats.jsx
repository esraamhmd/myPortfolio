import React, { useEffect, useRef, useState } from 'react'
import { Box, Typography, Container } from '@mui/material'

const FONT = '"Plus Jakarta Sans", sans-serif'

const STATS = [
  { num: 20, suffix: '+', label: 'Projects' },
  { num: 30, suffix: '+', label: 'Skills'   },
  { num: 10, suffix: '+', label: 'Certificates' },
]

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatItem({ num, suffix, label, started, delay }) {
  const [active, setActive] = useState(false)
  useEffect(() => {
    if (!started) return
    const t = setTimeout(() => setActive(true), delay)
    return () => clearTimeout(t)
  }, [started, delay])
  const count = useCountUp(num, 1800, active)

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography sx={{
        fontFamily: FONT, fontWeight: 800,
        fontSize: { xs: '2.2rem', md: '2.8rem' },
        lineHeight: 1, mb: 0.3,
        background: 'linear-gradient(135deg, #e91e8c, #722F99)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      }}>
        {count}{suffix}
      </Typography>
      <Typography sx={{ fontFamily: FONT, color: 'text.primary', opacity: 0.75, fontSize: { xs: '0.85rem', md: '0.95rem' }, fontWeight: 600 }}>
        {label}
      </Typography>
    </Box>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Box ref={ref} sx={{ py: { xs: 4, md: 6 }, bgcolor: 'transparent', position: 'relative', zIndex: 1 }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 5 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 6, md: 12 }, flexWrap: 'wrap' }}>
          {STATS.map((s, i) => (
            <StatItem key={i} {...s} started={started} delay={i * 200} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}