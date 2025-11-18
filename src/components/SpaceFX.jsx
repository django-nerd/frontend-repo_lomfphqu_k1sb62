import React, { useEffect, useRef } from 'react'

// Fullscreen canvas starfield with parallax, twinkle, and meteors
export default function SpaceFX() {
  const canvasRef = useRef(null)
  const starsRef = useRef([])
  const meteorsRef = useRef([])
  const scrollSpeedRef = useRef(0)
  const lastScrollYRef = useRef(0)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })

    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      const { innerWidth: w, innerHeight: h } = window
      canvas.width = Math.floor(w * DPR)
      canvas.height = Math.floor(h * DPR)
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }

    // Initialize stars in 3 parallax layers
    function initStars() {
      const { innerWidth: w, innerHeight: h } = window
      const layers = [
        { count: Math.floor((w * h) / 9000), size: [0.6, 1.2], speed: 0.02, alpha: [0.3, 0.7] }, // far
        { count: Math.floor((w * h) / 12000), size: [1.0, 1.8], speed: 0.05, alpha: [0.4, 0.9] }, // mid
        { count: Math.floor((w * h) / 18000), size: [1.4, 2.4], speed: 0.09, alpha: [0.5, 1.0] }, // near
      ]
      const stars = []
      layers.forEach((layer, li) => {
        for (let i = 0; i < layer.count; i++) {
          stars.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: rand(layer.size[0], layer.size[1]),
            a: rand(layer.alpha[0], layer.alpha[1]),
            tw: Math.random() * Math.PI * 2,
            sp: layer.speed,
            layer: li,
          })
        }
      })
      starsRef.current = stars
    }

    function spawnMeteor(forceY) {
      const { innerWidth: w, innerHeight: h } = window
      const fromTop = Math.random() < 0.5
      const x = Math.random() * (w * 0.6) + w * 0.2
      const y = fromTop ? -40 : Math.random() * h * 0.3
      const len = rand(120, 260)
      const speed = rand(6, 12) + Math.abs(scrollSpeedRef.current) * 0.4
      const angle = (-35 + rand(-5, 5)) * (Math.PI / 180)
      meteorsRef.current.push({ x, y, len, speed, life: 1, angle })
    }

    function rand(a, b) { return a + Math.random() * (b - a) }

    function drawStars(dt) {
      const stars = starsRef.current
      const { innerWidth: w, innerHeight: h } = window
      for (let s of stars) {
        s.tw += dt * 0.002
        const twinkle = 0.6 + Math.sin(s.tw) * 0.4
        const parallax = s.sp * (scrollSpeedRef.current * 0.05)
        s.x -= parallax
        if (s.x < 0) s.x += w
        if (s.x > w) s.x -= w
        ctx.globalAlpha = s.a * twinkle
        // subtle color shift to nebula purple/gold
        const hue = s.layer === 2 ? 50 : s.layer === 1 ? 270 : 230
        ctx.fillStyle = `hsl(${hue} 90% 88%)`
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    function drawMeteors() {
      const next = []
      for (let m of meteorsRef.current) {
        m.x += Math.cos(m.angle) * m.speed
        m.y += Math.sin(m.angle) * m.speed
        m.life -= 0.006
        if (m.life > 0 && m.y < window.innerHeight + 100 && m.x < window.innerWidth + 200) {
          // draw trail
          const tx = m.x - Math.cos(m.angle) * m.len
          const ty = m.y - Math.sin(m.angle) * m.len
          const grad = ctx.createLinearGradient(m.x, m.y, tx, ty)
          grad.addColorStop(0, 'rgba(255,255,255,0.9)')
          grad.addColorStop(1, 'rgba(168,85,247,0)')
          ctx.strokeStyle = grad
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(m.x, m.y)
          ctx.lineTo(tx, ty)
          ctx.stroke()
          next.push(m)
        }
      }
      meteorsRef.current = next
    }

    let last = performance.now()
    function loop(now) {
      const dt = now - last
      last = now
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawStars(dt)
      drawMeteors()
      // occasional meteor spawn
      if (Math.random() < 0.02 + Math.min(Math.abs(scrollSpeedRef.current) / 2000, 0.06)) {
        spawnMeteor()
      }
      rafRef.current = requestAnimationFrame(loop)
    }

    function onScroll() {
      const y = window.scrollY
      scrollSpeedRef.current = y - lastScrollYRef.current
      lastScrollYRef.current = y
      if (Math.abs(scrollSpeedRef.current) > 20) {
        if (Math.random() < 0.4) spawnMeteor()
      }
    }

    resize()
    initStars()
    window.addEventListener('resize', () => {
      resize()
      initStars()
    })
    window.addEventListener('scroll', onScroll, { passive: true })
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  )
}
