import './animations.css'

const variants = ['bounce', 'spin', 'pulse', 'float', 'wiggle', 'orbit']

export default function AnimatedIcon({
  children,
  variant,
  index = 0,
  className = '',
  size = 'md',
}) {
  const anim = variant || variants[index % variants.length]

  return (
    <span
      className={`anim-icon anim-icon--${anim} anim-icon--${size} ${className}`}
      aria-hidden="true"
    >
      <span className="anim-icon__ring" />
      <span className="anim-icon__inner">{children}</span>
    </span>
  )
}
