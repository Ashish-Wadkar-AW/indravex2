import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ScrollReveal from '../components/ScrollReveal'
import { site, values, stats } from '../data/site'
import './About.css'

export default function About() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Indravex Technologies"
        subtitle={site.tagline}
      >
        <div className="page-hero__actions">
          <Link to="/contact" className="btn btn-primary">Work With Us →</Link>
          <Link to="/careers" className="btn btn-outline">View Careers</Link>
        </div>
      </PageHero>

      <section className="section about-story">
        <div className="container about-story__grid">
          <ScrollReveal direction="left">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Building the Future of <span className="gradient-text">Digital Intelligence</span></h2>
            <p className="about-text">
              {site.name} is a forward-thinking technology company based in Pune, India. We specialize in building scalable digital products, AI-driven solutions, and high-performance web experiences for businesses of all sizes.
            </p>
            <p className="about-text">
              From startups launching their first product to enterprises scaling their digital infrastructure, we bring the same level of passion, precision, and innovation to every project we undertake.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="about-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat">
                  <span className="about-stat__value">{stat.value}</span>
                  <span className="about-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Drives <span className="gradient-text">Everything We Do</span></h2>
          </ScrollReveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="value-card">
                  <div className="value-card__line" />
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <ScrollReveal>
            <div className="mission-box">
              <span className="mission-box__quote">"</span>
              <p className="mission-box__text">
                {site.description} We believe technology should empower businesses to work smarter, reach further, and grow faster.
              </p>
              <span className="mission-box__author">— {site.name}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}