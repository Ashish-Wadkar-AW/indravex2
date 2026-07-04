import { Link } from 'react-router-dom'
import AnimatedBackground from '../components/AnimatedBackground'
import ScrollReveal from '../components/ScrollReveal'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'
import { site, stats } from '../data/site'
import './Home.css'

export default function Home() {
  return (
    <>
      <section className="hero">
        <AnimatedBackground variant="hero" />
        <div className="container hero__inner">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Digital Innovation Partner
          </div>
          <h1 className="hero__title">
            Engineering <span className="gradient-text">Digital Intelligence</span>
            <br />
            for a Smarter Tomorrow
          </h1>
          <p className="hero__subtitle">{site.description}</p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn-primary">
              Start Your Project →
            </Link>
            <Link to="/services" className="btn btn-outline">
              Explore Services
            </Link>
          </div>
          <div className="hero__stats">
            {stats.map((stat, i) => (
              <div key={stat.label} className="hero__stat" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">
              Services That Drive <span className="gradient-text">Real Results</span>
            </h2>
            <p className="section-subtitle">
              From stunning websites to AI-powered solutions, we deliver end-to-end digital services tailored to your business goals.
            </p>
          </ScrollReveal>
          <div className="services-preview__grid">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 100}>
                <ServiceCard service={service} index={i} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="services-preview__cta">
              <Link to="/services" className="btn btn-dark">
                View All Services →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section why-us">
        <div className="container why-us__grid">
          <ScrollReveal direction="left">
            <span className="section-label">Why Indravex</span>
            <h2 className="section-title">
              Built for Growth, <span className="gradient-text">Designed to Convert</span>
            </h2>
            <p className="section-subtitle">
              We combine cutting-edge technology with strategic thinking to create digital products that don't just look great — they perform.
            </p>
            <ul className="why-us__list">
              <li>
                <span className="why-us__check">✓</span>
                SEO-optimized, high-performance builds
              </li>
              <li>
                <span className="why-us__check">✓</span>
                AI-driven automation & intelligence
              </li>
              <li>
                <span className="why-us__check">✓</span>
                Scalable architecture for enterprise growth
              </li>
              <li>
                <span className="why-us__check">✓</span>
                Dedicated teams & quick hiring process
              </li>
            </ul>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: '28px' }}>
              Learn About Us →
            </Link>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="why-us__visual">
              <div className="why-us__ring why-us__ring--1" />
              <div className="why-us__ring why-us__ring--2" />
              <div className="why-us__ring why-us__ring--3" />
              <div className="why-us__center">
                <span>◈</span>
                <p>Indravex</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section cta-banner">
        <AnimatedBackground variant="dark" />
        <div className="container cta-banner__inner">
          <ScrollReveal>
            <h2 className="cta-banner__title gradient-text-light">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="cta-banner__text">
              Let's build something extraordinary together. From concept to launch, we're with you every step of the way.
            </p>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn-primary">
                Inquire Now →
              </Link>
              <Link to="/careers" className="btn btn-outline-light">
                Join Our Team
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}