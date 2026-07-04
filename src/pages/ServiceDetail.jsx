import { Link, Navigate, useParams } from 'react-router-dom'
import PageHero, { PageHeroBreadcrumb } from '../components/PageHero'
import ScrollReveal from '../components/ScrollReveal'
import { getServiceBySlug, services } from '../data/services'
import './ServiceDetail.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/services" replace />

  const others = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero
        label={service.title}
        title={service.title}
        subtitle={service.description}
      >
        <PageHeroBreadcrumb
          items={[
            { label: 'Home', path: '/' },
            { label: 'Services', path: '/services' },
            { label: service.title },
          ]}
        />
        <div className="page-hero__actions">
          <Link to="/contact" className="btn btn-primary">
            Inquire About {service.title} →
          </Link>
          <Link to="/services" className="btn btn-outline">
            All Services
          </Link>
        </div>
      </PageHero>

      <section className="section service-detail">
        <div className="container service-detail__grid">
          <ScrollReveal direction="left">
            <div className="service-detail__icon" style={{ '--accent': service.accent }}>
              {service.icon}
            </div>
            <h2 className="service-detail__heading">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="service-detail__desc">{service.description}</p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <ul className="feature-list">
              {service.features.map((feature, i) => (
                <li key={feature} className="feature-list__item" style={{ animationDelay: `${i * 0.08}s` }}>
                  <span className="feature-list__num">{String(i + 1).padStart(2, '0')}</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="section service-detail__cta">
        <div className="container">
          <ScrollReveal>
            <div className="service-cta-box">
              <h2>Ready to get started with {service.title}?</h2>
              <p>Let's discuss your project and create a solution tailored to your needs.</p>
              <Link to="/contact" className="btn btn-primary">
                Contact Us Today →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section related-services">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Explore More</span>
            <h2 className="section-title">Related Services</h2>
          </ScrollReveal>
          <div className="related-grid">
            {others.map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 100}>
                <Link to={`/services/${s.slug}`} className="related-card">
                  <span className="related-card__icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.tagline}</p>
                  <span className="related-card__link">Learn more →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
