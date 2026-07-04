import './AnimatedBackground.css'

export default function AnimatedBackground({ variant = 'hero' }) {
  return (
    <div className={`animated-bg animated-bg--${variant}`} aria-hidden="true">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="grid-overlay" />
      <div className="floating-shapes">
        <span className="shape shape-1">◈</span>
        <span className="shape shape-2">✦</span>
        <span className="shape shape-3">◇</span>
        <span className="shape shape-4">⬡</span>
      </div>
    </div>
  )
}
