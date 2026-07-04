import './animations.css'

export default function FloatingParticles({ count = 20 }) {
  return (
    <div className="floating-particles" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="floating-particles__dot"
          style={{
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--size': `${4 + Math.random() * 8}px`,
            '--duration': `${8 + Math.random() * 12}s`,
            '--delay': `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  )
}
