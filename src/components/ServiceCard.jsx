import { Link } from 'react-router-dom'
import AnimatedIcon from './animations/AnimatedIcon'
import './ServiceCard.css'

const iconVariants = ['bounce', 'float', 'pulse', 'wiggle', 'orbit', 'spin']

export default function ServiceCard({ service, index = 0, animated = true }) {
  return (
    <Link to={`/services/${service.slug}`} className={`service-card service-card--anim-${index % 3}`}>
      <div className="service-card__glow" style={{ '--accent': service.accent }} />
      <div className="service-card__shine" aria-hidden="true" />
      <div className="service-card__icon" style={{ '--accent': service.accent }}>
        {animated ? (
          <AnimatedIcon variant={iconVariants[index % iconVariants.length]} index={index}>
            {service.icon}
          </AnimatedIcon>
        ) : (
          service.icon
        )}
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__tagline">{service.tagline}</p>
      <ul className="service-card__features">
        {service.features.slice(0, 3).map((f, fi) => (
          <li key={f} style={{ '--fi': fi }}>{f}</li>
        ))}
      </ul>
      <span className="service-card__link">
        Inquire About {service.title.split(' ')[0]}
        <span className="service-card__arrow">→</span>
      </span>
      <span className="service-card__index">{String(index + 1).padStart(2, '0')}</span>
    </Link>
  )
}
