import { useEffect, useRef } from 'react'

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  variant = 'default',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const dirClass =
    direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal'

  const variantClass = variant !== 'default' ? `anim-card-${variant}` : ''

  return (
    <div ref={ref} className={`${dirClass} ${variantClass} ${className}`.trim()}>
      {children}
    </div>
  )
}
