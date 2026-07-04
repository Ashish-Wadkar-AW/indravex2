import { useEffect, useRef } from 'react'
import './animations.css'

export default function AnimatedTitle({
  text,
  as: Tag = 'h1',
  className = '',
  variant = 'words',
  delay = 0,
  trigger = 'mount',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const run = () => {
      el.classList.add('anim-title--play')
    }

    if (trigger === 'scroll') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            run()
            observer.disconnect()
          }
        },
        { threshold: 0.2 }
      )
      observer.observe(el)
      return () => observer.disconnect()
    }

    const timer = setTimeout(run, delay)
    return () => clearTimeout(timer)
  }, [delay, trigger, text])

  if (variant === 'chars') {
    return (
      <Tag ref={ref} className={`anim-title anim-title--chars ${className}`} aria-label={text}>
        {text.split('').map((char, i) => (
          <span key={i} className="anim-title__unit" style={{ '--i': i }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </Tag>
    )
  }

  return (
    <Tag ref={ref} className={`anim-title anim-title--words ${className}`} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="anim-title__word-wrap">
          <span className="anim-title__unit" style={{ '--i': i }}>
            {word}
          </span>
          {i < text.split(' ').length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}
