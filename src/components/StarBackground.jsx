import { useEffect, useRef } from 'react'

export default function StarBackground({ mode }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    document.body.appendChild(canvas)
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const NUM = 350
    let W = canvas.width
    let H = canvas.height

    const stars = Array.from({ length: NUM }, () => ({
      x: Math.random() * W - W / 2,
      y: Math.random() * H - H / 2,
      z: Math.random() * W,
      pinkish: Math.random() < 0.15,
    }))

    const draw = () => {
      W = canvas.width
      H = canvas.height
      const cx = W / 2
      const cy = H / 2
      const isDark = mode === 'dark'

      // bg
      ctx.fillStyle = isDark ? '#0a0a14' : '#fdf0f7'
      ctx.fillRect(0, 0, W, H)

      stars.forEach(star => {
        star.z -= 0.6
        if (star.z <= 0) {
          star.x = Math.random() * W - cx
          star.y = Math.random() * H - cy
          star.z = W
        }

        const sx   = cx + (star.x / star.z) * W
        const sy   = cy + (star.y / star.z) * H
        const size = Math.max(0.2, (1 - star.z / W) * 3.5)
        const op   = Math.max(0.1, 1 - star.z / W)

        const color = star.pinkish ? '#e91e8c'
          : isDark ? `rgba(255,255,255,${op})` : `rgba(180,100,180,${op})`

        ctx.shadowBlur  = size * 3
        ctx.shadowColor = '#e91e8c'
        ctx.beginPath()
        ctx.arc(sx, sy, size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
      })

      ctx.shadowBlur = 0
      raf = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => { resize(); W = canvas.width; H = canvas.height }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas)
    }
  }, [mode])

  return (
    <canvas ref={canvasRef} style={{
      position: 'fixed', top: 0, left: 0,
      width: '100vw', height: '100vh',
      zIndex: -1, pointerEvents: 'none', display: 'block',
    }} />
  )
}