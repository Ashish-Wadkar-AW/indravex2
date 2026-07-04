import { useEffect, useRef, useState } from 'react'

function parseValue(val) {
  const match = String(val).match(/^(\d+)(.*)$/)
  if (!match) return { num: 0, suffix: val }
  return { num: parseInt(match[1], 10), suffix: match[2] }
}

export default function AnimatedCounter({ value, duration = 2000, className = '' }) {
  const { num, suffix } = parseValue(value)
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || num === 0) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * num))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [num, duration])

  if (num === 0) {
    return <span className={className}>{value}</span>
  }

  return (
    <span ref={ref} className={`anim-counter ${className}`}>
      {count}{suffix}
    </span>
  )
}
